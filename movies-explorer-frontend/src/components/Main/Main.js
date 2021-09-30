// import React from 'react';

import Header from '../Header/Header';
// import Navigation from '../Navigation/Navigation';
// import Footer from '../Footer/Footer';

import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
// import Techs from '../Techs/Techs';
// import AboutMe from '../AboutMe/AboutMe';
// import Portfolio from '../Portfolio/Portfolio';

import './Main.css';

function Main() {

  return (
    <main className='page'>
      <Header></Header>

      <Promo></Promo>
      <NavTab></NavTab>
      <AboutProject></AboutProject>
      {/* <Techs></Techs> */}
      {/* <AboutMe></AboutMe> */}
      {/* <Portfolio></Portfolio> */}

    </main>
  );
}

export default Main;