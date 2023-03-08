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
import Signup from "./assets/pages/Signup";

import ApiTesting from './assets/pages/ApiTesting';

// --------- CSS --------------------------------------------
import './assets/CSS/App.css'


export default function App() {
<<<<<<< HEAD
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
=======
    return (
        <div className='main-container'>
            <Header />
            <div className="page-container">
>>>>>>> f51f487d9e5393cbdce3d46975d5baf3706afba7
                <Routes >
                    <Route path='/' element={<Home />} />
                    <Route path='/bus' element={<Bus />} />
                    <Route path='/information' element={<Information />} />
                    <Route path='/login' element={<Login />} />
<<<<<<< HEAD
                    
                    <Route path='/api' element={<ApiTesting />} />
                </Routes>
                <Footer />
            </>
        );
    }
    
=======
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/choose' element={<Choose />} />
                    <Route path='/choose/map' element={<Map />} />
                    <Route path='/api' element={<ApiTesting />} />
                </Routes>
            </div>
            {/*<Footer />*/}
        </div>
    );
>>>>>>> f51f487d9e5393cbdce3d46975d5baf3706afba7
}


