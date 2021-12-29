import React from 'react';
import { Route } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

let countMoreClicks = 0;

function MoviesCardList() {

  // временно для заполнения 
  const cards = new Array(
    window.location.pathname === '/saved-movies' ? 2 : 20
  ).fill({
    image: 'https://cdn.pixabay.com/photo/2020/12/01/10/04/dog-5793625_960_720.jpg',
    name: '33 слова о дизайне',
    duration: '1ч 42м'
  });
  // -=----------------------------------

  const [countCards, setCountCards] = React.useState(numberCardsOfWidth());

  //  счетчик кликов кнопки - еще 
  function onMoreClick() {
    countMoreClicks += 1;
    setCountCards(numberCardsOfWidth());
  }

  // Получить количество отображаемых карточек в зависимости от ширины экрана количества кликов кнопки ЕЩЕ 
  //    и количества карточек
  function numberCardsOfWidth() {
    let width = window.innerWidth;
    let numberCards = 0;
    numberCards = 5 + countMoreClicks;
    if (width > 530) numberCards = 8 + 2 * countMoreClicks;
    if (width > 1000) numberCards = 16 + 4 * countMoreClicks;
    if (cards.length > numberCards) return numberCards;
    return cards.length;
  }

  window.addEventListener('resize', (e) => {
    setCountCards(numberCardsOfWidth());
  });

  return (
    <section className="movies-list">
      <ul className="movies-list__list" >
        {cards.slice(0, countCards).map((movie, i) => {
          return (
            <li className='movies-list__item' key={i}>
              <MoviesCard movie={movie} _id={i} />
            </li>
          );
        })
        }
      </ul>

      {/* У кнопки граница не по макету  -  плохо видно */}
      <Route path='/movies'>
        <button className='movies-list__button button-hover' type='button' aria-label='Больше видео'
          onClick={onMoreClick}>Ещё</button>
      </Route>
      <Route path='/saved-movies'>
        <div className='movies-list__devider' />
      </Route>
    </section>
  );
}

export default MoviesCardList;
