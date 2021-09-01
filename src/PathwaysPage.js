import React, { Component } from 'react';
import MastersDegreeTable from './MastersDegreeTable';
import EndorsementsTable from './EndorsementsTable';
import { Alert } from 'antd';



const PathwaysPage = () => {
    return (
      <React.Fragment>
        <div style={{padding: 130 + "px", paddingTop: 0 + "px"}}>
          <h2 style={{marginLeft: -40 + "px", paddingTop: -100 + "px"}}>Select your Pathway</h2>
          <h3>Master's Degrees</h3>
          <h4 style={{color:"grey", margin: -3 + "px"}}>A 5-semester commitment that results in a degree (can optionally be combined with up to 3 micro-credentials)</h4>
          <MastersDegreeTable/>
          <h3>Endorsements</h3>
          <h4 style={{color:"grey", margin: -3 + "px"}}>A specialized track of courses that results in a certificate (can optionally be combined with up to 3 micro-credentials)</h4>
          <EndorsementsTable/>
        </div> 
      </React.Fragment>)
}
  
  
export default PathwaysPage;