function Drawer() {
  return (
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
  );
}

export default Drawer;
