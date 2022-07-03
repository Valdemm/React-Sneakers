function App() {
  return (
    <div className="wrapper clear">
      <div style={{ display: "none" }} className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30 ">
            Корзина
            <img className="cu-p" src="/img/btn-no-remote.svg" alt="button" />
          </h2>

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/image 5 (5).jpg"
                alt="Sneakers"
              />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Jordan Air Jordan 11</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="remoteBtn"
                src="/img/btn-no-remote.svg"
                alt="button"
              />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/image 5 (5).jpg"
                alt="Sneakers"
              />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Jordan Air Jordan 11</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="remoteBtn"
                src="/img/btn-no-remote.svg"
                alt="button"
              />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/image 5 (5).jpg"
                alt="Sneakers"
              />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Jordan Air Jordan 11</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="remoteBtn"
                src="/img/btn-no-remote.svg"
                alt="button"
              />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого</span>
                <div className="d-flex"></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div className="d-flex"></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenBtn">
              Оформить заказ
              <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>

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
            <div className="favorite">
              <img src="/img/heart-is-not-liked.svg" alt="Unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/image 5 (9).jpg"
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
            <div className="favorite">
              <img src="/img/heart-is-not-liked.svg" alt="Unliked" />
            </div>
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
            <div className="favorite">
              <img src="/img/heart-is-not-liked.svg" alt="Unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/image 5 (4).jpg"
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
