import { REACT_APP_MAIN_URL_BACKEND } from './constants';

//  проверка ответа
const checkResponse = (res) => {
  return res.ok
    ? res.json()
    // : Promise.reject(`Ошибка: ${res.status}`);
    : Promise.reject(res.json());
}

export const register = ({ name, email, password }) => {
  return fetch(`${REACT_APP_MAIN_URL_BACKEND}/signup`, {
    // credentials: "include",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  }).then(checkResponse);
}

export const authorize = ({ email, password }) => {
  return fetch(`${REACT_APP_MAIN_URL_BACKEND}/signin`, {
    credentials: "include",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  }).then(checkResponse);
}

export const setUserInfo = ({ name, email }) => { //3. Редактирование профиля
  return fetch(`${REACT_APP_MAIN_URL_BACKEND}/users/me`,
    {
      credentials: "include",
      method: 'PATCH',
      headers: {
        // 'Authorization': `Bearer ${this._token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    }).then(checkResponse);
}

export const logout = (email) => {
  return fetch(`${REACT_APP_MAIN_URL_BACKEND}/signout`,
    {
      credentials: "include",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    }).then(checkResponse);
}

export const getUserInfo = () => {
  return fetch(`${REACT_APP_MAIN_URL_BACKEND}/users/me`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(checkResponse);
}

export const saveMovie = (movie) => {
  return fetch(`${REACT_APP_MAIN_URL_BACKEND}/movies`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  }).then(checkResponse);
}

export const removeMovie = (_id) => {
  return fetch(`${REACT_APP_MAIN_URL_BACKEND}/movies/${_id}`, {
    credentials: 'include',
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(checkResponse);
}

export const getSavedMovies = () => {
  return fetch(`${REACT_APP_MAIN_URL_BACKEND}/movies`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(checkResponse);
}

