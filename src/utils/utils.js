//Получение отфильтрованного списка фильмов по ключевым словам
export function filterMoviesByWords(moviesList, searchText) {
  return moviesList.filter(movie => {
    const allText = (movie['nameRU'] + movie['nameEN'] + movie['director'] + movie['country']
      + movie['year'] + movie['description']).toLowerCase();
    return allText.includes(searchText.toLowerCase());
  });
}

// получение из объекта все значения по заданному ключу и если есть - вернуть на русском последнее
// если нет на русском - вернуть первое,  на любом языке
//  если нет - вернуть стандартрое
const standartMessage = "Произошла ошибка, попробуйте позже.";

function findAllByKey(obj, keyToFind) { //найти все значения в объекте по ключу 
  return Object.entries(obj)
    .reduce((acc, [key, value]) => (key === keyToFind)
      ? acc.concat(value)
      : (typeof value === 'object')
        ? acc.concat(findAllByKey(value, keyToFind))
        : acc
      , [])
}

export function getErrorMessageRus(obj, keyToFind) {

  const allErrorMessages = findAllByKey(obj, keyToFind);
  if (!allErrorMessages.length) return standartMessage;
  const errorMessageRus = allErrorMessages.reduce((res, message) => {
    return (/[а-я]/gi).test(message) ? message : res;
  });
  return errorMessageRus;
}



