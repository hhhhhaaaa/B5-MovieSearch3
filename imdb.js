const movieSearch = require('./movie-search.js');
const rp = require('request-promise');

function imdb() {
  movieSearch.movieSearch(process.argv[2]);
}

imdb();
