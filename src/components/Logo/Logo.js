import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../images/logo.svg';


import './Logo.css';

function Logo() {
  return (
    <>
      <Link className=' button-hover' to='/'>
        <img className='' src={logo} alt='Логотип' />
      </Link>
    </>
  );
}

export default Logo;
