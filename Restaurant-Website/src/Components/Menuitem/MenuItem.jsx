import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p__cormorent" 
          style={{color: '#DCCA87'}}>
            {title}
          </p>
        </div>

        <div className='app__menuitem-dash'/>
        <div className="app__menuitem-price">
          <p className="p__cormorant">
            {price}
          </p>
        </div>

        <div className="app__menuitem-sub p__opensans">
          {tags}
        </div>
      </div>
    </div>
  )
}

export default MenuItem
