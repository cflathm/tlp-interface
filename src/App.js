import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RecommendationsPage from './components/Recommendations/RecommendationsPage';
import PathwaysPage from './components/Pathways/PathwaysPage';
import ConfirmPage from './components/Confirm/ConfirmPage';
import WelcomePage from './components/Welcome/WelcomePage';
import { useState, useEffect } from 'react';

function App() {
  // data will hold data from json/api response
  const [data, setData] = useState('');
  const [allOptions, setallOptions] = useState('');
  let params = (new URL(document.location)).searchParams;
  // test link for API: http://trace.computing.clemson.edu?teacherId=1&randomID=6tGlMJu98v
  // test link for API: http://trace.computing.clemson.edu?teacherId=219&randomId=test
  // test link for lcl: http://localhost:3000/?teacherId=1&randomId=6tGlMJu98v
  // test link for lcl: http://localhost:3000/?teacherId=219&randomId=test
  // "teacherId": "1","randomId":"6tGlMJu98v"
  // Chris's code to fetch json from API------------------------
  const getData=()=>{
    fetch('https://trace.computing.clemson.edu/api/users'
    ,{
      method:'POST',
      body : JSON.stringify({"teacherId": params.get('teacherId'),"randomId":params.get('randomId')})
    }
    ).then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson);
        // make allOptions array
        const pathwayObjects = myJson.data.options;
        let unflatAllOptions = [
          pathwayObjects["Endorsement"],
          pathwayObjects["Master's Degree"],
        ]
        // here we are drilling into "Microcredentials" and getting each course out, and pushing the result to unflatAll
        let coursesInMicrocredential = pathwayObjects["Microcredential"].map(thisRow => {
          let coursesInThisRow = thisRow.courses.map(course => {
            return course
          })
          return coursesInThisRow
        })
        unflatAllOptions.push(coursesInMicrocredential.flat());
        setallOptions(unflatAllOptions.flat())
      });
  }
  // ------------------------------------------------------

  // Steve's code to test with local JSON---------------------------
  // const getData=()=>{
  //   fetch('testing/sample_user_data.json'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   ).then(function(response){
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       setData(myJson);
  //       // console.log(myJson)
  //       // make allOptions array
  //       const pathwayObjects = myJson.data.options;
  //       // console.log('App.js: pathwayObjects',pathwayObjects)
  //       let unflatAllOptions = [
  //         pathwayObjects["Endorsement"],
  //         pathwayObjects["Master's Degree"],
  //       ]
  //       // here we are drilling into "Microcredentials" and getting each course out, and pushing the result to unflatAll
  //       let coursesInMicrocredential = pathwayObjects["Microcredential"].map(thisRow => {
  //         let coursesInThisRow = thisRow.courses.map(course => {
  //           return course
  //         })
  //         return coursesInThisRow
  //       })
  //       unflatAllOptions.push(coursesInMicrocredential.flat());
  //       // console.log("unflatAllOptions after pathwayObjects['Microcredential']",unflatAllOptions);
  //       setallOptions(unflatAllOptions.flat())
  //     });
  // }
  // ------------------------------------------------------

  useEffect(()=>{
    getData()
  },[])


  // console.log('data',data)
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={() => data && <WelcomePage firstName={data.data.First_Name} Exp_Condition={data.data.Exp_Condition} />} />
        <Route path="/recommendations" exact component={() => data && <RecommendationsPage recommendations={data.data.recommendations} Exp_Condition={data.data.Exp_Condition}/>} />
        <Route path="/pathways" exact component={() => data && <PathwaysPage pathways={data.data.options} allOptions={allOptions}/>} />
        <Route path="/confirm" exact component={() => data && <ConfirmPage allOptions={allOptions} userInfo={{"teacherId": params.get('teacherId'),"randomId":params.get('randomId')}}/>} />
      </Router>
      <div className="footer">
        <p>Having issues? Contact Stephanie Madison for help.</p>
        <a href="mailto:stephm@g.clemson.edu">stephm@g.clemson.edu</a>
      </div>
    </div>
  );
}

export default App;
