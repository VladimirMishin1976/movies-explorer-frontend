import React from "react";

import ButtonAccept from "../ButtonAccept/ButtonAccept";

import './Profile.css';

function Profile() {
  const [name, setName] = React.useState('Виталий');
  const [email, setEmail] = React.useState('pochta@yandex.ru');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

   return (
    <main className='profile' >
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <form className='profile__form'>
        <label className='profile__label'>Имя
          <input className='profile__input' type='text' value={name} placeholder='Имя' onChange={handleChangeName}
            minLength='2' maxLength='40' required />
        </label>
        <label className='profile__label'>Почта
          <input className='profile__input' type='email' value={email} placeholder='Почта' onChange={handleChangeEmail} required />
        </label>
      </form>

      <span className='profile__error'>При обновлении профиля произошла ошибка.</span>
      <button className='profile__button button-hover' >Редактировать</button>
      <button className='profile__button profile__button_logout button-hover' >Выйти из аккаунта</button>
      <ButtonAccept text='Сохранить' />
    </main>
  );
}

export default Profile;