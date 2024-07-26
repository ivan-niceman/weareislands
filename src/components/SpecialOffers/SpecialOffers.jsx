import { useState, useEffect } from "react";

export default function SpecialOffers() {
  const [[days, hours, minutes, seconds], setTime] = useState([16, 7, 23, 42]);
  const [, setOver] = useState(false);

  function tick() {
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      setOver(true);
    } else if (hours === 0 && minutes === 0 && seconds === 0) {
      setTime([days - 1, 24, 59, 59]);
    } else if (minutes === 0 && seconds === 0) {
      setTime([days, hours - 1, 59, 59]);
    } else if (seconds === 0) {
      setTime([days, hours, minutes - 1, 59]);
    } else {
      setTime([days, hours, minutes, seconds - 1]);
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <section id="special-offers" className="special-offers">
      <h2 className="title">cпециальное предложение</h2>
      <div className="container">
        <div>
          <div className="special-offers__info">
            <div className="special-offers__description">
              <span>
                <p>
                  Постоянный пост вашей компании (ветка), который вы модерируете
                  самостоятельно.
                </p>
                <p>
                  Пост можно обновлять, дополнять, сообщать горящие новости,
                  писать комментарии и так далее
                </p>
              </span>
              <span>
                <p className="special-offers__price">30&nbsp;000&nbsp;₽</p>
                <p>навсегда!</p>
              </span>
            </div>
            <h3 className="special-offers__subtitle">до конца акции:</h3>
          </div>
          <ul className="special-offers__list">
            <li>
              <span className="special-offers__day">дней</span>
              <span className="special-offers__time">{days}</span>
            </li>
            <li>
              <span className="special-offers__day">часов</span>
              <span className="special-offers__time">{hours}</span>
            </li>
            <li>
              <span className="special-offers__day">минут</span>
              <span className="special-offers__time">{minutes}</span>
            </li>
            <li>
              <span className="special-offers__day">секунд</span>
              <span className="special-offers__time">{seconds}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
