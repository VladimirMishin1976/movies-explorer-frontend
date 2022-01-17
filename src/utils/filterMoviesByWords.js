const filterMoviesByWords = (moviesList, searchText) => {
  moviesList.filter(movie => { //отфильтрованный список по поисковому текту
    const allText = (movie['nameRU'] + movie['nameEN'] + movie['director'] + movie['country']
      + movie['year'] + movie['description']).toLowerCase();
    return allText.includes(searchText.toLowerCase());
  });
}

export default filterMoviesByWords;