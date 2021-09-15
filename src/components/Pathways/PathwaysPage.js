import React from 'react';
import { Button } from 'antd';
import { Link, withRouter } from "react-router-dom";
import MastersDegreeTable from './MastersDegreeTable';
import EndorsementsTable from './EndorsementsTable';
import MicrocredentialsTable from './MicrocredentialsTable';
import Banner from '../Banner/Banner';


const PathwaysPage = () => {
  return (
    <React.Fragment>
      <div class="fullpage-card">
          <Banner/>
          <h2>Select your Pathway</h2>

          <h3>Master's Degrees</h3>
          <h4 style={{color:"grey"}}>A 5-semester commitment that results in a degree (can optionally be combined with up to 3 micro-credentials)</h4>
          <MastersDegreeTable recommended={1}/>

          <h3>Endorsements</h3>
          <h4 style={{color:"grey"}}>A specialized track of courses that results in a certificate (can optionally be combined with up to 3 micro-credentials)</h4>
          <EndorsementsTable/>
          
          <h3>Micro-credentials</h3>
          <h4 style={{color:"grey"}}>Short modules on a specific topic (you can select 1-2 per period, or optionally add max. 1 per period to an MEd or endorsement)</h4>
          <MicrocredentialsTable/>
          <br></br>
          <Link class="next-link" to="/confirm">
            <Button type="primary">Review Choices</Button>
          </Link>
      </div>
    </React.Fragment>
  )
}
  
export default PathwaysPage;