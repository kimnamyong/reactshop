import React from "react";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Container className="background">
        <h1>20% Season Off</h1>
        <p> welcome to my shopMall !!!</p>
      </Container>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="shoes1.jpg" width="100%" alt=""/>
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>

          <div className="col-md-4">
          <img src="shoes2.jpg" width="100%" alt=""/>
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>

          <div className="col-md-4">
          <img src="shoes3.jpg" width="100%" alt=""/>
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
