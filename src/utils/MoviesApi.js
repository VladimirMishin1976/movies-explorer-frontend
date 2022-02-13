import { BEATFILMS_URL_BACKEND_MOVIES } from "./constants";

const checkResponse = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(`Ошибка: ${res.status}`);
}


export const getMoviesList = () => {
  return fetch(`${BEATFILMS_URL_BACKEND_MOVIES}`)
  .then(checkResponse);
};

