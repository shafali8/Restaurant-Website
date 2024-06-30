import React from 'react';
import SubHeading from "../../Components/SubHeading/SubHeading";
import images from '../../Constant/images';
import './Chef.css';

const Chef = () => {
  return (
   <div className="app__bg app__wrapper seaction__padding">
    <div className="app__wrapper_img">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title={"Chef's World"}/>
      <h2 className="headtext__cormorant">
        What We Believe In
      </h2>
      <div className="app__chef-constent">
        <div className="app__chef-constent-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem fugit vel.
          </p>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem fugit vel inventore culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, veniam.
          </p>
          <div className="app__chef-sign">
            <p>Kevin Luis</p>
          <p className="p__opensans">
            Chef & Founder
          </p>
          <img src={images.sign} alt="Chef's Sign" />
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Chef
