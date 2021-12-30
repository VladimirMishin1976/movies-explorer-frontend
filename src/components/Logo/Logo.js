import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logoMain from '../../images/logo_landing.svg';
import logoTorus from '../../images/logo-torus.svg';
import logoSmile from '../../images/logo-smile.svg';
import logoS from '../../images/logo-s.svg';

import './Logo.css';

function Logo() {
  let location = useLocation().pathname;
  let width = window.innerWidth;
  const [logo, setLogo] = React.useState(changeLogo());

  React.useEffect(() => {
    setLogo(changeLogo());
  }, [location]);

  // возвращает нужный логотип от ширины экрана и 
  function changeLogo() {
    width = window.innerWidth;
    if ((location === '/movies') && width > 800) return logoTorus;
    if ((location === '/movies') && width <= 800) return logoSmile;

    if (location === '/saved-movies' && width > 800) return logoTorus;
    if (location === '/saved-movies' && width <= 800) return logoSmile;

    if (location === '/profile' && width > 800) return logoTorus;
    if (location === '/profile' && width <= 800 && width > 530) return logoS;

    if (location === '/signin' || location === '/signup') return logoSmile;

    if (location !== '/' && width <= 530) return logoSmile;
    return logoMain;
  }

  window.addEventListener("resize", () => {
    setLogo(changeLogo());
  });

  return (
    <>
      <Link className='logo button-hover' to='/'>
        <img className='header__logo' src={logo} alt='Логотип' />
      </Link>
    </>
  );
}

export default Logo;
