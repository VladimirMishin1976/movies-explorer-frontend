import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

import './Login.css';
import './InputSignUp.css';

function Login({ handleLogin }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values);
    resetForm();
  }


  return (
    <section className='login' >
      <Logo />

      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form' onSubmit={handleSubmit}>
        <label className='input-signup'>E-mail
          <input className='input-signup__input input-signup__input_decorated'
            name='email'
            type='email'
            value={values.email || ''}
            required
            onChange={handleChange} />
          <span className='input-signup__error'>{errors.email}</span>
        </label>

        <label className='input-signup'>Пароль
          <input className='input-signup__input'
            autoComplete='off'
            name='password'
            type='password'
            value={values.password || ''}
            required
            minLength='8'
            onChange={handleChange} />
          <span className='input-signup__error'>{errors.password}</span>
        </label>
        <button className={`button button_place_login button-hover ${!isValid && 'button_disabled'}`}
          disabled={!isValid}>Войти</button>
      </form>
      <p className='login__caption'>Ещё не зарегистрированы?
        <Link className='login__link' to='/signup'>Регистрация</Link>
      </p>
    </section >
  );
}

export default Login;