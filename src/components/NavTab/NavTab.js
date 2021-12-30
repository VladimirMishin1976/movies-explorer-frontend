import React from "react";

import './NavTab.css';

function NavTab() {

  return (
    <section className='navtab'>
      <a className='navtab__link' href='#about project'>О проекте</a>
      <a className='navtab__link' href='#technologies'>Технологии</a>
      <a className='navtab__link' href='#about me'>Студент</a>
    </section>
  );
}

export default NavTab;