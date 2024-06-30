import React from 'react';
import image from "../../Constant/images";
import "./SubHeading.css";

const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom: '1rem'}}>
     <p className="p__cormorant">{title}</p>
     <img src={image.spoon} alt="spoon" className="spoon__img" />
    </div>
  )
}
export default SubHeading
