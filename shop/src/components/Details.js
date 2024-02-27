import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "../Details.scss";
import { useEffect, useState } from "react";

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

const Details = (props) => {
  let history = useHistory(); 
  let { id } = useParams(); // {id:2}
  //let id=useParams().id;
  // let 찾은상품=props.shoes.find(function(상품){
  //   return 상품.id===parseInt(id);
  // });
  let 찾은상품 = props.shoes.find((상품) => 상품.id === parseInt(id));
  let [alert, alert변경]=useState(true);
  let [inputData, setInputData]=useState("")

  useEffect(()=>{
    let 타이머=setTimeout(()=>{
      alert변경(false)
      console.log(alert)
    },3000);
    return ()=>{ clearTimeout(타이머)}
  },[alert]);

  useEffect(()=>{
    console.log("업데이트중...")
  },[inputData])

 let 재고화면=( <div className="my-alert2">
                  <p>재고가 얼마 남지 않았습니다.</p>
                </div>)
  
  return (
    <div className="container">
      <박스>
        <제목 색상={"blue"} className="blue">
          Detail(상세페이지)
        </제목>
      </박스>
      <input onChange={(e)=>{setInputData(e.target.value)}} />
      {
        alert===true  ? 재고화면: null
      }
     

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
            <button className="btn btn-primary">주문하기</button>
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
                history.go();
              }}
            >
              홈으로하기
            </button>
          </div>
        </DIV>
      </div>
    </div>
  );
};
export default Details;
