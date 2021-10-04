import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import MastersDegreeTable from './MastersDegreeTable';
import EndorsementsTable from './EndorsementsTable';
import MicrocredentialsTable from './MicrocredentialsTable';
import Banner from '../Banner/Banner';
/*
TODO:
  1) prevent ppl from submitting invalid schedules (clear one table if a row from another is selected, etc)
*/

const PathwaysPage = (props) => {

  const [selectedMastersDegree, setSelectedMastersDegree] = useState(-1);
  const [selectedEndorsement, setSelectedEndorsement] = useState(-1);
  const [selectedMicrocredential, setSelectedMicrocredential] = useState(-1);
  console.log('selectedMastersDegree, selectedEndorsement, selectedMicrocredential',selectedMastersDegree, selectedEndorsement, selectedMicrocredential)

  const [selectionIDs, setSelectionIDs] = useState([[[]]]);
  const [selectedPathways, setSelectedPathways] = useState([]);
  

  
  // define selectedPathways, which will contain the props.pathways, but .filter()'d to only show ids from props
  // later we will have a 'validate' function that confirms selectedPathways is valid before user continues
  let pathways;
  pathways = Array.from(props.allPathways)
  // console.log('PATHWAYS: pathways',pathways)
  // console.log('PATHWAYSPAGE: props.allPathways', props.allPathways)
  // let selectedPathways;

  // handle each state change in masterdegree/endorsement/microcredential choice
  useEffect(() => {

    setSelectionIDs([selectedMastersDegree, selectedEndorsement, selectedMicrocredential]);

    setSelectedPathways(pathways.filter(pathway => {
      return selectionIDs.includes(pathway.option_id)
    }))
    console.log('selectedPathways',selectedPathways)

    // selectedPathways = new Map(Object.entries(pathways))
    // console.log('props in pathways',props)
    // console.log('useEffect selectedpathways',selectedPathways) DOESNT WORK - INSIDE USEEFFECT
  }, [selectedMastersDegree,selectedEndorsement,selectedMicrocredential]);

  // TODO: define onChangeHandler
  // console.log('props in pathways', props)
  // const options = props.options
  console.log('selectedPathways right before render',selectedPathways)
  return (
    <React.Fragment>
      <div className="fullpage-card">
          <Banner/>
          <h2>Select your Pathway</h2>

          <h3>Master's Degrees</h3>
          <h4 style={{color:"grey"}}>A 5-semester commitment that results in a degree (can optionally be combined with up to 3 micro-credentials)</h4>
          <MastersDegreeTable mastersDegrees={props.pathways["Master's Degree"]} recommended={1} setChoice={setSelectedMastersDegree}/>
          <h3>Endorsements</h3>
          <h4 style={{color:"grey"}}>A specialized track of pathways that results in a certificate (can optionally be combined with up to 3 micro-credentials)</h4>
          <EndorsementsTable setChoice={setSelectedEndorsement}/>
          
          <h3>Micro-credentials</h3>
          <h4 style={{color:"grey"}}>Short modules on a specific topic (you can select 1-2 per period, or optionally add max. 1 per period to an MEd or endorsement)</h4>
          <MicrocredentialsTable setChoice={setSelectedMicrocredential}/>
          <br></br>
          <Link className="next-link" to="/recommendations" style={{float: "left"}}>
              <Button type="primary">Back</Button>
          </Link>
          <Link className="next-link" to={{ 
            pathname: "/confirm",
            state: {
              selectedPathways: selectedPathways  
            }
            }} >
            <Button type="primary">Save &amp; Continue</Button>
          </Link>
      </div>
    </React.Fragment>
  )
}
  
export default PathwaysPage;