import React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import RecommendationsList from './RecommendationsList';
import Banner from '../Banner/Banner';
import AI from '../../images/ai.png';
import Human from '../../images/human.png';

const RecommendationsPage = (props) => {
  const exp_index=props.Exp_Condition_1-1
  const exp_text = ["AI-algorithm","expert"]
  const exp_img = [AI,Human]
  // <b>{exp_text[exp_index]}</b>

    return (
      <React.Fragment>
        <div className="fullpage-card">
            <Banner/>
            <h2>Your Recommendations</h2>
            <img src={exp_img[exp_index]}/>
            <h4 style={{color: "#222222"}}>The <b>{exp_text[exp_index]}</b> generated the following recommendations based on your profile. These recommendations are for professional development pathways, which consist of multiple required courses. These recommendations are ranked, so that the first recommendation is expected to suit you most.</h4>
            <h4 tyle={{color:"222222"}}>Please review you recommendations here and continue on to the next page to begin selecting options you would like to take.</h4>
            <RecommendationsList recommendations={props.recommendations} Exp_Condition_2={props.Exp_Condition_2}/>
            <Link className="next-link" to="/" style={{float: "left"}}>
              <Button type="primary">Back</Button>
            </Link>
            <Link className="next-link" to="/pathways">
              <Button type="primary">View Options and Make Selections</Button>
            </Link>
        </div> 
      </React.Fragment>
    )
}

export default RecommendationsPage;