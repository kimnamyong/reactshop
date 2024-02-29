import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Data from "./components/data";
import "./App.css";

import { Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import { Switch } from "react-router-dom";
//import { useContext } from "react";
import Cart from "./components/Cart";

export const 재고Context = React.createContext();

function App() {
  let [shoes, setShoes] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12,5,3,2,1,2]);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <재고Context.Provider value={재고}>
            <Home shoes={shoes} setShoes={setShoes} />
          </재고Context.Provider>
        </Route>
        <Route path="/detail" exact>
          <Details />
        </Route>
        <Route path="/detail/:id" exact>
          <재고Context.Provider value={재고}>
            <Details shoes={shoes} 재고={재고} 재고변경={재고변경} />
          </재고Context.Provider>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>

      </Switch>
    </div>
  );
}
export default App;
