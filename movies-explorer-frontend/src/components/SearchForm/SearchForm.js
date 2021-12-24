import React from "react";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import './SearchForm.css';

function SearchForm() {
  const [valueSearch, setValueSearch] = React.useState('');

  function handleChangeValueSearch(e) {
    setValueSearch(e.target.value);
  }

  return (
    <>
      <section className="search">
        <form className="search__form">
          <input className="search__input" type="text" placeholder="Фильм" name="search"
            onChange={handleChangeValueSearch} value={valueSearch} required />
          <button className="search__submit" type="submit" />
        </form>

        <FilterCheckbox />      
      </section>
    </>
  )
}

export default SearchForm;