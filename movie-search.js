const cheerio = require('cheerio');
const fs = require('fs');
const http = require('http');
const rp = require('request-promise');

function movieSearch(searchTerm) {
  console.log("goodbye");
  let options = {
    uri: "http://www.imdb.com/find?ref_=nv_sr_fn&q=" + searchTerm,
    transform: function(body) {
      return cheerio.load(body);
    }
  }
  return rp(options)
    .then(function($) {
      const searchResults = []
      let parent = $('.findSection')[0];
      $('.result_text', parent).each(function() {
        searchResults.push(
          $(this).text()
        );
      });
      console.log("4444", searchResults)
      return searchResults;
    });
}

module.exports = movieSearch;
