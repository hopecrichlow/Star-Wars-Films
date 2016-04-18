import $ from 'jquery';

var baseURL = 'http://swapi.co/api/';
var list = $('.list');

// Movie Template
function movieTemplate (title, date) {
  return `<li>${title} - ${date}</li>`;
}

// Get a list of Star Wars Films
var filmReq = $.getJSON(baseURL + 'films');
// When the request loads - run the callbacks
filmReq.then(
  function (res) {
    // console.log('SUCCESS', res.results);
    res.results.forEach(function (film) {
      var html = movieTemplate(film.title, film.release_date);
      list.append(html);
    });
  },
  function (error) {
    console.log('ERROR', error);
  }
);
