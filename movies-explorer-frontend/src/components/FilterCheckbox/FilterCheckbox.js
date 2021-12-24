import React from "react";

import './FilterCheckbox.css';

function FilterCheckbox() {
  const [isChecked, setChecked] = React.useState(false);

  function onChange(event) {
    setChecked(event.target.checked);
  }
  console.log(isChecked)

  return (
    <label htmlFor="filter-checkbox" className="filter-checkbox" >Короткометражки
      <input id="filter-checkbox" className="filter-checkbox__checkbox" type="checkbox" onClick={onChange}/>
      <div className="filter-checkbox__checkbox-decorate">
        <div className={`filter-checkbox__checkbox-switch ${isChecked && 'filter-checkbox__checkbox-switch_checked'}`} />
      </div>
    </label>
  );
}

export default FilterCheckbox;