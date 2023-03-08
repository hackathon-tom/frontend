import React from 'react';
import { Route, Routes } from 'react-router-dom';


// ------- components --------------------------------------
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Home from './assets/pages/Home';
import Bus from './assets/pages/Bus';
import Information from './assets/pages/Information';
import Choose from './assets/components/Choose';
import Map from './assets/pages/Map';
import Login from './assets/pages/Login';
import Signup from "./assets/pages/Signup";

import ApiTesting from './assets/pages/ApiTesting';

// --------- CSS --------------------------------------------
import './assets/CSS/App.css'


export default function App() {
    return (
        <div className='main-container'>
            <Header />
            <div className="page-container">
                <Routes >
                    <Route path='/' element={<Home />} />
                    <Route path='/bus' element={<Bus />} />
                    <Route path='/information' element={<Information />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/choose' element={<Choose />} />
                    <Route path='/choose/map' element={<Map />} />
                    <Route path='/api' element={<ApiTesting />} />
                </Routes>
            </div>
            {/*<Footer />*/}
        </div>
    );
}


