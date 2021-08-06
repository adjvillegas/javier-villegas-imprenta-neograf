
import React, { createContext, useContext, useState }  from 'react'

// db from Firebase
import { fauth, OrderCollections } from '../../Firebase'

export const CartContext = createContext({});

//Hook para importación del CartContext
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    
    const [carts, setCarts] = useState([]) 
    const [user, setUser] = useState([])
    const [order, setOrder] = useState([])
    const [newOrder, setNewOrder] = useState(undefined)

    const getResumen = (oData) => {

        let subTotal = oData.reduce((acc, item) => { return acc + (item.precioDesde * item.quantity) },0).toFixed(2)
        let price = oData.reduce((acc, item) => { return acc + (item.precioDesde * item.quantity * item.iva) },0).toFixed(2)        
        let importing = oData.reduce((acc, item) => { return acc + (item.precioDesde * item.quantity * item.iva) - (item.precioDesde * item.quantity) },0).toFixed(2)

        return({ subTotal, importing, price })           
    }

    const isInCart = (itemId) => carts.some( cart => cart.id === itemId )

    const realStock = (product) => {
        const foundItem = carts.find( cart => cart.id === product.id)
        return foundItem ? product.stock - foundItem.quantity : product.stock
    }

    const addItem = (Item, quantity) => {

        if (!isInCart(Item.id)) {

        setCarts(prev => [...prev, {...Item, quantity } ])
        setNewOrder(undefined)

    } else {

            const newCarts = carts.map( newCart => {
                if (newCart.id === Item.id) {

                    return {...newCart, quantity: newCart.quantity + quantity}

                } else return newCart
            })
            
            setCarts(newCarts)
            setNewOrder(undefined)
    
        }
    }

    const addOrder = async(oObject) => {

        let date = getCurrentDay('.')
        let buyer = oObject
        let resume = getResumen(carts)
        let items = carts.map(cart => {

            let newArray = {
                id: cart.id,
                descripcion: cart.descripcion,
                quantity: cart.quantity,
                iva: cart.iva,
                precio: cart.precioDesde * cart.quantity
            }

            return (newArray)
        })

        let oOrder = 
        { buyer, 
          items, 
          precio: resume.subTotal, 
          impuesto: resume.importing, 
          total: resume.price, 
          date: date,
          estatus: "Generado"
        }
     
        setNewOrder(prev => [...prev, {...oOrder, oOrder } ])

            await OrderCollections.add(oOrder).then( ({id}) => {

                setNewOrder(id)
                clear()

            }).catch(err => {
                debugger
                console.log(err)
            })

    }

    const removeItem = (itemId) => {
    
        setCarts(carts.filter( cart => cart.id !== itemId))

    }

    const clear = () => {
        setCarts([])
    }

    const zeroLeft = (n) => {
        return ("00" + n).slice(-2);
    }

    const getCurrentDay = (separate = '/') => {
        const date = new Date()
        
        return [ zeroLeft(date.getDate()),
                 zeroLeft(date.getMonth()+1),
                 date.getFullYear()        
        ].join(separate)
        
    }

    const getUser = async (oObject) => {
        
         await fauth.signInWithEmailAndPassword(oObject.user, oObject.pass)
        .then((userCredential) => {
     
          setUser({id: userCredential.user.uid, email: userCredential.user.email, create: false});
        
          (async () => {
        
            let container = OrderCollections
         
            if (userCredential.user.email) container = OrderCollections.where("buyer.email", "==", userCredential.user.email)

            const response = await container.get()
            
            if (!response.empty) {
                setOrder(response.docs.map(order => ({ id: order.id, ...order.data() })))
            } else {
                setOrder(undefined)
            }

          })()
   
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode)
          console.log(errorMessage)          
        });

    }

    const createNewUser = async (oObject) => {
       
        await fauth.createUserWithEmailAndPassword(oObject.user, oObject.pass)
        .then((userCredential) => {
         
          setUser({id: userCredential.user.uid, email: userCredential.user.email, create: true});

        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode)
          console.log(errorMessage)
      
        });

    }


    return (

        <CartContext.Provider value={
            {carts,
             user,
             order,
             newOrder,
             isInCart,
             realStock, 
             addItem,
             addOrder,
             removeItem, 
             clear,
             getResumen,
             getCurrentDay,
             getUser,
             createNewUser}}>        
            {children}
        </CartContext.Provider>
    )
}

