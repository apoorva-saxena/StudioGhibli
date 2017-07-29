'use strict'
const express = require('express')
const server = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const films = require('./scripts/films_service.js')
const people = require('./scripts/people_service.js')
const locations = require('./scripts/locations_service.js')
const species = require('./scripts/species_service.js')
const vehicles = require('./scripts/vehicles_service.js')


server.use(bodyParser.urlencoded())
server.use(bodyParser.json());

function log(obj) {
    console.log(require('util').inspect(obj, false, null));
}

server.use(express.static(__dirname + '/app'));


server.get('/api/films', function(req, res) {
	async function getAllFilms () {
		const all_films = await films.getFilms()
		res.send(all_films);
	}
	getAllFilms()
})

server.get('/api/people', function(req, res) {
	async function gelAllPeople () {
		const all_people = await people.getPeople()
		res.send(all_people);
	}
	gelAllPeople()
})

server.get('/api/locations', function(req, res) {
	async function getAllLocations () {
		const all_locations = await locations.getLocations()
		res.send(all_locations);
	}
	getAllLocations()
})

server.get('/api/species', function(req, res) {
	async function getAllFilms () {
		const all_films = await films.getFilms()
		res.send(all_films);
	}
	getAllFilms()
})

//listen to server
server.listen(8080);
console.log("Server listening to port 8080")

exports = module.exports = server