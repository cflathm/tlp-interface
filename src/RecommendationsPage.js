import React, { Component } from 'react';
import RecommendationsList from './RecommendationsList';

const RecommendationsPage = () => {
    return (
      <React.Fragment>
        <div style={{padding: 130 + "px", paddingTop: 0 + "px"}}>
          <h2 style={{marginLeft: -40 + "px", paddingTop: -100 + "px"}}>Your Recommendations</h2>
          <h4 style={{color: "#222222", margin: -3 + "px"}}>The system generated the following recommendations for you to pursue. These recommendations are ranked, so that the first recommendation is expected to suit you most.</h4>
          <RecommendationsList/>
        </div> 
      </React.Fragment>)
}

export default RecommendationsPage;