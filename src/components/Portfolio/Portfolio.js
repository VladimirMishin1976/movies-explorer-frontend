import React from "react";

import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <p className="portfolio__name">Статичный сайт</p>
          <a className="portfolio__link" href='https://www.youtube.com' target='_blank' rel="noopener noreferrer">↗</a>
        </li>
        <li className="portfolio__list-item">
          <p className="portfolio__name">Адаптивный сайт</p>
          <a className="portfolio__link" href='https://www.youtube.com' target='_blank' rel="noopener noreferrer">↗</a>
        </li>
        <li className="portfolio__list-item">
          <p className="portfolio__name">Одностраничное приложение</p>
          <a className="portfolio__link" href='https://www.youtube.com' target='_blank' rel="noopener noreferrer">↗</a>
        </li>
      </ul>
    </section>
  );

}

export default Portfolio;