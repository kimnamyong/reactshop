import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Data from "./components/data";
import "./App.css";

import { Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import { Switch } from "react-router-dom";

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" >
          <Home shoes={shoes} />          
        </Route>
        <Route path="/detail" exact>
          <Details />
        </Route>
        <Route path="/detail/:id" exact>
          <Details shoes={shoes}/>
        </Route>
      </Switch>
    </div>
  );
}
export default App;
