import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import './SavedMovies.css';

function SavedMovies({ handleSearchMovies, movieList }) {
  return (
    <main className='saved-movies'>
      <SearchForm handleSubmit={handleSearchMovies} />
      <MoviesCardList
        movieList={movieList}
      />
    </main>
  );
}

export default SavedMovies;