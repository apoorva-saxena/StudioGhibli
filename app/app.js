(function() {
    var app = angular.module("Studio", ["ngRoute"]);
    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templatUrl: "main.html"
            })
            .when("/films", {
                templateUrl: "films.html",
                // controller: filmsController
            })
            .when("/people", {
                templateUrl: "people.html"
            })
            .when("/locations", {
                templateUrl: "locations.html"
            })
            .when("/species", {
                templateUrl: "species.html"
            })
            .when("/vehicles", {
                templateUrl: "vehicles.html"
            })
    });

    const tabs = [

        {
            domain: 'films',
        },
        {
            domain: 'people',
        },
        {
            domain: 'locations',
        },
        {
            domain: 'species',
        },
        {
            domain: 'vehicles',
        }
    ];

    app.controller('StudioController', function() {
        this.tabs = tabs
    });

})();