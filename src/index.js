import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

import App from './App';




ReactDOM.render(
    <BrowserRouter>
                    <App />
    </BrowserRouter>
               , document.getElementById('root'));

