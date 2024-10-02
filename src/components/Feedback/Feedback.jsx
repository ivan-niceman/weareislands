import PropTypes from 'prop-types';
import Slider from 'react-slick';

import staff1 from '../../images/staff1.jpeg';
import staff2 from '../../images/staff2.jpeg';
import staff3 from '../../images/staff3.jpeg';
import staff4 from '../../images/staff4.webp';

export default function Feedback() {
  const video = [
    { link: 'https://youtube.com/embed/lOyx1CETgHE?si=8jLY6SDJcX60QgHs' },
    { link: 'https://youtube.com/embed/gYAGsQ0EPK8?si=DPJmznPV_veqeg23' },
    { link: 'https://youtube.com/embed/VEtLXQq_I0E?si=q4Pn0a80paKV49qk' },
  ];

  const cards = [
    {
      img: staff1,
      alt: `Юрасова Светлана`,
      subtitle: `«Острова и Мы» с первых месяцев своего существования успели покорить сердца всей команды Tophotels и стать одним из наших любимых партнеров, сотрудничество с которым приносит не только видимые результаты, но и доставляет огромное удовольствие! Какой бы новый проект мы не запускали, мы всегда на 100% уверены в качественной информационной поддержке «Островов» — ведь там собрались действительно настоящие профи туризма, которые горят своей работой, и готовы делиться своими знаниями, бесценным опытом, полезными советами и тонной юмора) Такая лояльная, активная и очень творческая аудитория коллег — это и есть залог успеха всех наших онлайн-мероприятий, которые, благодаря поддержке Островитян, всегда проходят на ура!

      Такого профессионального сообщества, где всегда царила бы такая душевная и доброжелательная атмосфера, в туризме раньше очень не хватало! И я очень рада, что такой проект однажды появился, активно развивается и продолжает объединять тысячи коллег, уже не только по островной тематике, но и по материковым направлениям)
      `,
      description: `Юрасова Светлана,
      Head of Sales & Business Development
      Project TopHotels.ru`,
    },
    {
      img: staff2,
      alt: `Зулкифли Бин Мохамед`,
      subtitle: `Сотрудничество Tourism Malaysia с группой "Острова и Мы" открывает перед профессионалами турбизнеса всю красоту и многообразие Малайзии. Вместе мы активно вовлекаем участников в проекты, давая им возможность предлагать собственные идеи по продвижению направления.
      Мы стремимся делиться преимуществами отдыха в Малайзии, раскрывая её уникальные достопримечательности, неповторимую природу и современные мегаполисы. Отсутствие визовых требований для россиян на срок до 30 дней делает путешествие ещё более привлекательным.
      Взаимодействие с российскими СМИ, включая "Острова и Мы", укрепляет позиции Малайзии как популярного туристического направления, привлекая путешественников со всей России. Мы уверены в дальнейшем успехе и плодотворном сотрудничестве!`,
      description: `Зулкифли Бин Мохамед, Заместитель Директора Офиса по Туризму Малайзии в России`,
    },
    {
      img: staff3,
      alt: `Наталья Гребнева`,
      subtitle: `Дружба с группой "Острова и Мы" началась для меня несколько лет назад во время совместной представительской поездки. После этого мы успели воплотить в жизнь интересный интеллектуальный проект, прокатится вместе в рекламном туре, встретиться на многих мероприятиях. И это только начало!
      Группа была и остаётся местом общения классных профессионалов туротрасли, которые хотят получать только свежую и качественную информацию. А какой колоссальный обмен энергией и опытом происходит в телеграм канале! Этого нет больше нигде в туристическом сообществе. Юлии создали невероятно качественный и полезный продукт.
      Желаю группе только развития и множества интересных новостей и проектов! 🙏`,
      description: `Наталья Гребнева, Руководитель отдела маркетинга DMC Embassy Alliance`,
    },
    {
      img: staff4,
      alt: `Валентина Мягкова`,
      subtitle: `Компания Proxima Marketing давно и плодотворно работает с группой «Острова и мы», а нынче "Острова и мир".За что мы любим группу: за доброжелательность  и полное отсутствие высокомерия. А между тем, основатели «Острова и мир" - высокопрофессиональные люди! Но при этом люди искренние, душевные, всегда готовые помочь. И, наверное, именно поэтому им удалось собрать у себя такое количество классных агентов. И само существование группы, и ее каждодневная работа невероятно важны. Ведь туризм безостановочно штормит. Все, что было незыблемо вчера, летит к черту сегодня. Надо постоянно держать руку на пульсе. И именно в группе можно найти актуальную, проверенную информацию от людей, прошедших тем же путем, но чуть раньше тебя. Для нас же, представителей отелей и DMC,  это уникальная возможность донести свою информацию до огромного количества агентов. Пожалуй, сегодня ничто так продуктивно не работает, как продвижение в профессиональных группах. И мы очень благодарны «Острова и мир» за возможность сотрудничества.`,
      description: `Валентина Мягкова - директор компании Proxima Marketing`,
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

  const settingsVideos = {
    infinite: true,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          swipe: true,
          arrows: true,
          nextArrow: <SampleNextArrow onClick={() => {}} />,
          prevArrow: <SamplePrevArrow onClick={() => {}} />,
        },
      },
    ],
  };

  const settingsCards = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="feedback">
      <h2 className="title">отзывы</h2>
      <div className="container">
        <div className="feedback__slider-video">
          <Slider {...settingsVideos}>
            {video.map((video, index) => (
              <div className="feedback__video" key={index}>
                <div>
                  <iframe
                    width="100%"
                    height="315"
                    src={video.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="feedback__slider-cards">
          <Slider {...settingsCards}>
            {cards.map((cards, index) => (
              <div className="feedback__card" key={index}>
                <div>
                  <div className="feedback__card-info">
                    <img src={cards.img} alt={cards.alt} />
                    <p>{cards.description}</p>
                  </div>
                  <h3 className="feedback__card-subtitle">{cards.subtitle}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
