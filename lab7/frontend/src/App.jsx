import Book from "./components/book";
import Pen from "./components/pen";

const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._SY385_.jpg",
  bname: "React Design Pattern",
  price: 2470,
  quantity: 16,
  rating: 4.8,
};

const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/61ledg2cLaL._SY466_.jpg",
  bname: "The road to react",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};

const p1 = {
  picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxyqJX4HRpYc3OJEE0yvNrwNnhgd_IgqliA4WuL9S4g&s=10",
  pname: "Parker Pen",
  price: 450,
  quantity: 1,
  rating: 4.8,
};

const p2 = {
  picUrl: "https://m.media-amazon.com/images/I/41L2D5bCZbL._AC_SL128_.jpg",
  pname: "Reynolds Pen",
  price: 1358,
  quantity:5,
  rating: 4.7,
};

export default function App() {
  return (
    <>
      <h1>Online Book Store</h1>

      <div className="container">
        <Book book={b1} />
        <Book book={b2} />
        <Book book={b1} />
        <Book book={b2} />
      </div>

      <h1>Online Pen Store</h1>

      <div className="container">
        <Pen pen={p1} />
        <Pen pen={p2} />
        <Pen pen={p1} />
        <Pen pen={p2} />
      </div>
    </>
  );
}