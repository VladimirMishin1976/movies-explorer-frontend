import React from "react";

// import ButtonAccept from "../ButtonAccept/ButtonAccept";

import useInput from '../../hooks/useInput';

import './Profile.css';

function Profile() {
  // const [name, setName] = React.useState('Виталий');
  // const [email, setEmail] = React.useState('pochta@yandex.ru');

  // function handleChangeName(e) {
  //   setName(e.target.value);
  // }

  // function handleChangeEmail(e) {
  //   setEmail(e.target.value);
  // }

  const useInputEmail = useInput('pochta@yandex.ru');
  const useInputName = useInput('');

   return (
    <main className='profile' >
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <form className='profile__form'>
        <label className='profile__label'>Имя
          <input className='profile__input' type='text'  placeholder='Имя' {...useInputName}
            minLength='2' maxLength='40' required />
        </label>
        <label className='profile__label'>E-mail
          <input className='profile__input' type='email' placeholder='Почта'  required  {...useInputEmail} />
        </label>
      </form>

      {/* <span className='profile__error'>При обновлении профиля произошла ошибка.</span> */}
      <button className='profile__button button-hover' >Редактировать</button>
      <button className='profile__button profile__button_logout button-hover' >Выйти из аккаунта</button>
      {/* <ButtonAccept text='Сохранить' /> */}
    </main>
  );
}

export default Profile;