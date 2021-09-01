import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import RecommendationsPage from './RecommendationsPage';
import './App.css';
import PathwaysPage from './PathwaysPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div style={{padding: 90 + "px", paddingTop: 30 + "px"}}>
        <h1>CU-TLP Dashboard</h1>
        <h4>Thanks for using CU-TLP online platform. This dashboard allows you to view your recommendations and other options that you can pursue. Then, you will select options that interests you and sign the commitment form.</h4>
      </div>
      <RecommendationsPage/>
      <PathwaysPage/>
    </div>
  );
}

export default App;
