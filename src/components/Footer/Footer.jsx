import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

import qr1 from "../../images/qr1.jpeg";
import qr2 from "../../images/qr2.jpeg";

export default function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <div className="footer__logo">
            <Link to={`/`} />
            <div className="footer__social">
              <Link to={`https://www.facebook.com/groups/we.are.islands`} target="_blank"/>
              <Link to={`https://t.me/+X9rH3EbMiZZiYzc6`} target="_blank"/>
              <Link to={`https://wa.me/79295135571`} target="_blank"/>
            </div>
          </div>
          <Navigation />
          <div className="footer__qrs">
            <span>
              <img src={qr1} alt="qr" />
              <Link to={`https://www.facebook.com/groups/we.are.islands`} target="_blank">facebook<sup>*</sup></Link>
            </span>
            <span>
              <img src={qr2} alt="qr" />
              <Link to={`https://t.me/+X9rH3EbMiZZiYzc6`} target="_blank">telegram</Link>
            </span>
          </div>
        </div>
        <p className="footer__alert">*Meta признана экстремистской организацией в РФ</p>
      </div>
      <Link to="https://nice-dev.ru/" className="nice-dev" target="_blank">
        © Nice Dev Web-Studio 2020 - {getCurrentYear()}
      </Link>
    </footer>
  )
}