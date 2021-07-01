import React from 'react'

//React Router DOM
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Component
import NavBar from '../components/Header/NavBar';

//View
import Home from '../views/Home/Home';
import Products from '../views/Products/Products';
import ItemDetail from '../views/ItemDetail/ItemDetail';
import NotFound from '../views/NotFound/NotFound';

const RouterApp = () => {
    return (
        <Router>
        <div>
            <NavBar />
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/" exact component={Products}></Route>
                <Route path="/detail/:id" exact component={ItemDetail}></Route>
                <Redirect to="/" component={NotFound}></Redirect>
            </Switch>
        </div>
        </Router>
    )
}

export default RouterApp
