
function Card(props) {
  const {shoe,i}=props;

  return (
    <div className="col-md-4">
      <a href={"/detail/"+i}>
      <img src={"shoes" + (props.i + 1) + ".jpg"} width="100%" alt="" />
      {/* <img src={`shoes${(props.i+1)}.jpg`} width="100%" alt="" /> */}
      </a>

      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} &{props.shoes.price}원
      </p>
    </div>
  );
}

export default Card;