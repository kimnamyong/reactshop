import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import Data from "./components/data";
import "./App.css";

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <NavBar />

      <Container className="background">
        <h1>20% Season Off</h1>
        <p> welcome to my shopMall !!!</p>
      </Container>
      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

function Card(props) {
  return (
    <div className="col-md-4">
      <img src="shoes1.jpg" width="100%" alt="" />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} &{props.shoes.price}원
      </p>
    </div>
  );
}
