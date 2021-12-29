import './InputSignUp.css';

function InputSignUp({ title, type, value, minLength, maxLength, handleChange, textError }) {
  return (
    <label className='input-signup'>{title}
      <input className='input-signup__input'
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