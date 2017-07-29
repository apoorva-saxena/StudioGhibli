const request = require('request')

function getFilms() {
    request('https://ghibliapi.herokuapp.com/films', function(error, response, body) {
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
}


getFilms();