import React from "react";
import { Route, Routes } from "react-router-dom";

// ------- components --------------------------------------
import Header from "./components/Header";
import Home from "./pages/Home";
import Bus from "./pages/Bus";
import MapPage from "./pages/MapPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// --------- CSS --------------------------------------------
import "./assets/CSS/App.css";
import {
  ApplicationContext,
  ContextWrapper,
} from "./context/ApplicationContext";
import Map from "./components/Map";

export default function App() {
  const pathNow = location.pathname;

  const context = React.useContext(ApplicationContext);

  if (context?.content.loading) return <div>Loading..</div>;

  return (
    <div className="main-container">
      {pathNow !== "/map" ? <Header /> : null}
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/*<Route path='/choose' element={<Choose />} />*/}
          <Route path="/choose/map" element={<Map />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
      {/*<Footer />*/}
    </div>
  );
}
