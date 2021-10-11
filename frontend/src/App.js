import {BrowserRouter as Router, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import { createGlobalStyle } from "styled-components"
import Groups from "./components/pages/Groups";
import groupJSON from "./components/groups.json"
import GroupDetailPage from "./components/pages/GroupDetailPage"

const GlobalStyle = createGlobalStyle`
  
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  
  html {
    width: 100%;
    height: 100%;
  }
`

console.log('GroupJSON', groupJSON)

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation/>
      <Switch>
        <Router path="/" exact>
          <Home/>
        </Router>
        <Router path="/groups">
          <Groups groupData={groupJSON}/>
        </Router>
        <Router path="/group/:id">
          <GroupDetailPage/>
        </Router>
      </Switch>
    </Router>
      <GlobalStyle/>
    </div>
  );
}

export default App;
