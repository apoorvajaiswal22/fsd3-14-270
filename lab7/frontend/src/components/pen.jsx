export default function Pen(props) {
  const { rating, pname, price, quantity, picUrl } = props.pen;

  const qtyStyle = {
    fontSize: "1.25rem",
    color: "blue",
    textAlign: "center",
    backgroundColor: "yellow",
    padding: "10px",
  };

  return (
    <div className="pen">
      <img src={picUrl} alt={pname} />

      <h1>{pname}</h1>
      <h2>Price: {price}</h2>
      <h3 style={qtyStyle}>Quantity: {quantity}</h3>

      <h4 style={{ color: "red", textAlign: "center" }}>
        Rating: {rating}
      </h4>

      <button>Buy Now</button>
    </div>
  );
}