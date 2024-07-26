import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Slider from "react-slick";

import staff1 from "../../images/staff/staff1.jpg";
import staff2 from "../../images/staff/staff2.jpg";
import staff3 from "../../images/staff/staff3.jpg";
import staff4 from "../../images/staff/staff4.jpg";

export default function Team() {
  const teamCard = [
    {
      img: staff1,
      name: `Юлия Раджабова`,
      description: `— турагент с 27-летним опытом. Она является настоящим энерджайзером в нашей команде. Юлия работает в режиме 24/7, проводит уникальные интервью, с легкостью путешествует по всему миру, следит за последними новинками в социальных сетях и создает множество полезного контента для коллег.`,
      position: `Администратор и совладелец`,
    },
    {
      img: staff2,
      name: `Юлия Ковалевская`,
      description: `— влюблена в острова с первых шагов в туризме в 2006 году.
      Эксперт по Маврикию и другим экзотическим островам. Основатель представительства отелей и DMC. Идейный вдохновитель островного контента, автор экспертных публикаций, активно поддерживает атмосферу уважения, сотрудничества и здоровых взаимодействий в группе.`,
      position: `Администратор и совладелец`,
    },
    {
      img: staff3,
      name: `Тимур Раджабов `,
      description: `— специалист многогранный - отвечает за техническую  поддержку, решение правовых задач и финансовые вопросы.`,
      position: `Администратор и совладелец`,
    },
    {
      img: staff4,
      name: `Инга Селюкова`,
      description: `— координатор и смехотерапевт группы. Турагент с большим стажем, фотограф. Создаёт позитивное настроение, отличается своим неповторимым стилем и любовью к Бали.`,
      position: `Модератор`,
    },
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

  const settingsTeam = {
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    nextArrow: <SampleNextArrow onClick={() => {}} />,
    prevArrow: <SamplePrevArrow onClick={() => {}} />,
  };

  return (
    <section id="team" className="team">
      <h2 className="title">наша команда</h2>
      <div className="container">
        <h3 className="team__subtitle">
          По всем вопросам вы можете обращаться к любому из администраторов в
          группе:
        </h3>
        <ul className="team__cards">
          {teamCard.map((teamCard, index) => (
            <li className="team__card" key={index}>
              <img src={teamCard.img} alt={teamCard.name} />
              <div>
                <p className="team__description">
                  <b>{teamCard.name}</b> {teamCard.description}
                </p>
                <p className="team__position">{teamCard.position}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="team__cards-slider">
          <Slider {...settingsTeam}>
            {teamCard.map((teamCard, index) => (
              <div key={index}>
                <div className="team__card-slider">
                  <div className="team__card-slider-card" >
                    <img src={teamCard.img} alt={teamCard.name} />
                    <div>
                      <p className="team__description">
                        {teamCard.name} {teamCard.description}
                      </p>
                      <p className="team__position">{teamCard.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <p className="team__mail-link">Электронная почта: <Link to={"mailto:we.are.islands@yandex.ru"} target="_blank">we.are.islands@yandex.ru</Link></p>
      </div>
    </section>
  );
}
