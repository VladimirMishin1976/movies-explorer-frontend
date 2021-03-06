import React from "react";

import './FilterCheckbox.css';

function FilterCheckbox({ searchState, setSearchState }) {

  function onChange() {
    setSearchState({ ...searchState, isShirt: !searchState.isShirt });
  }

  return (
    <label htmlFor="filter-checkbox" className="filter-checkbox" >
      <input id="filter-checkbox" className="filter-checkbox__checkbox" type="checkbox" onClick={onChange} />
      <div className={`filter-checkbox__checkbox-decorate button-hover ${searchState.isShirt && 'filter-checkbox__checkbox-decorate_checked'}`}>
        <div className={`filter-checkbox__checkbox-switch ${searchState.isShirt && 'filter-checkbox__checkbox-switch_checked'}`} />
      </div>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;