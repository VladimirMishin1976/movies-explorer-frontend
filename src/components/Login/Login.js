import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import InputSignUp from '../InputSignUp/InputSignUp';
import ButtonAccept from '../ButtonAccept/ButtonAccept';

import './Login.css';

function Login() {
  const [email, setEmail] = React.useState('pochta@yandex.ru')
  const [password, setPassword] = React.useState('')

  function handleChanheEmail(e) {
    setEmail(e.target.value)
  };

  function handleChanhePassword(e) {
    setPassword(e.target.value)
  };

  return (
    <section className='login' >
      <Logo></Logo>
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form'>
        <InputSignUp
          title='E-mail'
          type='email'
          value={email}
          minLength='2'
          maxLength='40'
          handleChange={handleChanheEmail}
          textError='' />

        <InputSignUp
          title='Пароль'
          type='password'
          value={password}
          minLength='6'
          maxLength='40'
          handleChange={handleChanhePassword}
          textError='Что-то пошло не так...' />
      </form>
      <ButtonAccept text='Войти' />
      <p className='login__caption'>Ещё не зарегистрированы?
        <Link className='login__link' to='/signup'>Регистрация</Link>
      </p>
    </section >
  );
}

export default Login;