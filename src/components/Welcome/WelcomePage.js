import React from 'react';
import { Button } from 'antd';
import { Link, withRouter } from "react-router-dom";
import Banner from '../Banner/Banner';


const WelcomePage = () => {
    return (
      <React.Fragment>
        <div className="fullpage-card">
          <Banner/>
          <h2>Welcome to the CU-TLP online platform</h2>
          <h3>Your recommendations are ready</h3>
          <h4 style={{color: "#222222"}}>In the following pages, you can view your recommendations and other options that you can pursue. Then, you will select options that interests you and sign the commitment form.</h4>
          <Link className="next-link" to="/recommendations">
            <Button type="primary">View Recommendations</Button>
          </Link>
        </div> 
      </React.Fragment>
    )
}

export default WelcomePage;