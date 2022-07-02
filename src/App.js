function App() {
  return (
    <div className="wrapper clear">
      <div className="drawer"></div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png"></img>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opasity-5">Магазин лучших кросовок.</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={20} height={20} src="/img/group.svg"></img>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/union.svg"></img>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-is-not-liked.svg" alt="Unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/image 5 (5).jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Jordan Air Jordan 11 </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/image 5 (1).jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Jordan Air Jordan 11 </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/image 5 (3).jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Jordan Air Jordan 11 </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/image 5 (2).jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Jordan Air Jordan 11 </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
