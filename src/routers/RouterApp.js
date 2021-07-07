import React from 'react'

//React Router DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component
import NavBar from '../components/Header/NavBar';

//View
import Home from '../views/Home/Home';
import ItemDetail from '../views/ItemDetail/ItemDetail';
import NotFound from '../views/NotFound/NotFound';

//Component -> Agregado por petición de los objetivos de entrega
import ItemListContainer from '../components/Main/ItemListContainer';
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
                <Route to="/" component={NotFound}></Route>
            </Switch>
        </div>
        </Router>
        </CartProvider>
    )
}

export default RouterApp
