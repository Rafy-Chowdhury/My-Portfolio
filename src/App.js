import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
import MoreProjects from './Components/MoreProjects/MoreProjects';

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
          <Route path="/">
            <Home/>
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
