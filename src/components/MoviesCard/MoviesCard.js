import React from 'react';
import { Route } from 'react-router-dom';

import './MoviesCard.css';

import img from '../../images/poster.jpg';

function MoviesCard({ movie, _id }) {
  const [isLiked, setIsLiked] = React.useState(false);
  function handleLikeClick() {
    setIsLiked(!isLiked);
  }
  return (
    <>
      <article className='card'>
        <figure className='card__poster'>
          <img className='card__img' src={img} alt={movie.name + ' - ' + _id} />
          <div className='card__contaner'>
            <figcaption className='card__caption'>{movie.name + ' - ' + _id}
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
      {/* 
      <Route path='/saved-movies'>
        <article className='card'>
          <figure className='card__poster'>
            <img className='card__img' src={img} alt={movie.name + ' - ' + _id} />
            <div className='card__contaner'>
              <figcaption className='card__caption'>{movie.name + ' - ' + _id}</figcaption>
              <div className='card__like card__like_dislike button-hover' />
            </div>
          </figure>
          <p className='card__duration'>{movie.duration}</p>
        </article >
      </Route> */}
    </>
  );
}

export default MoviesCard