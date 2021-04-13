import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/home'
import Resume from './components/resume'
import Test from './components/test'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/resume">
            <Resume></Resume>
          </Route>
          <Route exact path="/test">
            <Test></Test>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
