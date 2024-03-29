import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "../Details.scss";
import { useContext, useEffect, useState } from "react";
import { 재고Context } from "../App";
import {connect, useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";

let DIV = styled.div`
  padding: 20px;
  padding-top: 0;
  border: 1px solid blue;
  background: ${(props) => props.color};
`;

let 박스 = styled.div`
  padding: 20px;
`;
let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

function Details (props){
  let state=useSelector((state)=>state)
  let dispatch = useDispatch();

  let history = useHistory();
  let { id } = useParams(); // {id:2}
  let 재고 = useContext(재고Context);
  //let id=useParams().id;
  // let 찾은상품=props.shoes.find(function(상품){
  //   return 상품.id===parseInt(id);
  // });
  let 찾은상품 = props.shoes.find((상품) => 상품.id === parseInt(id));
  let [alert, alert변경] = useState(true);
  let [inputData, setInputData] = useState("");

  useEffect(() => {
    let 타이머 = setTimeout(() => {
      alert변경(false);
      console.log(alert);
    }, 3000);
    return () => {
      clearTimeout(타이머);
    };
  }, [alert]);

  useEffect(() => {
    console.log("업데이트중...");
  }, [inputData]);

  let 재고화면 = (
    <div className="my-alert2">
      <p>재고가 얼마 남지 않았습니다.</p>
    </div>
  );

  return (
    <div className="container">
      <박스>
        <제목 색상={"blue"} className="blue">
          Detail(상세페이지)
        </제목>
      </박스>
      <p>{inputData}</p>
      <input
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      {alert === true ? 재고화면 : null}

      <div className="row">
        <div className="col-md-6">
          <img src={`/shoes${찾은상품.id + 1}.jpg`} width="100%" alt="" />
        </div>

        <DIV color="snow">
          <div className="col-md-6 mt-4">
            <h4 className="pt-1">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <hr></hr>
            <button
              className="btn btn-primary"
              onClick={() => {
                props.재고변경([9, 10, 11]);
                dispatch({ type: "항목추가",
                 데이터: { id: 찾은상품.id, name: 찾은상품.title, quan: 1 } });
                 history.push('/cart');               
              }}
            >
              주문하기
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                history.goBack();
              }}
            >
              뒤로하기
            </button>
            <button
              className="btn btn-info"
              onClick={() => {
                history.push("/");
             //   history.go();
              }}
            >
              홈으로하기
            </button>
          </div>
        </DIV>
      </div>
      {/* <Info 재고={props.재고}></Info>       */}
      <Info 재고={재고}></Info>   
    
    </div>
  );
};

function Info(props) {
  return <p>재고 : {props.재고[0]}</p>;
}

// function stateToProps(state) {
//   console.log("DETAIL==>");
//   console.log(state);
//   return {
//     state: state.reducer,
//     alertShow: state.reducer2,
//   };
// }

export default Details;

//export default connect(stateToProps)(Details)
