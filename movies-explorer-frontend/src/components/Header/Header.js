import React from 'react';
import { Link, Route, Switch, NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';

import './Header.css';
import './HamburgerMenu.css';

import iconAccount from '../../images/header_icon.svg';


function Header() {
  const [hamburgerOpened, setHamburgerOpened] = React.useState(false);

  function handleHambergerMenu() {
    setHamburgerOpened(!hamburgerOpened);
  }

  return (
    <Switch>
      <Route exact path='/'>
        <header className='header header_page_main'>
          <div className='header__logo'>
            <Logo />
          </div>
          <Link className='header__link header__link_page_main' to='/signin'>Регистрация</Link>
          <Link className='header__link header__link_page_main' to='/signup'>
            <button className='header__button-landing' type="button" aria-label="Войти">Войти</button>
          </Link>
        </header>
      </Route>

      <Route exact path={['/movies', '/saved-movies', '/profile']}>
        <header className='header'>
          <div className='header__logo'>
            <Logo />
          </div>

          {/* гамбургер меню - окно */}
          {hamburgerOpened &&
            (<div className='header__hamburger-popup' >
              <input id="header__hamburger-menu" className="header__hamburger-menu " type="checkBox" />
              <label htmlFor='header__hamburger-menu' className="header__hamburger-icon
                header__hamburger-icon_opened" onClick={handleHambergerMenu} />

              <div className='header__container-hamburger'>
                <NavLink className='header__link-hamburger' activeClassName='header__link-hamburger_active' exact='true'
                  to='/'>Главная</NavLink>
                <NavLink className='header__link-hamburger' activeClassName='header__link-hamburger_active'
                  to='/movies'>Фильмы</NavLink>
                <NavLink className='header__link-hamburger' activeClassName='header__link-hamburger_active'
                  to='/saved-movies'>Сохранённые фильмы</NavLink>

                <Link className='header__button header__button_hamburger' to='/profile'>
                  Аккаунт
                  <img alt='Иконка' src={iconAccount} />
                </Link>
              </div>
            </div>)
          }

          {/* Значок гамбургер меню */}
          <input id="header__hamburger-menu" className="header__hamburger-menu" type="checkBox" />
          <label htmlFor='header__hamburger-menu' className="header__hamburger-icon" onClick={handleHambergerMenu} />

          <div className='header__container'>
            <NavLink className='header__link' activeClassName='header__link_active' to='/movies'>Фильмы</NavLink>
            <NavLink className='header__link' activeClassName='header__link_active' to='/saved-movies'>Сохранённые фильмы</NavLink>
            <Link className='header__button' to='/profile'>
              Аккаунт
              <img className='' alt='Иконка' src={iconAccount} />
            </Link>
          </div>
        </header>
      </Route>
    </Switch>
  );
}

export default Header; 