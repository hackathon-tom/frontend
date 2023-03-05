import React from 'react';
import { Route, Routes } from 'react-router-dom';


// ------- components --------------------------------------
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Home from './assets/components/Home';
import Page from './assets/components/Page';

// --------- CSS --------------------------------------------
import './assets/CSS/App.css'


export default function App() {
  return(
      <>
          <Header/>
          <Routes >
              <Route path='/' element={<Home />}/>
              <Route path='/page/:id' element={<Page/>}/>     
          </Routes>
          <Footer/>
      </>
  );
}


