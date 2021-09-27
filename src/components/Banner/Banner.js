import React from 'react';
import Paw from '../../images/Clemson_Paw.png';

const Banner = () => {
    return (
      <React.Fragment>
        <div className="banner">
            <img src={Paw}/>
            <h3>Clemson University's Teacher Learning Progression</h3>
        </div> 
      </React.Fragment>
    )
}

export default Banner;