const tmdbKey = 'e9df6a5b20a8973a5adb2d8e3064e3a4';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = () => {
   const genreRequestEndpoint = 'genre/movie/list';
   const requestParams = `?api_key=${tmdbKey}`;
   const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
};

const getMovies = () => {
  const selectedGenre = getSelectedGenre();

};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;