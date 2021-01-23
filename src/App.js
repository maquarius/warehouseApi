import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Navigation";
import Gloves from "./components/Gloves";
import Facemasks from "./components/Facemasks";
import Beanies from "./components/Beanies";

function App() {
  return (
    <Router>
      {" "}
      <Nav />
      <Switch>
        <Route exact path="/gloves" component={Gloves} />
        <Route exact path="/facemasks" component={Facemasks} />
        <Route exact path="/beanies" component={Beanies} />
      </Switch>
      <div className="App"></div>
    </Router>
  );
}

export default App;
