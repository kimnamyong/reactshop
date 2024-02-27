import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
const Details = (props) => {
  let history=useHistory();
  let {id}=useParams();
  let 찾은상품=props.shoes.find(function(상품){   
    return 상품.id==id;
  });
  console.log(찾은상품)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`/shoes${id}.jpg`} 
          width="100%" alt="" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <hr></hr>
          <button className="btn btn-primary">주문하기</button>
          <button className="btn btn-danger"
          onClick={()=>{ history.goBack() }}
          >뒤로하기</button>
          <button className="btn btn-info"
          onClick={()=>{ history.push("/") }}
          >홈으로하기</button>

        </div>
      </div>
    </div>
  );
};
export default Details;
