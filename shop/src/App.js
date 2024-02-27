import React, { useState } from "react";
import NavBar from "./components/NavBar";

import Data from "./components/data";
import "./App.css";

import { Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <NavBar />

      <Home shoes={shoes} />  

      <Route path="/detail">
       <div className="container">
        <div className="row">
         <div className="col-md-6">
          <img src="shoes1.jpg" width="100%" alt="" />
         </div>
         <div className="col-md-6 mt-4">
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>12000원</p>
            <button className="btn btn-primary">주문하기</button>
          </div>   
        </div>
       </div>
      </Route>

    </div>
  );
}
export default App;
