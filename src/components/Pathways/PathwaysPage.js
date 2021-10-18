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
  const [selectedMastersDegree, setSelectedMastersDegree] = useState([]);
  const [selectedEndorsement, setSelectedEndorsement] = useState([]);
  const [selectedMicrocredential, setSelectedMicrocredential] = useState([]);
  const [selectionIDs, setSelectionIDs] = useState([]);
  const [selections, setSelections] = useState([]); // this is what we eventually pass to confirmPage
  // this is passed to Masters+Endorsements tables
  // (initialized to false because it switches on intiail render)
  const [tablesEnabled, setTableEnabled] = useState(false);
  const allOptions = Array.from(props.allOptions)

  // Update selectionIDs when the user makes a selection
  useEffect(() => {
    setSelectionIDs([selectedMastersDegree, selectedEndorsement, selectedMicrocredential]);
  }, [selectedMastersDegree,selectedEndorsement,selectedMicrocredential]);

  // Every time selectionIDs changes...
  useEffect(() => {
      // ... update selections when selectionIDs is updated
    setSelections(allOptions.filter(pathway => {
      return selectionIDs.flat().includes(pathway.unique_id)
    }))
  }, [selectionIDs]);

  useEffect(() => {
    // ...set all selections to disabled
    setTableEnabled(!tablesEnabled)
  },[selectedMastersDegree,selectedEndorsement]);

  return (
    <React.Fragment>
      <div className="fullpage-card">
          <Banner/>
          <h2>Select your Pathway</h2>
          <p><i>Note: You can only select one Master's Degree or Endorsement</i></p>

          <h3>Master's Degrees</h3>
          <h4 style={{color:"grey"}}>A 5-semester commitment that results in a degree (can optionally be combined with up to 3 micro-credentials)</h4>
          <MastersDegreeTable 
            mastersDegrees={props.pathways["Master's Degree"]} 
            setSelectedMastersDegree={setSelectedMastersDegree}
            selectedMastersDegree={selectedMastersDegree}
            tablesEnabled={tablesEnabled}
          />

          <h4 style={{color:"red"}}>Non-Stem Teachers, please be aware that you will not receive your course funds until you take either the STEAM Endorsement or Microcredential</h4>

          <h3>Endorsements</h3>
          <h4 style={{color:"grey"}}>A specialized track of pathways that results in a certificate (can optionally be combined with up to 3 micro-credentials)</h4>
          <EndorsementsTable 
            endorsements={props.pathways["Endorsement"]} 
            allOptions={props.allOptions} 
            setSelectedEndorsement={setSelectedEndorsement}
            selectedEndorsement={selectedEndorsement}
            tablesEnabled={tablesEnabled}
          />
          <h3>Micro-credentials</h3>
          <h4 style={{color:"grey"}}>Short modules on a specific topic (you can select 1-2 per period, or optionally add max. 1 per period to an MEd or endorsement)</h4>
          <MicrocredentialsTable 
            pathways={props} 
            setSelectedMicrocredential={setSelectedMicrocredential} 
            selectedMicrocredential={selectedMicrocredential}
          />
          <br></br>
          <Link className="next-link" to="/recommendations" style={{float: "left"}}>
              <Button type="primary">Back</Button>
          </Link>
          <Link className="next-link" to={{
            pathname: "/confirm",
            state: {
              selections: selections  
            }
            }} >
            <Button type="primary">Continue</Button>
          </Link>
      </div>
    </React.Fragment>
  )
}
  
export default PathwaysPage;