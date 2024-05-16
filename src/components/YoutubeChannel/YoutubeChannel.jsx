import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function YoutubeChannel() {
  const youtube = [
    { link: "https://www.youtube.com/embed/gPsZHSS2WWo?si=8BA5zV1WazDJ2KiZ" },
    { link: "https://www.youtube.com/embed/qVIGDOY_yew?si=3TSblLJiBtNTq8Yd" },
    { link: "https://www.youtube.com/embed/e_CCN59ztqs?si=sGHUv9EvCD2ErTA4" },
    { link: "https://www.youtube.com/embed/k4LWi1F56pw?si=LAPTr2dKsVSMI0fA" },
    { link: "https://www.youtube.com/embed/UspZizdF9NQ?si=QrZgmDt_kmB9YPKI" },
    { link: "https://www.youtube.com/embed/TAYRNFCGDuM?si=twfV6Zpmj1GjeqTF" },
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
    nextArrow: <SampleNextArrow onClick={() => {}} />,
    prevArrow: <SamplePrevArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="youtube-channel" className="youtube-channel">
      <h2 className="title">мы на YoUTUBE</h2>
      <div className="container">
        <p className="youtube-channel__description">
          В 2023 году мы начали новый проект: наша администратор Юлия Раджабова
          берет интервью у топовых представителей туризма - о туризме и не
          только! Все выпуски размещаем на YouTube-канале. Также вы можете
          увидеть или разместить видеоролики о вашем продукте.
        </p>
        <div className="youtube-channel__slider">
          <Slider {...settingsVideos}>
            {youtube.map((youtube, index) => (
              <div className="youtube-channel__video" key={index}>
                <div>
                  <iframe
                    width="100%"
                    height="280"
                    src={youtube.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Link
          to={"https://youtube.com/@we.are.islands?si=xLYhrQhf0L6O8FoV"}
          className="youtube-channel__link button"
          target="_blank"
        >
          перейти на канал
        </Link>
      </div>
    </section>
  );
}
