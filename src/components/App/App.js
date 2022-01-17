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

import getErrorMessageRus from '../../utils/getErrorMessageRus';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [moviesSearched, setMoviesSearched] = React.useState(JSON.parse(localStorage.getItem('movies-searched')) || []);
  const [moviesShirtList, setMoviesShirtList] = React.useState(JSON.parse(localStorage.getItem('movies-searched-shirt')) || []);
  const [movieToDisplayMain, setMovieToDisplayMain] = React.useState(moviesSearched || []);
  const [isShirtChoosen, setIsShirtChoosen] = React.useState(false);
  const [isPreloader, setIsPreloader] = React.useState(false);
  const [infoPopup, setInfoPopup] = React.useState({ isOpen: false, text: 'Тут что-то не так' });
  const history = useHistory();

  function handleSearchMovies(e) {//получение списка с BeatfilmMoviesApi и поиск фильмов по ключевым словам
    e.preventDefault();           // в moviesSearched
    setIsPreloader(true);
    const searchText = e.target[0].value;
    moviesApi
      .getMoviesList()
      .then(allMoviesList => {
        const searchedMoviesList = allMoviesList.filter(movie => { //отфильтрованный список по поисковому текту
          const allText = (movie['nameRU'] + movie['nameEN'] + movie['director'] + movie['country']
            + movie['year'] + movie['description']).toLowerCase();
          return allText.includes(searchText.toLowerCase());
        });
        setMoviesSearched(searchedMoviesList);
        const searchShirtMovies = searchedMoviesList.filter(movie => movie.duration <= 40);
        setMoviesShirtList(searchShirtMovies);
        localStorage.setItem('movies-searched-shirt', JSON.stringify(searchShirtMovies))
        localStorage.setItem('movies-searched', JSON.stringify(searchedMoviesList));
        if (searchedMoviesList.length === 0) setInfoPopup({ isOpen: true, text: 'Ничего не найдено.' })
      })
      .catch(err => {
        setInfoPopup({ isOpen: true, text: '«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз».' });
        console.log(err);
      })
      .finally(_ => {
        setIsPreloader(false);
      });
  }

  React.useEffect(() => { //реакция на выбор короткометражек
    if (isShirtChoosen) setMovieToDisplayMain(moviesShirtList);
    if (!isShirtChoosen) setMovieToDisplayMain(moviesSearched);
  }, [isShirtChoosen, moviesShirtList, moviesSearched])


  // React.useEffect(() => {
  //   handleCheckToken();
  //   Promise.all([api.getInitialCards(), api.getUserInfo()])
  //     .then(([cardsData, userData]) => {
  //       setCards(cardsData);
  //       setCurrentUser(userData);
  //     }).catch(err => console.error(err));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // Авторизация
  function handleRegister({ name, email, password }) {
    mainApi.register({ name, email, password })
      .then(res => {console.log(res.headers)
        handleLogin({ email, password });
      })
      .catch(error => {
        error
          .then(err => {
            const message = getErrorMessageRus(err, 'message'); // Искать русское сообщение или первое любое
            setInfoPopup({ isOpen: true, text: message });       //Если нет -> "Произошла ошибка, попробуйте позже."
          })
      })
      .catch(_ => {        
        setInfoPopup({ isOpen: true, text: 'Что то пошло не так!' });
      });;
  }

  function handleLogin({ email, password }) {
    mainApi.authorize({ email, password })
      .then(res => {
        console.log(res.headers)
        // const { token } = res;
        // localStorage.setItem('token', token);
        setLoggedIn(true);
        setCurrentUser(res.user);
        history.push('/movies');
      })
      .catch(error => {
        error
          .then(err => {
            const message = getErrorMessageRus(err, 'message'); // Искать русское сообщение или первое любое
            setInfoPopup({ isOpen: true, text: message });       //Если нет -> "Произошла ошибка, попробуйте позже."
          })
      })
      .catch(_ => {
        setInfoPopup({ isOpen: true, text: 'Что то пошло не так!' });
      });;
  }

  // function handleCheckToken() {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     auth.checkToken(token)
  //       .then(res => {
  //         const { _id, email } = res;
  //         setUserData({ _id, email });
  //         setLoggedIn(true);
  //         history.push('/');
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  //   } else {
  //     setLoggedIn(false);
  //   }
  // }

  // function handleLogOut() {
  //   setLoggedIn(false);
  //   localStorage.removeItem('token');
  //   history.push('/signin');
  //   setUserData({ _id: '', email: '' });
  // }
  // // если токен есть - при загрузке блокируется кратковременное появление окна регистрации
  // if (loggedIn === null) {
  //   return (
  //     <Header userData={userData} handleLogOut={handleLogOut} />
  //   )
  // }




  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AppStatesContext.Provider value={{ movieToDisplayMain, isPreloader, isShirtChoosen, setIsShirtChoosen, loggedIn }}>
        <div className='page' >
          <Header />
          <Switch>
            <ProtectedRoute path='/movies'
              component={Movies}
              handleSearchMovies={handleSearchMovies}
              loggedIn={loggedIn}
            >
            </ProtectedRoute>

            <ProtectedRoute path='/saved-movies'
              component={SavedMovies}
              loggedIn={loggedIn}
            >
            </ProtectedRoute>

            <ProtectedRoute path='/profile'
              component={Profile}
              loggedIn={loggedIn}
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
