import React from "react";

import './Profile.css';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ handleUserUpdate, onLogout }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, setValues, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const [isSubmitActive, setIsSubmitActive] = React.useState(false);

  React.useEffect(() => {
    setValues({ ...currentUser });
  }, [])

  React.useEffect(() => { // Блокирование сабмита при невалидных данных и отсутсвии изменения в полях
    if ((values.name !== currentUser.name || values.email !== currentUser.email) && isValid) {
      setIsSubmitActive(true);
    } else setIsSubmitActive(false);
  }, [handleChange])

  function handleSubmit(e) {
    e.preventDefault();
    handleUserUpdate(values);
    resetForm();
  }

  return (
    <main className='profile' >
      <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
      <form className='profile__form' onSubmit={handleSubmit} noValidate>
        <label className='profile__label'>Имя
          <input className='profile__input' placeholder='Имя'
            name='name'
            type='text'
            value={values.name || ''}
            minLength='2'
            maxLength='30'
            required
            onChange={handleChange} />
        </label>
        <span className='profile__error'>{errors.name}</span>
        <label className='profile__label'>E-mail
          <input className='profile__input' placeholder='Почта'
            name='email'
            type='email'
            value={values.email || ''}
            required
            onChange={handleChange} />
        </label>
        <span className='profile__error'>{errors.email}</span>
        <button className={`profile__button ${isSubmitActive ? 'button-hover' : 'profile__button_disabled'}`}
          type="submit" onSubmit={handleSubmit} disabled={!isSubmitActive} >Редактировать</button>
        <button className='profile__button profile__button_logout button-hover' type="button" onClick={onLogout}>Выйти из аккаунта</button>
      </form>

      {/* <span className='profile__error'>При обновлении профиля произошла ошибка.</span> */}

    </main>
  );
}

export default Profile;