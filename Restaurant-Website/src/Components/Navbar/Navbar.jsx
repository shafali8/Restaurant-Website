import "./Navbar.css";
import menu from "../../assets/menu.png" 
import images from "../../Constant/images";
import { useState } from "react";

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className="app__navbar">
    <div className="app__navbar-logo">
      <a href="#home" className="logo">Giggles</a>
    </div>
    <ul className="app__navbar-links">
      <li className="p__cormoran">
        <a href="#home">Home</a>
      </li>
      <li className="p__cormoran">
        <a href="#about">About</a>
      </li>
      <li className="p__cormoran">
        <a href="#menu">Menu</a>
      </li>
      <li className="p__cormoran">
        <a href="#gallery">Photos</a>
      </li>
      <li className="p__cormoran">
        <a href="#awards">Awards</a>
      </li>
    </ul>
    {/* login & registration */}
    <div className="app__navbar-login">
      <a href="#login" className="p__cormoran logIn">Subscribe</a>
      <div></div>
    <a href="#book" className="p__cormoran">Book a Table</a>
    </div>
    {/* Small Screen navbar */}
    <div className="app__navbar-smallscreen">
      <img src={menu} alt="" onClick={() => setToggle(true)}/>
     

      {toggle && (  
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
           <div className="overlay__close" onClick={() => setToggle(false)}>X</div>
              <ul className="app__navbar-smallscreen-links">
                <li className="p__cormoran"><a href="#home">Home</a></li>
                <li className="p__cormoran"><a href="#about">About</a></li>
                <li className="p__cormoran"><a href="#menu">Menu</a></li>
                <li className="p__cormoran"><a href="#gallery">Photos</a></li>
                <li className="p__cormoran"><a href="#awards">Awards</a></li>
              </ul>
        
      </div> 
    )}

    

    </div>
  </nav>
  )
}

export default Navbar;
