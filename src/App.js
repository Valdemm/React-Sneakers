import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 12999,
    imageUrl: "/img/sneakers/image 5 (4).jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15100,
    imageUrl: "/img/sneakers/image 5 (1).jpg",
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 12600,
    imageUrl: "/img/sneakers/image 5 (2).jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 9600,
    imageUrl: "/img/sneakers/image 5 (3).jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Header />
      <Drawer />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
