import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Card from "./Card";
import axios from "axios";

function Home(props) {
  let getUrl = "https://codingapple1.github.io/shop/data2.json";
  let [show, setShow] = useState(false);

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
        props.setShoes([...props.shoes, ...result.data]);
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
       
        {show ? loading() : null}
          {show ? loading2 : null}
        
        <button className="btn btn-primary" 
          onClick={getData}>
            더보기(axios)
          </button>


        {/* <button className="btn btn-primary" 
         onClick={()=>{ 
            axios.get("https://codingapple1.github.io/shop/data2.json")
            .then((result)=>{ console.log(result.data)})
            .catch(()=>{ console.log("접속실패....")});
          }}> 
         더보기(axios)
         </button> 
         <button className="btn btn-danger"
          onClick={()=>{
            fetch("https://codingapple1.github.io/shop/data2.json")
            .then((result)=>{
              console.log(result);
              return result.json()
            }).then((data)=>{
              console.log(data)
            })
          }}
         >더보기(fetch)</button> */}
      </div>
    </>
  );
}

export default Home;
