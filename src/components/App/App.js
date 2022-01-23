import React from 'react';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InfoPopup from '../InfoPopup/InfoPopup';
import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { AppStatesContext } from '../../contexts/AppStatesContext';

import * as utils from '../../utils/utils';
import { BEATFILMS_URL_BACKEND } from '../../utils/constants';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [moviesSearched, setMoviesSearched] = React.useState(JSON.parse(localStorage.getItem('movies-searched')) || []);
  const [movieToDisplayMain, setMovieToDisplayMain] = React.useState(moviesSearched || []);
  const [moviesSaved, setMoviesSaved] = React.useState([]); // сохраненные/лайкнутые видео
  const [moviesToDisplaySaved, setMoviesToDisplaySaved] = React.useState([]);
  const [isShirtChoosen, setIsShirtChoosen] = React.useState(false);
  const [isPreloader, setIsPreloader] = React.useState(false);
  const [infoPopup, setInfoPopup] = React.useState({ isOpen: false, text: 'Тут что-то не так' });
  const history = useHistory();
  const locationStart = window.location.pathname;

  React.useEffect(() => {
    Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
      .then(([userData, savedMovies]) => {
        setCurrentUser(userData);
        history.push(locationStart);
        setMoviesSaved(savedMovies);
        setLoggedIn(true);
      }).catch(err => {
        setLoggedIn(false)
        console.error(err);
      });
  }, [loggedIn]);

  React.useEffect(() => { //реакция на выбор короткометражек
    if (isShirtChoosen) setMovieToDisplayMain(moviesSearched.filter(movie => movie.duration <= 40));
    if (!isShirtChoosen) setMovieToDisplayMain(moviesSearched);
  }, [isShirtChoosen, moviesSearched]);

  React.useEffect(() => { //реакция на выбор короткометражек
    if (isShirtChoosen) setMoviesToDisplaySaved(moviesSaved.filter(movie => movie.duration <= 40));
    if (!isShirtChoosen) setMoviesToDisplaySaved(moviesSaved);
  }, [isShirtChoosen, moviesSaved]);


  function handleSearchMovies(searchText) {//получение списка с BeatfilmMoviesApi и поиск фильмов по ключевым словам
    setIsPreloader(true);          // в moviesSearched
    moviesApi
      .getMoviesList()
      .then(allMoviesList => {
        // Создать отфильтрованный список и изменить объект на требуемый MainApi
        const searchedMoviesList = utils.filterMoviesByWords(allMoviesList, searchText)
          .map(movie => {
            const mov = {
              description: movie.description,
              movieId: movie.id,
              thumbnail: BEATFILMS_URL_BACKEND + movie.image.formats.thumbnail.url,
              image: BEATFILMS_URL_BACKEND + movie.image.url,
              trailer: movie.trailerLink || 'https://www.youtube.com/watch?v=Hc1AYD6rl1k&ab_channel=MarijaVie',
              nameEN: movie.nameEN || 'Отсутствует',
              nameRU: movie.nameRU || 'Отсутствует',
              country: movie.country || 'Не указано',
              director: movie.director,
              duration: movie.duration,
              year: movie.year,
            };
            return mov;
          });
        setMoviesSearched(searchedMoviesList);
        localStorage.setItem('movies-searched', JSON.stringify(searchedMoviesList));
        if (searchedMoviesList.length === 0) {
          localStorage.setItem('movies-searched', JSON.stringify([]));
          setInfoPopup({ isOpen: true, text: 'Ничего не найдено.' });
        };
      })
      .catch(err => {
        setInfoPopup({ isOpen: true, text: '«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз».' });
        console.log(err);
      })
      .finally(_ => {
        setIsPreloader(false);
      });
  }

  function handleSearchSavedMovies(searchText) {
    const searchedMoviesList = utils.filterMoviesByWords(moviesSaved, searchText);
    setMoviesToDisplaySaved(searchedMoviesList);
    if (!searchedMoviesList.length) setInfoPopup({ isOpen: true, text: 'Ничего не найдено.' });
  }

  // Авторизация
  function handleRegister({ name, email, password }) {
    mainApi.register({ name, email, password })
      .then(res => {
        handleLogin({ email, password });
      })
      .catch(handleErrors);
  }

  function handleLogin({ email, password }) {
    mainApi.authorize({ email, password })
      .then(res => {
        setLoggedIn(true);
        setCurrentUser(res.user);
        history.push('/movies');
      })
      .catch(handleErrors);
  }

  function handleUserUpdate({ name, email }) {
    mainApi.setUserInfo({ name, email })
      .then(res => {
        setCurrentUser(res);
      })
      .catch(handleErrors);
  }

  function handleLogOut() {
    mainApi.logout(currentUser.email)
      .then(res => {
        setCurrentUser({});
        setLoggedIn(false);
        setMoviesSearched([]);
        setMoviesSaved([]);
        localStorage.clear();
      })
      .catch(handleErrors);
  }

  function handleErrors(error) {
    console.log(error);
    if (!error.then) return setInfoPopup({ isOpen: true, text: 'Что то пошло не так! Возможно сервер перегружен. Попробуйте позже.' });
    error
      .then(err => {
        const message = utils.getErrorMessageRus(err, 'message'); // Искать русское сообщение или первое любое
        setInfoPopup({ isOpen: true, text: message });       //Если нет -> "Произошла ошибка, попробуйте позже."
      }).catch(_ => {
        setInfoPopup({ isOpen: true, text: 'Что то пошло не так!' });
      });
  }

  function handleLike(movie) { //сохранение видео 
    mainApi.saveMovie(movie)
      .then(movie => {
        setMoviesSaved([...moviesSaved, movie]);
      })
      .catch(handleErrors);
  };

  function handleDislike(movie) {
    const targetMovie = moviesSaved.find(mov => mov.movieId === movie.movieId)
    mainApi.removeMovie(targetMovie._id)
      .then(res => {
        setMoviesSaved(moviesSaved.filter(mov => mov.movieId !== movie.movieId));
      })
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AppStatesContext.Provider value={{
        isPreloader,
        isShirtChoosen,
        setIsShirtChoosen,
        loggedIn,
        moviesSaved,
        handleLike,
        handleDislike,
      }}>
        <div className='page' >
          <Header />
          <Switch>
            <ProtectedRoute path='/movies'
              component={Movies}
              movieList={movieToDisplayMain}
              handleSearchMovies={handleSearchMovies}
              loggedIn={loggedIn}
            >
            </ProtectedRoute>

            <ProtectedRoute path='/saved-movies'
              component={SavedMovies}
              movieList={moviesToDisplaySaved}
              handleSearchMovies={handleSearchSavedMovies}
              loggedIn={loggedIn}
            >
            </ProtectedRoute>

            <ProtectedRoute path='/profile'
              component={Profile}
              loggedIn={loggedIn}
              handleUserUpdate={handleUserUpdate}
              onLogout={handleLogOut}
            >
            </ProtectedRoute>

            <ProtectedRoute path='/signin'
              component={Login}
              loggedIn={!loggedIn}
              handleLogin={handleLogin}
            >

            </ProtectedRoute>

            <ProtectedRoute path='/signup'
              component={Register}
              loggedIn={!loggedIn}
              handleRegister={handleRegister}
            >
            </ProtectedRoute>

            <Route exact path='/'>
              <Main />
            </Route>

            <Route path='/'>
              <Error />
            </Route>
          </Switch>
          <Route exact path={['/', '/movies', '/saved-movies']}>
            <Footer />
          </Route>
        </div>
        {infoPopup.isOpen && <InfoPopup
          text={infoPopup.text}
          setInfoPopup={setInfoPopup} />}
      </AppStatesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
