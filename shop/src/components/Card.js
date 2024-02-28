import { 재고Context } from "../App";
import React, { useContext } from "react";

function Card(props) {
  const {shoes,i}=props;
  let 재고=useContext(재고Context);
console.log(재고)
  return (
    <div className="col-md-4">
      <a href={"/detail/"+i}>
      <img src={"shoes" + (props.i + 1) + ".jpg"} width="100%" alt="" />
      {/* <img src={`shoes${(props.i+1)}.jpg`} width="100%" alt="" /> */}
      </a>

      <h4>{shoes.title}</h4>
      <p>
        {props.shoes.content} &{props.shoes.price}원
      </p>
      {재고[i] }
      
    </div>
  );
}

export default Card;

// function Test(props) {

//   let 재고 = useContext(재고Context);

//   console.log(재고);

//   return <p>재고: {재고[props.i]} </p>;

// }