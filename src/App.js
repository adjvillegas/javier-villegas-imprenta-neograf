import React, {Component} from 'react';
import './App.css'; 

// Component
import NavBar from './components/Header/NavBar'
import ItemListContainer from './components/Body/ItemListContainer'

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <ItemListContainer greeting={"Esta sección es un prototipo. Pagina en Construcción"}/>
            </div>
        );
    }
}

export default App;