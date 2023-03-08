import React from 'react';
import { Route, Routes } from 'react-router-dom';


// ------- components --------------------------------------
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Home from './assets/pages/Home';
import Bus from './assets/pages/Bus';
import Information from './assets/pages/Information';
import MapPage from './assets/pages/MapPage';
import Login from './assets/pages/Login';
import Signup from "./assets/pages/Signup";

import ApiTesting from './assets/pages/ApiTesting';

// --------- CSS --------------------------------------------
import './assets/CSS/App.css'
import { ContextWrapper } from './contexts/ApplicationContext';


export default function App() {
    const pathNow = location.pathname;

    return (
        <ContextWrapper>
            <div className='main-container'>
                {pathNow !== "/map" ? <Header /> : null}
                <div className="page-container">
                    <Routes >
                        <Route path='/' element={<Home />} />
                        <Route path='/bus' element={<Bus />} />
                        <Route path='/information' element={<Information />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/map' element={<MapPage />} />
                        <Route path='/api' element={<ApiTesting />} />
                    </Routes>
                </div>
                {/*<Footer />*/}
            </div>
        </ContextWrapper>
    )
}


