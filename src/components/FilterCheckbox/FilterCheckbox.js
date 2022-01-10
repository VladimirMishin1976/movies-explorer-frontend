import React from "react";

import './FilterCheckbox.css';

function FilterCheckbox() {
  const [isChecked, setChecked] = React.useState(false);

  function onChange(event) {
    setChecked(event.target.checked);
  }

  return (
    <label htmlFor="filter-checkbox" className="filter-checkbox" >
      <input id="filter-checkbox" className="filter-checkbox__checkbox" type="checkbox" onClick={onChange} />
      <div className={`filter-checkbox__checkbox-decorate button-hover ${isChecked && 'filter-checkbox__checkbox-decorate_checked'}`}>
        <div className={`filter-checkbox__checkbox-switch ${isChecked && 'filter-checkbox__checkbox-switch_checked'}`} />
      </div>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;