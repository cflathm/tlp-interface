import React, { useEffect,useState } from 'react';
import { Button } from 'antd';
import { Link, useLocation } from "react-router-dom";
import ConfirmTable from './ConfirmTable';
import Banner from '../Banner/Banner';

const ConfirmPage = (props) => {
  const [selections, setSelections] = useState([]);

  const location = useLocation()
  // let selections;
  useEffect(() => {
    setSelections(location.state.selections)
  }, [location]);
    return (
      <React.Fragment>
        <div className="fullpage-card">
          <Banner/>
            <h2>Commitment Form and Pathway Selection</h2>
            <h4 style={{color: "#222222"}}>Confirm your schedule and submit</h4>
            <ConfirmTable allOptions={props.allOptions} selections={selections}/>

            {/*The bellow checkboxes need to be checked for the submit button to be enabled.*/}
            <br></br>
            <h3>Final Questions and Agreements for commitment.</h3>
            <input type="checkbox" /> I will follow the application instructions carefully. The fee waiver code may only be used once. <br></br>
            <input type="checkbox" /> I understand that my participation in CU-TLP means I can take a maximum of 15 graduate credit hours free of charge. Any hours beyond that will become my responsibility.<br></br>
            <input type="checkbox" /> I acknowledge that I am committing to take graduate level courses through Clemson Online and to complete my chosen pathway.<br></br>
            <input type="checkbox" /> I understand that if any changes to my coursework plan or chosen pathway are needed, I will contact Dr. Stephanie Madison immediately. <br></br>
            <input type="checkbox" /> I understand that failure to log into classes on Canvas, submit required materials, or meet deadlines may exclude me from further participation in the program. <br></br>
            <br></br>

            {/*One of the below check boxes needs to be checked for the submit button to be enabled if someone wants to do a master's degree.*/}
            <h4>If you plan on going into the M.Ed. in Teaching and Learning as a degree-seeking student, please select on of the following:</h4>
            <input type="checkbox" /> My last degree earned was completed with a GPA of 3.0 or higher.<br></br>
            <input type="checkbox" /> My last degree earned was completed with a GPA of less than 3.0. Therefore, I will need to submit GRE or MAT scores as a part of the application to Clemson University.<br></br>


            <Link className="next-link" to="/pathways" style={{float: "left"}}>
              <Button type="primary">Back</Button>
            </Link>

            <Link className="opt-out" to="/submitted">
              <Button type="primary">Opt-Out</Button>
            </Link>
            <Link className="next-link" to="/submitted">
              <Button type="primary">Submit</Button>
            </Link>
        </div>
      </React.Fragment>)
}

export default ConfirmPage;