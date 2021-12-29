import React from "react";
import { Link } from "react-router-dom";
import Topic from '../Topic/Topic';

import avatar from '../../images/about__me-avatar.jpg';
import './AboutMe.css';

function AboutMe() {

  return (
    <section className='about-me' id="about me">
      <Topic title='Студент' />
      <div className='about-me__container'>
        <div className="about-me__box">
          <h2 className='about-me__title'>Виталий</h2>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании
            «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
            постоянной работы.
          </p>
          <ul className='about-me__list'>
            <li className="about-me__list-item">
              <Link className="about-me__social-link" to='https://www.facebook.com/'>Facebook</Link>
            </li>
            <li className="about-me__list-item">
              <Link className="about-me__social-link" to='https://www.github.com/'>Github</Link>
            </li>
          </ul>
        </div>
        <img className="about-me__avatar" src={avatar} alt="Аватар" />
      </div>
    </section>
  );
}

export default AboutMe;