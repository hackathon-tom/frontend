import React from 'react';
import { Route, Routes } from 'react-router-dom';


// ------- components --------------------------------------
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Home from './assets/pages/Home';
import Bus from './assets/pages/Bus';
import Information from './assets/pages/Information';
import Choose from './assets/components/Choose';
import MapPage from './assets/pages/MapPage';
import Login from './assets/pages/Login';

import ApiTesting from './assets/pages/ApiTesting';

// --------- CSS --------------------------------------------
import './assets/CSS/App.css'


export default function App() {
    const pathNow = location.pathname;

    if (pathNow == '/map') {
            return (
                <Routes>
                    <Route path='/map' element={<MapPage />} />
                </Routes>
            );
    }else {
        return (
        
            <>
                <Header />
                <Routes >
                    <Route path='/' element={<Home />} />
                    <Route path='/bus' element={<Bus />} />
                    <Route path='/information' element={<Information />} />
                    <Route path='/login' element={<Login />} />
                    
                    <Route path='/api' element={<ApiTesting />} />
                </Routes>
                <Footer />
            </>
        );
    }
    
}


