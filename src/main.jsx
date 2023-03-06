import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'


// ---- CSS -------------------------------------
import './assets/CSS/index.css';
import './assets/CSS/Footer.css';
import './assets/CSS/Header.css';
import './assets/CSS/Pages.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
    
);

