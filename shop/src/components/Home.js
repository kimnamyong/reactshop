import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Card from "./Card"

function Home(props) {
    console.log(props)
  return (
    <Route path="/" exact>
      <Container className="background">
        <h1>20% Season Off</h1>
        <p> welcome to my shopMall !!!</p>
      </Container>

      <div className="container">
        <div className="row">
          {props.shoes.map((a, i) => {
            return <Card shoes={props.shoes[i]} i={i} key={i} />;
          })}
        </div>
      </div>
    </Route>
  );
}

export default Home;
