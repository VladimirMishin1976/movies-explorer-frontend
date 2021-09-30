import React from "react";

import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>

      <div className='about-project__description'>
        <div className='about-project__description-block'>
          <h3 className='about-project__description-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__description-text'>Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.</p>
        </div>

        <div className='about-project__description-block'>
          <h3 className='about-project__description-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__description-text'>У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>

      <div className='about-project__diagram'>
        <p className='about-project__diagram-text about-project__diagram-text_front'>1 неделя</p>
        <p className='about-project__diagram-text about-project__diagram-text_back'>4 недели</p>
        <p className='about-project__diagram-caption'>Back-end</p>
        <p className='about-project__diagram-caption'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;