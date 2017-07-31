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

    app.controller('FilmsController', function($http, $scope) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/films'
        }).then(function successCallback(response) {
            $scope.films_data = response.data
        });
    })

    app.controller('PeopleController', function($http, $scope) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/people'
        }).then(function successCallback(response) {
            $scope.people_data = response.data
        });
    })

    app.controller('LocationsController', function($http, $scope) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/locations'
        }).then(function successCallback(response) {
            $scope.location_data = response.data
        });
    })

})();