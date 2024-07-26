import Marquee from "react-fast-marquee";

import partner1 from "../../images/partners/partner1.jpeg";
import partner2 from "../../images/partners/partner2.jpeg";
import partner3 from "../../images/partners/partner3.jpeg";
import partner4 from "../../images/partners/partner4.jpeg";
import partner5 from "../../images/partners/partner5.jpeg";
import partner6 from "../../images/partners/partner6.jpeg";
import partner7 from "../../images/partners/partner7.jpeg";
import partner8 from "../../images/partners/partner8.jpeg";
import partner9 from "../../images/partners/partner9.jpeg";
import partner10 from "../../images/partners/partner10.jpeg";
import partner11 from "../../images/partners/partner11.jpeg";
import partner12 from "../../images/partners/partner12.jpeg";
import partner13 from "../../images/partners/partner13.jpeg";
import partner14 from "../../images/partners/partner14.jpeg";
import partner15 from "../../images/partners/partner15.jpeg";
import partner16 from "../../images/partners/partner16.jpeg";
import partner17 from "../../images/partners/partner17.jpeg";
import partner18 from "../../images/partners/partner18.jpeg";
import partner19 from "../../images/partners/partner19.jpeg";
import partner20 from "../../images/partners/partner20.jpeg";
import partner21 from "../../images/partners/partner21.jpeg";
import partner22 from "../../images/partners/partner22.jpeg";
import partner23 from "../../images/partners/partner23.jpeg";
import partner24 from "../../images/partners/partner24.jpeg";
import partner25 from "../../images/partners/partner25.jpeg";
import partner26 from "../../images/partners/partner26.jpeg";
import partner27 from "../../images/partners/partner27.jpeg";

export default function Partners() {
  const partners = [
    {img: partner1, alt: "пакс"},
    {img: partner2, alt: "resort"},
    {img: partner3, alt: "top hotels"},
    {img: partner4, alt: "corona"},
    {img: partner5, alt: "panteon"},
    {img: partner6, alt: "maldives bonus"},
    {img: partner7, alt: "travelatru"},
    {img: partner8, alt: "itm"},
    {img: partner9, alt: "art tour"},
    {img: partner10, alt: "ethiopian"},
    {img: partner11, alt: "32 points"},
    {img: partner12, alt: "мой агент"},
    {img: partner13, alt: "travel media"},
    {img: partner14, alt: "tropicana"},
    {img: partner15, alt: "aljazeera"},
    {img: partner16, alt: "resorts & hotel"},
    {img: partner17, alt: "centara"},
    {img: partner18, alt: "clubmed"},
    {img: partner19, alt: "iberostar"},
    {img: partner20, alt: "turkish airlines"},
    {img: partner21, alt: "btour"},
    {img: partner22, alt: "enjoy travel"},
    {img: partner23, alt: "мальдивиана"},
    {img: partner24, alt: "alfardan group"},
    {img: partner25, alt: "rcd hotels"},
    {img: partner26, alt: "travel regatta"},
    {img: partner27, alt: "loti"},
  ];

  return (
    <section id="partners" className="partners">
      <h2 className="title">наши партнеры</h2>
      <Marquee speed={100}>
        <ul className="partners__list">
          {partners.map(({ img, alt }, index) => (
            <li className="partners__item" key={index}>
              <img src={img} alt={alt} />
            </li>
          ))}
        </ul>
      </Marquee>
    </section>
  );
}
