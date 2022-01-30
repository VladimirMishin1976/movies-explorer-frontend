import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import './SavedMovies.css';

function SavedMovies({ handleSearchMovies, movieList, searchState, setSearchState }) {
  return (
    <main className='saved-movies'>
      <SearchForm
        handleSubmit={handleSearchMovies}
        searchState={searchState}
        setSearchState={setSearchState}
      />
      <MoviesCardList
        movieList={movieList}
      />
    </main>
  );
}

export default SavedMovies;  