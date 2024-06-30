import React from 'react';

import AboutUs from "./Container/AboutUs/AboutUs"
import Chef from "./Container/Chef/Chef"
import FindUs from "./Container/Findus/FindUs"
import Footer from "./Container/Footer/Footer"
import Gallery from "./Container/Gallery/Gallery"
import Header from "./Container/Header/Header"
import Intro from "./Container/Intro/Intro"
import Laurels from "./Container/Laurels/Laurels"
import SpecialMenu from "./Container/SpecialMenu/SpecialMenu"


import Navbar from "./Components/Navbar/Navbar"
import "./index.css";
import './index.css'

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
