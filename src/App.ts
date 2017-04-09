///<reference path="PersonaController.ts"/>
///<reference path="PersonaListController.ts"/>

declare var angular;
let myModule = angular.module('myModule', ['ngRoute']);
myModule.controller('PersonaController', ['$scope', PersonaController]);
myModule.controller('PersonaListController', ['$scope', PersonaListController]);
myModule.config(function($routeProvider) {
    $routeProvider.when('/list', {templateUrl: 'list.html', controller: PersonaListController});
    $routeProvider.when('/list/:sort_by', {templateUrl: 'list.html', controller: PersonaListController});
    $routeProvider.when('/persona/:persona_name', {templateUrl: 'persona.html', controller: PersonaController});
});
myModule.run(function($rootScope, $location, $route, $window) {
    $rootScope.$on('$locationChangeStart', function(event) {
        if (!$location.path()) {
            $location.path('/list/level');
            $route.reload();
        } else {
            $window.scrollTo(0, 0);
        }
    });
});