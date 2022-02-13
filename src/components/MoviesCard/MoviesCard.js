import React from 'react';
import { Route } from 'react-router-dom';

import { AppStatesContext } from '../../contexts/AppStatesContext';
import './MoviesCard.css';

function MoviesCard({ movie }) {
  const { handleLike, handleDislike, moviesSaved } = React.useContext(AppStatesContext);
  const [isLiked, setIsLiked] = React.useState(checkLike());

  const duration = movie.duration >= 60
    ? Math.floor(movie.duration / 60) + 'ч ' + movie.duration % 60 + 'м'
    : movie.duration % 60 + 'м';

  function handleLikeClick() {
    if (isLiked) handleDislike(movie);
    if (!isLiked) handleLike(movie);
  }

  function checkLike() { //проверить видео: сохранен или нет 
    return !!moviesSaved.find(mov => mov.movieId === movie.movieId);
  }

  React.useEffect(() => {
    setIsLiked(checkLike());
  }, [handleLikeClick]);

  return (
    <>
      <article className='card'>
        <figure className='card__poster'>
          <a className='card__link' href={movie.trailer} target='_blank' rel='noopener noreferrer'>
            <img className='card__img' src={movie.image} alt={movie.nameRU} />
          </a>
          <div className='card__contaner'>
            <figcaption className='card__caption'>{movie.nameRU}
              <p className='card__duration'>{duration}</p>
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