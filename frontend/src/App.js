import { createGlobalStyle } from "styled-components"
import groupJSON from "./components/groups.json"
import RoutedPages from "./components/RoutedPages";

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
        <RoutedPages/>
        <GlobalStyle/>
      </div>
  );
}

export default App;