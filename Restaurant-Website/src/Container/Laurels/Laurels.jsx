import React from 'react';
import SubHeading from "../../Components/SubHeading/SubHeading";
import images from '../../Constant/images';
import data from '../../Constant/data'

import './Laurels.css';

const Laurels = () => {

const AwardCard = ({ award: {imgUrl, title, subtitle} }) => (
 <div className="app__laurels_awards">
   <img src={imgUrl} alt="" />
   <div className="app__laurels_awards-card_content">
    <p className="p__cormorant" style={{color: '#DCCA87'}}>{title}</p>
    <p className="p__cormorant">{subtitle}</p>
   </div>
 </div>
);

  return (
 <div className="app__bg app__wrapper section__padding" id="awards">
  <div className="app__wrapper_info">
   <SubHeading title={"Awards & recognition"}/>
   <h1 className="headtext__cormorant">Our Laurels</h1>

   <div className="app__laurels_awards">
    {data.awards.map((award) => 
    <AwardCard award={award} key={award.title}/>)}
   </div>
  </div>


 </div>
  )
}

export default Laurels;
