const movieSearch = require('./movie-search.js');
const titles = require('./titles.json');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const express = require('express');
const http = require('http');
const rp = require('request-promise');

// Middleware
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Routes
app.get('/', function(request, response) {
  response.send("Correct resource path is api/imdb/search/. Your query goes at the end.")
});

app.get('/api/imdb/search/:query', function(request, response) {
  movieSearch.movieSearch(request.params.query)
    .then(function(searchResults) {
      console.log(searchResults);
      response.json(searchResults);
    })
    .catch(function(error) {
      response.status(500)
      response.send(error.message)
    });
});

// Server
const port = process.env.PORT || 4000;
app.listen(port, function() {
  console.log(`Listening on http://localhost:${port}...`);
});
