import React from "react";

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './Movies.css';

function Movies({ handleSearchMovies, movieList }) {
  return (
    <main className="movies">
      <SearchForm handleSubmit={handleSearchMovies} />
      <MoviesCardList
        movieList={movieList}
      />
    </main>
  );
}

export default Movies;