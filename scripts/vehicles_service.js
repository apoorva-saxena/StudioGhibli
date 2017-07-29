const request = require('request')

function log(obj) {
    console.log(require('util').inspect(obj, false, null));
}

var vehicles = {

    getVehicles: async function() {
        return new Promise(function(resolve, reject) {
            request('https://ghibliapi.herokuapp.com/vehicles', function(error, response, body) {
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    reject(e);
                }
            })
        })
    }

};

module.exports = vehicles;