import React from "react";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import './SearchForm.css';

function SearchForm() {
  const [valueSearch, setValueSearch] = React.useState('');

  function handleChange(e) {
    setValueSearch(e.target.value);
  }

  return (
    <>
      <section className="search">
        <form className="search__form">
          <input className="search__input" type="text" placeholder="Фильм" name="search"
            onChange={handleChange} value={valueSearch} required />
          <button className="search__submit button-hover" type="submit" />
        </form>

        <FilterCheckbox />      
      </section>
    </>
  )
}

export default SearchForm;