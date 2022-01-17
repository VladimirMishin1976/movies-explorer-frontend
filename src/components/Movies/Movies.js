import React from "react";

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './Movies.css';

function Movies({handleSearchMovies}) {
  return (
    <main className="movies">
      <SearchForm handleSubmit = {handleSearchMovies}/>
      <MoviesCardList />
    </main>
  );
}

export default Movies;