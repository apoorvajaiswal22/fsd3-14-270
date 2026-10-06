const product = () => [
  { title: "Cabbage", id: 1, isFruit: false },
  { title: "Mango", id: 2, isFruit: true },
  { title: "Apple", id: 3, isFruit: true },
  { title: "Potato", id: 4, isFruit: false },
];

const ListItem = product().map((item) => (
  <li key={item.id} style={{ color: item.isFruit ? "red" : "green" }}>
    {item.title}
  </li>
));

console.log(ListItem);

const Fruit = () => {
  return (
    <ul>{ListItem}</ul>
  );
};

export default Fruit;