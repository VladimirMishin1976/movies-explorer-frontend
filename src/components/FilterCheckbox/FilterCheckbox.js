import React from "react";

import './FilterCheckbox.css';
import { AppStatesContext } from "../../contexts/AppStatesContext";

function FilterCheckbox() {
  // const [isChecked, setChecked] = React.useState(false);

  const isChecked = React.useContext(AppStatesContext).isShirtChoosen;
  const setIsChecked = React.useContext(AppStatesContext).setIsShirtChoosen;

  function onChange(event) {
    setIsChecked(event.target.checked);
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