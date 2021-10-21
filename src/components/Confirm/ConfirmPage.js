import React, { useEffect,useState } from 'react';
import { Button, Checkbox } from 'antd';
import { Link, useLocation } from "react-router-dom";
import ConfirmTable from './ConfirmTable';
import Banner from '../Banner/Banner';
// import { COMMENT_KEYS } from '@babel/types';

const ConfirmPage = (props) => {
  const [selections, setSelections] = useState([])
  const [submitReady, setSubmitReady] = useState(false)
  const [checkboxesState, setCheckboxesState] = useState([false,false,false,false,false,false,false])


  const handleCheckboxChange = (index) => event => {
    const newCheckBoxState = [...checkboxesState]
    newCheckBoxState[event.target.id] = event.target.checked
    setCheckboxesState(newCheckBoxState)
  }

  // enables/disables Submit button as checkboxes change
  useEffect(() => {
    const mainAgreementsChecked = !checkboxesState.slice(0,5).includes(false)
    if(!mainAgreementsChecked){
      setSubmitReady(false)
    } else {
      // if main agreements are checked 
      if(containsMastersDegree(selections)){
        // if contains masters degree... check that one and only one of the extra boxes are checked
        if(checkboxesState[5] !== checkboxesState[6]){
          setSubmitReady(true)
        } else {
          setSubmitReady(false)
        }
      } else {
        setSubmitReady(true)
      }
    }
  },[checkboxesState])

  const location = useLocation()
  // let selections;
  useEffect(() => {
    setSelections(location.state.selections)
  }, [location]);

  const containsMastersDegree = (selections) => {
    let containsMastersFlag = false
    selections.forEach(selection => {
      if(selection.category === "Master's Degree"){
        containsMastersFlag = true
      }
    })
    return containsMastersFlag
  }

  // UNFINISHED API STUFF ------------------------------------------------------------------------------
  const [optingOut, setOptingOut] = useState(false)
  const [submittedState, setSubmittedState] = useState(false)
  const [outboundJSON, setOutboundJSON] = useState({})
  const [response, setResponse] = useState({})


  const sendData=()=>{
      if(outboundJSON != {}){
        fetch('http://trace.computing.clemson.edu/api/decisions'
      ,{
        method:'PUT',
        body : outboundJSON
      }
      ).then(function(response){
          setResponse(response)
          // console.log('response',response);
          // return response.json();
        })
        .then(function(responseJSON) {
          // console.log('responseJSON',responseJSON);
        })
    }
  }

  // useEffect(()=>{
    
  // },[response])


  const setJSON = () => {
      if(!optingOut){
        const incumbentOutboundJSON = {
          "teacherId": props.userInfo.teacherId,
          "Opt-Out":false,
          "Master's Degree":false,
          "Endorsement":false,
          "Microcredential":false
      }
      let masters = {}
      let endorsement = {}
      const microcredentials = []
      selections.forEach(selection =>{
        if(selection.category === undefined){
          microcredentials.push(selection)
        } else if(selection.category === "Endorsement"){
          endorsement = selection
        } else {
          masters = selection
        }
      })
      if(masters.length > 0){incumbentOutboundJSON["Master's Degree"] = masters}
      if(endorsement.length > 0){incumbentOutboundJSON["Endorsement"] = endorsement}
      if(microcredentials.length > 0){incumbentOutboundJSON["Microcredential"] = microcredentials}
      console.log('incumbentOutboundJSON',incumbentOutboundJSON)
      return incumbentOutboundJSON
      }
  }
    useEffect(()=>{
      if(submittedState === true) sendData()
    },[submittedState])
  // ----------------------------------------------------------------------------------------------------

  const PreSubmit = () => {
    // console.log('selections',selections)
    return <React.Fragment>
      <h2>Commitment Form and Pathway Selection</h2>
        <h4 style={{color: "#222222"}}>Confirm your schedule and submit</h4>
        <ConfirmTable allOptions={props.allOptions} selections={selections}/>

        {/*The bellow checkboxes need to be checked for the submit button to be enabled.*/}
        <br></br>
        <br></br>
        <br></br>
        <h3>Final Questions and Agreements for commitment.</h3>

        <Checkbox id='0' checked={checkboxesState[0]} onChange={handleCheckboxChange()}> I will follow the application instructions carefully. The fee waiver code may only be used once. </Checkbox>
        <br></br>
        <Checkbox id='1' checked={checkboxesState[1]} onChange={handleCheckboxChange()}> I understand that my participation in CU-TLP means I can take a maximum of 15 graduate credit hours free of charge. Any hours beyond that will become my responsibility.</Checkbox>
        <br></br>
        <Checkbox id='2' checked={checkboxesState[2]} onChange={handleCheckboxChange()}> I acknowledge that I am committing to take graduate level courses through Clemson Online and to complete my chosen pathway.</Checkbox>
        <br></br>
        <Checkbox id='3' checked={checkboxesState[3]} onChange={handleCheckboxChange()}> I understand that if any changes to my coursework plan or chosen pathway are needed, I will contact Dr. Stephanie Madison immediately.</Checkbox> 
        <br></br>
        <Checkbox id='4' checked={checkboxesState[4]} onChange={handleCheckboxChange()}> I understand that failure to log into classes on Canvas, submit required materials, or meet deadlines may exclude me from further participation in the program.</Checkbox> 
        <br></br>
        <br></br>
        {containsMastersDegree(selections) && <p> One of the below check boxes needs to be checked for the submit button to be enabled if someone wants to do a master's degree. </p>}
        {containsMastersDegree(selections) && <h4>If you plan on going into the M.Ed. in Teaching and Learning as a degree-seeking student, please select one of the following:</h4>}
        {containsMastersDegree(selections) && 
          <Checkbox id='5' checked={checkboxesState[5]} onChange={handleCheckboxChange()}> 
          My last degree earned was completed with a GPA of 3.0 or higher.
          </Checkbox>
        }
        <br></br>
        <br></br>
        {containsMastersDegree(selections) && 
          <Checkbox id='6' checked={checkboxesState[6]} onChange={handleCheckboxChange()}> 
          My last degree earned was completed with a GPA of less than 3.0. Therefore, I will need to submit GRE or MAT scores as a part of the application to Clemson University.
          </Checkbox>
        }
        <Link className="next-link" to="/pathways" style={{float: "left"}}>
          <Button type="primary">Back</Button>
        </Link>
        <div className="opt-out">
          <Button type="primary" onClick={() => {
            setOutboundJSON(JSON.stringify({"teacherId": props.userInfo.teacherId,"Opt-Out":true}))
            setSubmittedState(true)
          }}>Opt-Out</Button>
        </div>
        <div className="next-link">
          {submitReady ? <Button type="primary" onClick={() => {
            // console.log('setJSON()',setJSON())
            setOutboundJSON(JSON.stringify(setJSON()))
            setSubmittedState(true)
          }
          }>Submit</Button>:<Button type="primary" disabled>Submit</Button>}
        </div>
      </React.Fragment>
  }

  const PostSubmit = () => {
    survey_link = 'https://google.com?teacherId=' + props.userInfo.teacherId
    return <React.Fragment>
      {console.log(response)}
        {response.status === 501 && <div>
          <h2>Submission Error</h2>
            <h4 style={{color: "#222222"}}>It appears as if you have already completed the commitment form. If you beleive this to be an error or wish to change your selections please contact Stephanie Madision. Email: <a href="mailto:stephm@g.clemson.edu">stephm@g.clemson.edu</a></h4></div>}
        {response.status === 200 && <div>
          <h2>Submission complete</h2>
            <h4 style={{color: "#222222"}}>Thank you for registering. Your submission has been saved. We will be in contact with you about next steps. </h4>
            <h4 style={{color: "#222222"}}>Please navigate to the following link and take the following survey about your experience. <a href={survey_link} target="_blank">{survey_link}</a></h4>
            <p>You may close this tab after completing your survey.</p>
            </div>}
      </React.Fragment>
  }
    return (
      <React.Fragment>
        <div className="fullpage-card">
          <Banner/>
          {submittedState ? <PostSubmit/>:<PreSubmit/>}
        </div>
      </React.Fragment>)
}

export default ConfirmPage;