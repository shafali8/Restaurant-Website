import SubHeading from "../../Components/SubHeading/SubHeading"
import images from "../../Constant/images";
import './Header.css';

const Header = () => {

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title={"The Key to Fine Dining"}/>
        <h1 className="app__header-h1">
          The Key to Fine Dining
        </h1>
        <p className="p__opensans" style={{margin: '2rem 0'}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores accusantium ut similique quo? Exercitationem sed libero a! Qui!
        </p>
        <button type="button" className="custom__button">Explore More</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header mage" />
      </div>
    </div>
  )
}

export default Header;
