import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import InputSignUp from '../InputSignUp/InputSignUp';
import ButtonAccept from '../ButtonAccept/ButtonAccept';

import useInput from '../../hooks/useInput';

import './Register.css';

function Register() {
  // const [email, setEmail] = React.useState('pochta@yandex.ru');
  // const [password, setPassword] = React.useState('');
  // const [name, setName] = React.useState('Виталий');

  // function handleChanheEmail(e) {
  //   setEmail(e.target.value)
  // };

  // function handleChanhePassword(e) {
  //   setPassword(e.target.value)
  // };

  // function handleChanheName(e) {
  //   setName(e.target.value)
  // };

  const useInputEmail = useInput('pochta@yandex.ru');
  const useInputPassword = useInput('');
  const useInputName = useInput('Виталий');

  return (
    <section className='register' >
      <Logo></Logo>
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='register__form'>
        <InputSignUp {...useInputName}
          title='Имя'
          type='text'
          // value={name}
          minLength='2'
          maxLength='40'
          // handleChange={handleChanheName}
          textError=''
          decorated={false} />

        <InputSignUp {...useInputEmail}
          title='E-mail'
          type='email'
          // value={email}
          minLength='2'
          maxLength='40'
          // handleChange={handleChanheEmail}
          textError=''
          decorated={true} />

        <InputSignUp {...useInputPassword}
          title='Пароль'
          type='password'
          // value={password}
          minLength='6'
          maxLength='40'
          // handleChange={handleChanhePassword}
          textError='Что-то пошло не так...'
          decorated={false} />
      </form>
      <ButtonAccept text='Зарегистрироваться' />
      <p className='register__caption'>Уже зарегистрированы?
        <Link className='register__link' to='/signin'>Войти</Link>
      </p>
    </section >
  );
}

export default Register;