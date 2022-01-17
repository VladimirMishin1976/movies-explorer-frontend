import React from "react";

import useInput from '../../hooks/useInput';

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css';

function SearchForm({ handleSubmit }) {
  const useInputsearch = useInput('');

  

  return (
    <>
      <section className="search">
        <form className="search__form" onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          useInputsearch.clear();
        }}>
          <input {...useInputsearch.input}
            className="search__input" type="text" placeholder="Фильм" name="search" required />
          <button className="search__submit button-hover" type="submit" >Найти</button>
        </form>
        <div className='search__check-box'>
          <FilterCheckbox />
        </div>
      </section>
      <div className='search__decor' />
    </>
  )
}

export default SearchForm;