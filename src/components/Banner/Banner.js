import React from 'react';
import Paw from '../../images/Clemson_Paw.png';
// import { Progress } from 'antd';


const Banner = () => {
    return (
      <React.Fragment>
        <div className="banner">
            <img src={Paw} alt="Paw"/>
            <h3>Clemson University's Teacher Learning Progression</h3>
            {/* <Progress percent={60} steps={5} size="large" /> */}
        </div> 
      </React.Fragment>
    )
}

export default Banner;