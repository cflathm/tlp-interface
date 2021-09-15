import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecommendationsPage from './components/Recommendations/RecommendationsPage';
import PathwaysPage from './components/Pathways/PathwaysPage';
import ConfirmPage from './components/Confirm/ConfirmPage';
import WelcomePage from './components/Welcome/WelcomePage';
import Submitted from './components/Submitted/SubmittedPage'

function App() {
  return (
    <div className="App">
      {/* TODO: Add breadcrumbs */}
      <Router>
        <Route path="/" exact component={() => <WelcomePage/>} />
        <Route path="/recommendations" exact component={() => <RecommendationsPage/>} />
        <Route path="/pathways" exact component={() => <PathwaysPage/>} />
        <Route path="/confirm" exact component={() => <ConfirmPage/>} />
        <Route path="/submitted" exact component={() => <Submitted/>} />
      </Router>
      <div class="footer">
        <p>Having issues? Reach out to CCIT for help.</p>
        <a href="https://ccit.clemson.edu/">https://ccit.clemson.edu</a>
      </div>
    </div>
  );
}

export default App;
