import React from "react";

import "./AboutUs.css";
import images from "../../Constant/images";

const AboutUs = () => {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content-about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aliquam dolor eligendi consectetur distinctio alias vitae nesciunt nostrum ab aut!</p>
          <button type="button" className="custom__button">Know More</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
            <img src={images.knife} alt="" />
        </div>

        <div className="app__aboutus-constent-history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aliquam dolor eligendi consectetur distinctio alias vitae nesciunt nostrum ab aut!</p>
          <button type="custom__button" className="custom__button">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
