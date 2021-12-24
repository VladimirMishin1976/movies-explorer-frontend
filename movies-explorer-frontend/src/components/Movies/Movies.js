import React from "react";

import SearchForm from '../SearchForm/SearchForm';
// import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
// import Preloader from '../Preloader/Preloader';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import MoviesCard from '../MoviesCard/MoviesCard';

import './Movies.css';

function Movies() {
  return (
    <>
      <main className="movies">
        <SearchForm> 
          {/* <FilterCheckbox /> */}
        </SearchForm>
        {/* <Preloader /> */}
        {/* <MoviesCardList> */}
          {/* <MoviesCard /> */}
        {/* </MoviesCardList> */}
      </main>
    </>
  );
}

export default Movies;