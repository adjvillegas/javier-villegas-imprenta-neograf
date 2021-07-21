import React from 'react'

//React Router DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component
import NavBar from '../components/Header/NavBar';

//View
import Home from '../views/Home/Home';

//Component
import Cart from '../components/Main/CartContainer';
import NotFound from '../views/NotFound/NotFound';
import Order from '../components/Main/OrderContainer.js';
import ItemListContainer from '../components/Main/ItemListContainer';
import OrderForm from '../components/Main/OrderFormContainer.js';
import ItemDetail from  '../components/Main/ItemDetailContainer';

//Provider
import { CartProvider } from '../providers/Cart/CartContext';


const RouterApp = () => {
    return (
        <CartProvider>
        <Router>
        <div>
            <NavBar />
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/" exact component={ItemListContainer}></Route>
                <Route path="/category/:id" exact component={ItemListContainer}></Route>
                <Route path="/detail/:id" exact component={ItemDetail}></Route>
                <Route path="/cart" exact component={Cart}></Route>
                <Route path="/orderForm" exact component={OrderForm}></Route>
                <Router path="order/:id" exact component={Order}></Router>
                <Route to="/" component={NotFound}></Route>
            </Switch>
        </div>
        </Router>
        </CartProvider>
    )
}

export default RouterApp
