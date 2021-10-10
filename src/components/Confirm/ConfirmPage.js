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
            <h2>Schedule Confirmation</h2>
            <h4 style={{color: "#222222"}}>Confirm your schedule and submit</h4>
            <ConfirmTable allOptions={props.allOptions} selections={selections}/>
            <Link className="next-link" to="/pathways" style={{float: "left"}}>
              <Button type="primary">Back</Button>
            </Link>
            <Link className="next-link" to="/submitted">
              <Button type="primary">Submit</Button>
            </Link>
        </div>
      </React.Fragment>)
}

export default ConfirmPage;