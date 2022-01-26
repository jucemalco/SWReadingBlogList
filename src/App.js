import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Personajes from "./components/Personajes";
import Vehicles from "./components/Vehicles";
import Planets from "./components/Planets";
import Footer from "./components/Footer";

const App = () => {
  return <>
    <Router>
    <Navbar /> 
      <Routes>
        <Route path="/" element={<Personajes /> }/> 
        <Route path="/" element={<Vehicles /> }/> 
        <Route path="/" element={<Planets /> }/> 
      </Routes>
    </Router>
  </>
}

export default App;