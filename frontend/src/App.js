import {BrowserRouter as Router, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import { createGlobalStyle } from "styled-components"

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

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation/>
      <Switch>
        <Router path="/" exact>
          <Home/>
        </Router>
      </Switch>
    </Router>
      <GlobalStyle/>
    </div>
  );
}

export default App;
