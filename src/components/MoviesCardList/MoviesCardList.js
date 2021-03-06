import React from 'react';
import { Route } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard';
import { AppStatesContext } from '../../contexts/AppStatesContext';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';
import {
  WIDTH_SCREEN_FOR_NUMBER_FILMS,
  NUMBER_CARDS_FOR_BIG_SCREEN,
  NUMBER_CARDS_FOR_SMALL_SCREEN
} from '../../utils/constants';

function MoviesCardList({ movieList }) {
  const isPreload = React.useContext(AppStatesContext).isPreloader;
  const [countMoreClicks, setСountMoreClicks] = React.useState(1);
  const [countCards, setCountCards] = React.useState(numberCardsOfWidth());
  //  счетчик кликов кнопки - еще 
  function onMoreClick() {
    setСountMoreClicks(countMoreClicks + 1);
  }

  React.useEffect(() => {
    setCountCards(numberCardsOfWidth());
  }, [countMoreClicks])
  // Получить количество отображаемых карточек в зависимости от ширины экрана количества кликов кнопки ЕЩЕ 
  //    и количества карточек
  function numberCardsOfWidth() {
    let width = window.innerWidth;
    let numberCards = countMoreClicks * NUMBER_CARDS_FOR_SMALL_SCREEN;
    if (width > WIDTH_SCREEN_FOR_NUMBER_FILMS) numberCards = countMoreClicks * NUMBER_CARDS_FOR_BIG_SCREEN;
    return numberCards;
  }

  const resizeHandler = () => {
    setCountCards(numberCardsOfWidth());
  }

  React.useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, []);

  return (
    <section className="movies-list">
      {isPreload && <Preloader />}
      <ul className="movies-list__list" >
        {movieList.slice(0, countCards).map((movie) => {
          return (
            <li className='movies-list__item' key={movie.movieId}>
              <MoviesCard movie={movie} />
            </li>
          );
        })
        }
      </ul>

      <Route path='/movies'>
        <button className={`movies-list__button ${countCards >= movieList.length && 'movies-list__button_hidden'} 
        button-hover`} type='button' aria-label='Больше видео' onClick={onMoreClick}>Ещё</button>
      </Route>

      <Route path='/saved-movies'>
        <div className='movies-list__devider' />
      </Route>
    </section>
  );
}

export default MoviesCardList;
