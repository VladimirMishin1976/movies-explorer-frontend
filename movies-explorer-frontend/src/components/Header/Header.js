import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoMain from '../../images/logo_main.svg';

function Header() {

  return (
    <header className='header header_page_main'>
      <Link className='logo' to='/'>
        <img className='header__logo' src={logoMain} alt='Логотип' />
      </Link>
      <Link className='header__link' to='signin'>Регистрация</Link>
      <Link className='header__link' to='/signup'>
        <button className='header__button' type="button" aria-label="Войти">Войти</button>
      </Link>
    </header>
  );
}

export default Header;