import React from 'react'

//React Router DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component
import NavBar from '../components/Header/NavBar';

//View
import Home from '../views/Home/Home';

//Component
import Cart from '../components/Main/CartContainer';
import NotFound from '../views/NotFound/PagNotFound';
import ItemListContainer from '../components/Main/ItemListContainer';
import Order from '../components/Main/OrderContainer.js';
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
                <Route path="/item/:id" exact component={ItemDetail}></Route>
                <Route path="/cart" exact component={Cart}></Route>
                <Route path="/order" exact component={Order}></Route>
                <Route to="/" component={NotFound}></Route>
            </Switch>
        </div>
        </Router>
        </CartProvider>
    )
}

export default RouterApp
