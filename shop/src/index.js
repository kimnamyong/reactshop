import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, combineReducers } from "redux";

const initial = [
  // { id: 0, name: "멋진신발", quan: 2 },
  // { id: 1, name: "싸구려신발", quan: 12 },
  // { id: 2, name: "후진신발", quan: 20 },
];

let alert초기값=true;

function reducer2(state=alert초기값, action){
  if(action.type==="alert닫기"){
    state=false;
    return state;
  }else{
    return state;
  }
}

function reducer(state = initial, action) {
  if(action.type==="항목추가"){
    let found=state.findIndex((a)=>{
      return a.id===action.데이터.id
    });
    if(found>=0){
      let copy = [...state]; 
      copy[found].quan++;
      return copy;
    }else{
      let copy = [...state]; 
      console.log(copy)
      copy.push(action.데이터);
      return copy;
    }
  }else if(action.type === "수량증가") {    
    let copy = [...state];
    console.log(copy)
    copy[action.id].quan++;
    return copy;
  } else if(action.type === "수량감소") {
    let copy = [...state];
    copy[action.id].quan--;

    if(copy[action.id].quan<0){
      copy[action.id].quan=0;
    }
    return copy;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({reducer, reducer2}));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);


reportWebVitals();
