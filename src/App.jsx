import React from 'react';
import { Route, Routes } from 'react-router-dom';


// ------- components --------------------------------------
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Home from './assets/components/Home';
import Bus from './assets/components/Bus';
import Information from './assets/components/Information';
import Choose from './assets/components/Choose';
import Map from './assets/components/Map';
// --------- CSS --------------------------------------------
import './assets/CSS/App.css'


export default function App() {
  return(
      <>
          <Header/>
          <Routes >
              <Route path='/' element={<Home />}/>
              <Route path='/bus' element={<Bus/>}/> 
              <Route path='/information' element={<Information/>}/> 
              <Route path='/choose' element={<Choose/>}/>
              <Route path='/choose/map' element={<Map/>}/>
          </Routes>
          <Footer/>
      </>
  );
}


