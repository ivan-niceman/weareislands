import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import img1 from '../../images/islands1.webp';
import img2 from '../../images/islands2.jpeg';
import certificate from '../../images/certificate.png';

export default function About() {
  const [showCertificate, setShowCertificate] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const nodeRef = useRef(null);

  const handleOverlayClick = (evt) => {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains('about__popup-certificate') ||
      evt.target.classList.contains('about__popup-more')
    ) {
      setShowCertificate(false);
      setShowMore(false);
    }
  };

  return (
    <section id="about" className="about" onClick={handleOverlayClick}>
      <h2 className="title">о нас</h2>
      <div className="container">
        <div className="about__info">
          <div className="description">
            <p className="about__paragraph">
              Группа &quot;ОСТРОВА И МЫ&quot;, созданная 1 сентября 2020 года,
              является профессиональным сообществом в турбизнесе, доступным
              только для специалистов отрасли.
            </p>
            <p className="about__paragraph">
              Чтобы присоединиться, потенциальные участники должны заполнить
              анкету, подтверждающую их профессиональную причастность к туризму,
              иначе заявка отклоняется. Это гарантирует, что в группе нет
              туристов, а только квалифицированные специалисты - турагенты,
              сотрудники туроператорских компаний, национальных офисов по
              туризму, представители отелей, ДМС, авиакомпаний, страховых
              компаний и тп.
            </p>
            <p className="about__paragraph">
              Группа активно обсуждает развитие туристического бизнеса на
              популярных у туристов островных, экзотических и премиальных
              направлениях для отдыха. Участники делятся новостями курортов,
              информацией об отелях и контактами важных участников туриндустрии.
            </p>
            <p className="about__paragraph">
              В 2022 году группа также стала активно использовать платформу
              &quot;Telegram&quot; для обмена фото и видео контентом, что
              способствует лучшей работе и продвижению в социальных сетях.
            </p>
            <p className="about__paragraph">
              В 2023 году мы создали канал на YOUTUBE, где размещаются интервью
              с известными личностями в туризме (уникальный проект Юлии
              Раджабовой), а также видео контент для продвижения в рамках
              рекламных кампаний наших партнеров.
            </p>
            <p className="about__paragraph">
              С 2024 года группа является официальным членом Российского союза
              туриндустрии, что подтверждается соответствующим&nbsp;
              <button
                className="about__paragraph-certificate"
                onClick={() => setShowCertificate(true)}
              >
                сертификатом.
              </button>
            </p>
          </div>
          <img src={img1} alt="море и пляж" className="about__img" />
          <img src={img2} alt="море и пляж" className="about__img" />
          <div className="about__contacts">
            <Link
              to={`https://www.facebook.com/groups/we.are.islands`}
              className="about__link"
              target="_blank"
            >
              Перейти в facebook<sup>*</sup>
            </Link>
            <Link
              to={`https://t.me/+X9rH3EbMiZZiYzc6`}
              className="about__link"
              target="_blank"
            >
              Перейти в telegram
            </Link>
          </div>
        </div>
        <div className="about__banner">
          <h3 className="about__banner-subtitle">
            ОСТРОВА и Мы — МИР — расширяем географию!
          </h3>
          <button
            className="about__banner-button button"
            onClick={() => setShowMore(true)}
          >
            читать подробнее{' '}
          </button>
        </div>
      </div>
      <CSSTransition
        in={showCertificate}
        timeout={300}
        classNames="alert"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div className="about__popup-certificate" ref={nodeRef}>
          <span>
            <img
              src={certificate}
              alt="сертификат"
              className="about__certificate"
            />
            <button
              className="about__popup-close-button"
              onClick={() => setShowCertificate(false)}
            />
          </span>
        </div>
      </CSSTransition>
      <CSSTransition
        in={showMore}
        timeout={300}
        classNames="alert"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div className="about__popup-more" ref={nodeRef}>
          <div className="about__popup-more-section">
            <h2 className="about__popup-more-title">
              ОСТРОВА и Мы - МИР - расширяем географию!
            </h2>
            <div className="about__popup-more-content">
              <span className="about__popup-more-info">
                <p>
                  В 2020 году мы основали группу &quot;Острова и мы&quot; с
                  амбициозной целью создать сообщество, объединяющее
                  профессионалов туристической индустрии, специализирующихся на
                  островных направлениях. Начиная с ограниченного числа
                  направлений, мы не ожидали такого стремительного роста
                  активности, который свидетельствовал о большом интересе к
                  такой нишевой специализации. Мы стремились не только собрать
                  единомышленников, но и создать платформу для обмена знаниями и
                  опытом без конкуренции, где важны поддержка, взаимовыручка,
                  честность и уважение.
                </p>
                <p>
                  С течением времени, запросы участников начали выходить за
                  рамки исключительно островного туризма. Возникла потребность
                  рассмотрения ребрендинга, чтобы адаптировать группу к
                  расширяющимся интересам без потери нашей основной концепции.
                  Размышления о новой идентичности привели к случайной ошибке в
                  написании названия группы – &quot;Острова и мир&quot;, что
                  оказалось революционным. Это открытие подтолкнуло нас к
                  решению расширить наше видение, включив не только островные
                  направления, но и другие экзотические и эксклюзивные локации,
                  предлагающие уникальные, премиальные виды отдыха.
                </p>
                <p>
                  Эта эволюция позволила нам сохранить верность нашим корням,
                  углубляя и расширяя нашу миссию и предложение для сообщества.
                  Теперь &quot;Острова и мир&quot; не просто форум, где
                  обсуждаются островные направления; это место, где
                  профессионалы могут обмениваться опытом о различных уникальных
                  и эксклюзивных направлениях. Это стало возможным благодаря
                  приверженности наших участников и их стремлению поддерживать
                  друг друга в поиске наилучших туристических решений.
                </p>
                <p>
                  Также мы заметили, как важно наше сообщество для коллег,
                  которые стремятся решать профессиональные вопросы в
                  дружественной и поддерживающей атмосфере. Многие коллеги
                  выразили желание продолжать реализацию проектов именно с нами,
                  чувствуя надежность и отсутствие осуждения, что вдохновляет
                  нас продолжать нашу работу и развивать сообщество дальше.
                </p>
              </span>
              <span className="about__popup-more-images">
                <img src={img2} alt="острова и мы" />
              </span>
            </div>
            <button
              className="about__popup-close-button"
              onClick={() => setShowMore(false)}
            />
          </div>
        </div>
      </CSSTransition>
    </section>
  );
}
