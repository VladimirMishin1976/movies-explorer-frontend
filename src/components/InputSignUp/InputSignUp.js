import React from 'react';
import './InputSignUp.css';

function InputSignUp({ title, type, value, minLength, maxLength, handleChange, textError, decorated }) {
  return (
    <label className='input-signup'>{title}
      <input className={`input-signup__input ${decorated && 'input-signup__input_decorated'}`}
        type={type}
        value={value}
        onChange={handleChange}
        minLength={minLength}
        maxLength={maxLength}
        required />

      <span className='input-signup__error'>{textError}</span>
    </label>
  );
}

export default InputSignUp;