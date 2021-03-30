import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import AddEvents from "./components/AddEvents/AddEvents";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addEvents">Add Events</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/addEvents">
            <AddEvents/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
