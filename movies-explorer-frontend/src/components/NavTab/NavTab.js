import React from "react";
import { Link } from "react-router-dom";
import './NavTab.css';

function NavTab() {

  return (
    <section className='navtab'>
      <a className='navtab__link' href='#about project'>О проекте</a>
      <a className='navtab__link' href='#technologies'>Технологии</a>
      <a className='navtab__link' href='#student'>Студент</a>
    </section>
  );
}

export default NavTab;