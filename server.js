'use strict'
const express = require('express')
const server = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const films = require('./scripts/films_service.js')

server.use(bodyParser.urlencoded())
server.use(bodyParser.json());

function log(obj) {
    console.log(require('util').inspect(obj, false, null));
}

server.get('/films', function(req, res) {
	async function getAllFilms () {
		const all_films = await films.getFilms()
		res.send(all_films);
	}

	getAllFilms()
})


server.use(express.static(__dirname + '/app'));

//listen to server
server.listen(8080);
console.log("Server listening to port 8080")

exports = module.exports = server