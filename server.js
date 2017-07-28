'use strict'
const express = require('express')
const server = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

server.use(bodyParser.urlencoded())
server.use(bodyParser.json());

function log(obj) {
    console.log(require('util').inspect(obj, false, null));
}

server.use(express.static(__dirname + '/app'));

//listen to server
server.listen(8080);
console.log("Server listening to port 8080")

exports = module.exports = server