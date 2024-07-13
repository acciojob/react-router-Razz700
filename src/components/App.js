
import React from "react";
import './../styles/App.css';
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
   
      <ul>
        <li><a><Link to='/'>Home</Link></a></li>
        <li><a><Link to='/about'>About</Link></a></li>
      </ul>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
