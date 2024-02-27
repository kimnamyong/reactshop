
function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"shoes" + (props.i + 1) + ".jpg"} width="100%" alt="" />
      {/* <img src={`shoes${(props.i+1)}.jpg`} width="100%" alt="" /> */}
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} &{props.shoes.price}원
      </p>
    </div>
  );
}

export default Card;