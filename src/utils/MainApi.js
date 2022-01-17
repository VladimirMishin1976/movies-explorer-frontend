import { MAIN_URL_BACKEND } from './constants';
//  проверка ответа
const checkResponse = (res) => {
  return res.ok
    ? res.json()
    // : Promise.reject(`Ошибка: ${res.status}`);
    : Promise.reject(res.json());
}

export const register = ({ name, email, password }) => {
  return fetch(`${MAIN_URL_BACKEND}/signup`, {
    credentials: "include",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  }).then(checkResponse);
}

export const authorize = ({ email, password }) => {
  return fetch(`${MAIN_URL_BACKEND}/signin`, {
    credentials: "include",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  }).then(checkResponse);
}

export const checkToken = () => {
  return fetch(`${MAIN_URL_BACKEND}/users/me`, {
    credentials: "include",
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    }
  }).then(checkResponse);
}