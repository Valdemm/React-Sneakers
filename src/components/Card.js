function Card() {
  return (
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
  );
}
export default Card;
