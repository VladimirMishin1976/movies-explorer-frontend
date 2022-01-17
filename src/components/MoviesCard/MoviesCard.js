import React from 'react';
import { Route } from 'react-router-dom';

import { BEATFILMS_URL_BACKEND } from '../../utils/constants';
import './MoviesCard.css';

function MoviesCard({ movie }) {
  const [isLiked, setIsLiked] = React.useState(false);
  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  return (
    <>
      <article className='card'>
        <figure className='card__poster'>
          <a className='card__link' href={movie.trailerLink}  target='_blank' rel='noopener noreferrer'>
          <img className='card__img' src={BEATFILMS_URL_BACKEND + movie.image.url} alt={movie.nameRU} />
        </a>
        <div className='card__contaner'>
          <figcaption className='card__caption'>{movie.nameRU}
            <p className='card__duration'>{movie.duration}</p>
          </figcaption>

          <Route path='/movies'>
            <button className={`card__like button-hover ${isLiked && 'card__like_liked'}`} onClick={handleLikeClick} />
          </Route>

          <Route path='/saved-movies'>
            <button className={`card__like card__like_dislike button-hover ${isLiked && 'card__like_liked'}`} onClick={handleLikeClick} />
          </Route>
        </div>
      </figure>
    </article >
    </>
  );
}

export default MoviesCard