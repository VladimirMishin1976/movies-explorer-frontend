import React from "react";

import useInput from '../../hooks/useInput';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css';

function SearchForm({ handleSubmit, searchState, setSearchState }) {
  const useInputsearch = useInput('');

  React.useEffect(() => {
    useInputsearch.setValue(searchState.text)
  }, []);

  React.useEffect(() => {
    setSearchState({ ...searchState, text: useInputsearch.value })
  }, [useInputsearch.value]);

  function onSubmit(e) {
    e.preventDefault();
    const searchText = e.target[0].value;
    handleSubmit(searchText);
    useInputsearch.setValue(searchText);
  }

  return (
    <>
      <section className="search">
        <form className="search__form" onSubmit={onSubmit}>
          <input {...useInputsearch.input}
            className="search__input" type="text" placeholder="Фильм" name="search" required />
          <button className="search__submit button-hover" type="submit" >Найти</button>
        </form>
        <div className='search__check-box'>
          <FilterCheckbox
            searchState={searchState}
            setSearchState={setSearchState}
          />
        </div>
      </section>
      <div className='search__decor' />
    </>
  )
}

export default SearchForm;