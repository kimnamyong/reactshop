//import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Card from "./Card";

function Home(props) {
  console.log(props);
  return (
    <>
      <Container className="background mt-4">
        <h1>20% Season Off(파격세일)</h1>
        <p> welcome to my shopMall !!!</p>
      </Container>

      <div className="container">
        <div className="row">
          {props.shoes.map((a, i) => {
            return <Card shoes={props.shoes[i]} i={i} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
