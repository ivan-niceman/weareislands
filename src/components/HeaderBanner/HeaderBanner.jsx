import { Link } from "react-router-dom";

export default function HeaderBanner() {
  return (
    <section className="header-banner">
      <div className="container">
        <span className="header-banner__description">
          <h1 className="header-banner__title">реклама для туристических фирм<br />в группах Facebook<sup>*</sup> и telegram</h1>
          <p className="header-banner__paragraph">100% целевая аудитория</p>
          <Link to={`https://wa.me/79295135571`} className="header-banner__link" target="_blank">заказать</Link>
        </span>
        <span className="header-banner__elements">
          <span className="header-banner__element-f" />
          <span className="header-banner__element-t" />
        </span>
        <div className="header-banner__warning">*Meta признана экстремистской организацией в РФ</div>
      </div>
    </section>
  )
}