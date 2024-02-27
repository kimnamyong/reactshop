import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
  console.log(useParams());
  let { id } = useParams(); // {id:2}
  //let id=useParams().id;
  // let 찾은상품=props.shoes.find(function(상품){
  //   return 상품.id===parseInt(id);
  // });
  let 찾은상품 = props.shoes.find((상품) => 상품.id === parseInt(id));

  //console.log(찾은상품)
  return (
    <div className="container">
      <박스>
        <제목 색상={"blue"} className="blue">
          Detail(상세페이지)
        </제목>
      </박스>

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
