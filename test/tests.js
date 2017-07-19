const expect = require('chai').expect;
const chai = require('chai');
const fs = require('fs');
const movieSearch = require('../movie-search-cli.js');
const rp = require('request-promise');
let titles = [];

describe('search', function() {
  it('Should return a set of strings related to Finding Nemo', function(done) {
    movieSearch('findingnemo').then(function(titles) {
      expect(titles[0]).to.eql(' Finding Nemo (2003) ')
      expect(titles).to.eql([' Finding Nemo (2003) ',
        ' Finding Nemo (2003) (Video Game) ',
        ' Finding Neverland (2004) ',
        ' Finding Nemo (2001) (TV Episode) - Project Playtime (2001) (TV Mini-Series)  ',
        ' Finding Nemo (2012) (TV Episode)  - Season 2 | Episode 5  - Disneycember (2011) (TV Series)  ',
        ' Finding Nemo (2013) (TV Episode)  - Season 3 | Episode 12  - A Movie Review (2012) (TV Series)  ',
        ' Finding Nemo (2016) (TV Episode)  - Season 5 | Episode 23  - Honest Trailers (2012) (TV Series)  ',
        ' Finding Nemo (TV Episode)  - Season 1 | Episode 10  - Raft (in development) (TV Series)  '
      ]);
      done();
    });
  });
});
