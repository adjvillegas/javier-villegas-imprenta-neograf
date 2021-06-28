import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Boostrap -> npm install --save bootstrap -> https://create-react-app.dev/docs/adding-bootstrap/ 
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('home')
);

