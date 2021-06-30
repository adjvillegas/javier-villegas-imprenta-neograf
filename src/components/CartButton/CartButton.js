import React from 'react'

const CartButton = () => {

    const changeItemCount = () => {

        let varCount = document.getElementById("spanCartWidget").innerText
        let myCount = parseInt(varCount) + 1

        document.getElementById("inputItemCount").value = "1"
        document.getElementById("divSubTotal").classList.add("d-none")
        
        document.getElementById("spanCartWidget").innerText = myCount
        document.getElementById("spanCartWidget").classList.remove("visually-hidden")
    }

    return (
        <div className="row row-cols-1 justify-content-center gy-1">
            <button className="col-4 btn btn-danger"type="button" onClick={changeItemCount}>COMPRAR</button>
        </div>
    )
}

export default CartButton
