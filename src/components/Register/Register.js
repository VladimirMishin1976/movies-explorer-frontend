import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

import './Register.css';
import './InputSignUp.css';

function Register({ handleRegister }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values);
    resetForm();
  }

  return (
    <section className='register' >
      <Logo></Logo>
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='register__form' onSubmit={handleSubmit} noValidate name='signup_form'>
        <label className='input-signup'>Имя
          <input className='input-signup__input'
            name='name'
            type='text'
            value={values.name || ''}
            minLength='2'
            maxLength='30'
            required
            onChange={handleChange} />
          <span className='input-signup__error'>{errors.name}</span>
        </label>

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

        <button className={`button button_place_register ${isValid ? 'button-hover' : 'button_disabled'}`}
          disabled={!isValid}>Зарегистрироваться</button>
      </form>
      <p className='register__caption'>Уже зарегистрированы?
        <Link className='register__link' to='/signin'>Войти</Link>
      </p>
    </section >
  );
}

export default Register;  