import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import Home from "./Components/Home/Home";
import MoreProjects from './Components/MoreProjects/MoreProjects';
import SendMail from "./Components/SendMail/SendMail";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/more">
            <MoreProjects/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <AboutMe/>
          </Route>
          <Route path="/contact">
            <SendMail/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
