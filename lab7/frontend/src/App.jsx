const b1={
  picUrl:"https://m.media-amazon.com/images/I/518+W2zr3BL._SY385_.jpg",
  bname:"React Design Pattern",
  price:1199,
  quantity:10,
  rating:5.0,
};

const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/61ledg2cLaL._SY466_.jpg",
  bname: "The road to react",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};

function Book(props){
  const{rating,bname,price,quantity,picUrl}=props.book;
  
  return(
    <div className="book">
      <img 
      src={picUrl}
      alt={bname}
      />
      <h1>{bname}</h1>
      <h2>Price:{price}</h2>
      <h3>Quantity:{quantity}</h3>
      <h4>Rating:{rating}</h4>
      <button>Buy Now</button>
    </div>
  );
}



export default function App(){
   return (
     <>
     <h1>Online Book Store</h1>
       <div className="container">
         <Book book={b1} />
         <Book book={b2} />
         <Book book={b1} />
         <Book book={b2} />
       </div>
     </>
   );
}