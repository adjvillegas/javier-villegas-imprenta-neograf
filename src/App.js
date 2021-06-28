import React, {Component} from 'react';

//React Router DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// Component
import NavBar from './components/Header/NavBar';


//View
import Home from './views/Home/Home';
import Products from './views/Products/Products';
// import Contact from './views/Contact/Contact';
// import Login from './views/Login/Login';
// import Shop from './views/Shop/Shop';
import ItemDetail from './views/ItemDetail/ItemDetail';
import NotFound from './views/NotFound/NotFound';


class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/product" exact component={Products}></Route>
                    {/* <Route path="/contact" exact component={Contact}></Route> */}
                    {/* <Route path="/login" exact component={Login}></Route> */}
                    {/* <Route path="/shop" exact component={Shop}></Route>       */}
                    <Route path="/detail/:id" exact component={ItemDetail}></Route>                                  
                    <Route path="/" component={NotFound}></Route>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default App;