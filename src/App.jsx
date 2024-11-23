// eslint-disable-next-line no-unused-vars
import React from "react";
import {  Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar.jsx"; // Example home page
// import Text from "./Components/Marquee/MarqueeText.jsx"
// import Product from "./Components/Productoverview/Overview.jsx"
import Homepage from "./Pages/Home/Homepage.jsx"
import About from "./Pages/About/About.jsx" 
import Create from "./Components/Creatacc/Creatacc.jsx"
// import Hero from "./Components/Hero/Hero.jsx"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="Create" element={<Create />} />
      <Route path="About" element={<About />} />
    </Routes>
      </>
  );
};

export default App;  