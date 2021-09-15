import React from 'react';
import Banner from '../Banner/Banner';

const ConfirmPage = () => {
    return (
      <React.Fragment>
        <div class="fullpage-card">
          <Banner/>
            <h2>Submission complete</h2>
            <h4 style={{color: "#222222"}}>Thank you for registering. We will send your schedule through email. </h4>
            <p>You may close this tab.</p>
        </div>
      </React.Fragment>)
}

export default ConfirmPage;