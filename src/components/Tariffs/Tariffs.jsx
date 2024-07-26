import { Link } from "react-router-dom";

export default function Tariffs() {
  return (
    <section className="tariffs">
      <h2 className="title">тарифные пакеты</h2>
      <div className="tariffs__background">
        <div className="container">
          <span className="tariffs__card">
            <div className="tariffs__card-header">
              <p>ПРОМО:</p>
              <p className="tariffs__card-price">22 000 ₽</p>
            </div>
            <div className="tariffs__card-description">
              <p>
                <b>Тариф «ПРОМО»</b> - позволяет понять аудиторию группы и
                получить отклики и реакции от потенциальных клиентов и партнеров
                в 2 группах.
              </p>
              <p>
                <b>Включает в себя:</b>
              </p>
              <ul>
                <li>4 поста в течение календарного месяца;</li>
                <li>
                  размещение прямого эфира + пост с анонсом за 1 день до начала
                  эфира (без администратора группы).
                </li>
              </ul>
            </div>
            <Link to={`https://wa.me/79295135571`} target="_blank" className="tariffs__link button">
              заказать
            </Link>
          </span>
          <span className="tariffs__card">
            <div className="tariffs__card-header">
              <p>ПРОФИ:</p>
              <p className="tariffs__card-price">27 000 ₽</p>
            </div>
            <div className="tariffs__card-description">
              <p>
                <b>Тариф «ПРОФИ»</b> - позволяет также привлечь аудиторию
                Telegram.
              </p>
              <p>
                <b>Включает в себя:</b>
              </p>
              <ul>
                <li>4 поста в течение календарного месяца;</li>
                <li>
                  размещение прямого эфира + пост с анонсом за 1 день до начала
                  эфира (без администратора группы;
                </li>
                <li>
                  Закрепление одного поста в шапке группы Telegram на 1 неделю +
                  отключение комментариев на 24 часа под одним постом в группе
                  Telegram.
                </li>
              </ul>
            </div>
            <Link to={`https://wa.me/79295135571`} target="_blank" className="tariffs__link button">
              заказать
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
