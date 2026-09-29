const b1 ={
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"Design Pattern React JS",
  price: 765.00,
  quantity: 5,
  rating: 5.0,
};

function Book(){
  return(
    <div>
      <img src={b1.picUrl} alt={b1.bname}/>
      <h1> Lets Use React</h1>
      <h2> Price: {b1.price} </h2>
      <h3> Quantity: {b1.quantity} </h3>
      <h4> Rating: {b1.rating} </h4>
    </div>
  );
}

export default function App(){
  return(
  <>
    <Book />
    <h1> Hello React</h1>
    <Book />
    <Book />
    <Book />
  </>  
  );
}