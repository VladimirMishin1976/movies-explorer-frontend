import React from "react";

import './Profile.css';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile() {
  // const [name, setName] = React.useState('Виталий');
  // const [email, setEmail] = React.useState('pochta@yandex.ru');

  // function handleChangeName(e) {
  //   setName(e.target.value);
  // }

  // function handleChangeEmail(e) {
  //   setEmail(e.target.value);
  // }

   return (
    <main className='profile' >
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <form className='profile__form'>
        <label className='profile__label'>Имя
          <input className='profile__input' type='text'  placeholder='Имя' //{...useInputName}
            minLength='2' maxLength='40' required />
        </label>
        <label className='profile__label'>E-mail
          <input className='profile__input' type='email' placeholder='Почта'  required // {...useInputEmail} 
          />
        </label>
      </form>

      {/* <span className='profile__error'>При обновлении профиля произошла ошибка.</span> */}
      <button className='profile__button button-hover' >Редактировать</button>
      <button className='profile__button profile__button_logout button-hover' >Выйти из аккаунта</button>
    </main>
  );
}

export default Profile;