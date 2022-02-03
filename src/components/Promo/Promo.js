import React from 'react';
import './Promo.css';

function Promo() {

  return (
    <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
      <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <a className='promo__link' href='#about project'>Узнать больше</a>
    </section>
  );
}

export default Promo;