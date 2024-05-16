import PropTypes from "prop-types";
import Slider from "react-slick";

import arrow from "../../images/icons/arrow1.svg";

import statistic1 from "../../images/statistic/statistic1.png";
import statistic2 from "../../images/statistic/statistic2.jpeg";
import statistic3 from "../../images/statistic/statistic3.jpeg";
import statistic4 from "../../images/statistic/statistic4.jpeg";
import statistic5 from "../../images/statistic/statistic5.jpeg";

import slider1 from "../../images/statistic/info1.jpeg";
import slider2 from "../../images/statistic/info2.jpeg";
import slider3 from "../../images/statistic/info3.jpeg";
import slider4 from "../../images/statistic/info4.jpeg";
import slider5 from "../../images/statistic/info5.jpeg";
import slider6 from "../../images/statistic/info6.jpeg";
import slider7 from "../../images/statistic/info7.jpeg";
import slider8 from "../../images/statistic/info8.jpeg";
import slider9 from "../../images/statistic/info9.jpeg";
import slider10 from "../../images/statistic/info10.jpeg";
import slider11 from "../../images/statistic/info11.jpeg";
import slider12 from "../../images/statistic/info12.jpeg";

export default function Statistics() {
  const statistics = [
    { img: statistic2, alt: `статистика` },
    { img: statistic3, alt: `статистика` },
    { img: statistic4, alt: `статистика` },
    { img: statistic5, alt: `статистика` },
  ];

  const statisticsSlider = [
    { img: slider1, alt: `статистика` },
    { img: slider2, alt: `статистика` },
    { img: slider3, alt: `статистика` },
    { img: slider4, alt: `статистика` },
    { img: slider5, alt: `статистика` },
    { img: slider6, alt: `статистика` },
    { img: slider7, alt: `статистика` },
    { img: slider8, alt: `статистика` },
    { img: slider9, alt: `статистика` },
    { img: slider10, alt: `статистика` },
    { img: slider11, alt: `статистика` },
    { img: slider12, alt: `статистика` },
  ];

  function SampleNextArrow({ onClick }) {
    return (
      <button
        className="slick-arrow-button next-arrow-button"
        onClick={onClick}
      ></button>
    );
  }

  function SamplePrevArrow({ onClick }) {
    return (
      <button
        className="slick-arrow-button prev-arrow-button"
        onClick={onClick}
      ></button>
    );
  }

  SampleNextArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  SamplePrevArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  const settingsStatistic = {
    infinite: true,
    lazyLoad: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow onClick={() => {}} />,
    prevArrow: <SamplePrevArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="statistics" className="statistics">
      <h2 className="title">статистика ГРУППЫ</h2>
      <div className="container">
        <div className="statistics__info">
          <span className="statistics__info-section">
            <img
              src={statistic1}
              alt="статистика"
              className="statistics__info-img"
            />
            <img src={arrow} alt="стрелка" className="statistics__info-arrow" />
          </span>
          <span className="statistics__info-description">
            <p>
              На данный момент профессиональная группа &quot;ОСТРОВА И МИР&quot; насчитывает 10000 участников (Facebook* - более 6500 и  Telegram -  более 3500 участников), причем около 80% из них демонстрируют постоянную активность, что подтверждается комментариями высокого качества и обширным охватом обсуждений.
            </p>
            <p>
              Большинство участников находятся в Российской Федерации. Подробную статистику можно изучить в галерее ниже.
            </p>
            <p>
              В группу принимаются исключительно профессионалы туризма,
              прошедшие строгий отбор, что также отражено в статистических
              данных.
            </p>
          </span>
        </div>
        <ul className="statistics__gallery">
          {statistics.map((statistics, index) => (
            <li key={index}>
              <img src={statistics.img} alt={statistics.alt} />
            </li>
          ))}
        </ul>
        <div className="statistics__slider">
          <Slider {...settingsStatistic}>
            {statisticsSlider.map((statisticsSlider, index) => (
              <div className="statistics__slider-item" key={index}>
                <div>
                  <img src={statisticsSlider.img} alt={statisticsSlider.alt} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
