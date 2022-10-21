import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div className="navbar">
      <NavBar />    
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
      </Switch>
      <Switch>
        <Route path="/directors">
          <Directors />
        </Route>
      </Switch>
      <Switch>
        <Route path="/actors">
          <Actors />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>  
  )
}

export default App;
