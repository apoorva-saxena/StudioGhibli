const request = require('request')

function log(obj) {
    console.log(require('util').inspect(obj, false, null));
}

var locations = {

    getLocations: async function() {
        return new Promise(function(resolve, reject) {
            request('https://ghibliapi.herokuapp.com/locations', function(error, response, body) {
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    reject(e);
                }
            })
        })
    }

};

module.exports = locations;