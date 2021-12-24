import React from "react";

import './Footer.css';

function Footer() {
  return (
    <section className="footer">
      <h2 className="footer__title footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__box">
        <p className="footer__text">© 2021</p>
        <ul className="footer__list">
          <li className="footer__item">
            <a className="footer__link footer__text" href='https://practicum.yandex.ru' target='_blank' rel="noopener noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="footer__item">
            <a className="footer__link footer__text" href='https://www.facebook.com' target='_blank' rel="noopener noreferrer">Github</a>
          </li>
          <li className="footer__item">
            <a className="footer__link footer__text" href='https://github.com' target='_blank' rel="noopener noreferrer">Facebook</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Footer;