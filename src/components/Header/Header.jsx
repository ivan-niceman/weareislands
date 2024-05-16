import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Navigation from "../Navigation/Navigation";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const nodeRef = useRef(null);

  const handleOverlayClick = (evt) => {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains("mobile-nav")
    ) {
      setShowMobileNav(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.key === "Escape") {
        setShowMobileNav(false);
      }
    };

    if (showMobileNav) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [showMobileNav]);

  return (
    <header className="header">
      <section className="header__section container">
        <div className="header__container">
          <button
            className="header__burger-button"
            onClick={() => setShowMobileNav(true)}
          />
          <Link to="/" className="header__logo-link" />
          <p className="header__description">
            Поможем вашему туристическому бизнесу процветать
          </p>
          <span className="header__social">
            <Link
              to={`https://www.facebook.com/groups/we.are.islands`}
              className="header__social-link"
              target="_blank"
            />
            <Link
              to={`https://t.me/+X9rH3EbMiZZiYzc6`}
              className="header__social-link"
              target="_blank"
            />
            <Link
              to={`https://wa.me/79295135571`}
              className="header__social-link"
              target="_blank"
            />
          </span>
        </div>
        <Navigation />
        <CSSTransition
          in={showMobileNav}
          timeout={300}
          classNames="mobile"
          unmountOnExit
          nodeRef={nodeRef}
        >
          <div
            className="mobile-nav"
            onClick={handleOverlayClick}
            ref={nodeRef}
          >
            <MobileNavigation onClick={() => setShowMobileNav(false)} />
          </div>
        </CSSTransition>
      </section>
    </header>
  );
}
