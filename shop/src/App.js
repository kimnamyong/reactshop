import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Data from "./components/data";
import "./App.css";

import { Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import { Switch } from "react-router-dom";
import axios from "axios";

function App() {
  let [shoes, setShoes] = useState(Data);
  let getUrl="https://codingapple1.github.io/shop/data2.json";

  const getData = () => {
    axios
      .get(getUrl)
      .then((result) => {
        // console.log(result.data);
        setShoes([...shoes, ...result.data])
      })
      .catch(() => {
        console.log("접속실패....");
      });
  };

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home shoes={shoes} />
        </Route>
        <Route path="/detail" exact>
          <Details />
        </Route>
        <Route path="/detail/:id" exact>
          <Details shoes={shoes} />
        </Route>
      </Switch>

      <button className="btn btn-primary" onClick={getData}>
        더보기(axios)
      </button>
    </div>
  );
}
export default App;
