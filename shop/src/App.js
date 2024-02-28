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
  let getUrl = "https://codingapple1.github.io/shop/data2.json";
  let [show, setShow] = useState(false);
  let [재고, 재고변경]=useState([10,11,12])

  const loading = () => {
    return (
      <div>
        <h2> loading.....중</h2>
      </div>
    );
  };
  const loading2 = (
    <div>
      <h2>로딩중...</h2>
    </div>
  );
  const getData = () => {
    axios
      .get(getUrl)
      .then((result) => {
        // console.log(result.data);
        setShow(true);
        setShoes([...shoes, ...result.data]);
        setTimeout(() => {
          setShow(false);
        }, 1000);
      })
      .catch(() => {
        console.log("접속실패....");
        setShow(true);
      });
  };

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home shoes={shoes} />
          {show ? loading() : null}
          {show ? loading2 : null}

          <button className="btn btn-primary" onClick={getData}>
            더보기(axios)
          </button>
        </Route>
        <Route path="/detail" exact>
          <Details />
        </Route>
        <Route path="/detail/:id" exact>
          <Details shoes={shoes} 
          재고={재고} 재고변경={재고변경} />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
