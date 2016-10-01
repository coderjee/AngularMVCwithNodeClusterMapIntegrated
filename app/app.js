/* global WebRoutesListing */
/* global angular */
'use strict';
angular.module('AlmostEverything', ['ngRoute', 'ngResource', 'ngAnimate', 'ui.bootstrap', 'almostEverything.controllers', 'almostEverything.services'])
    .config(function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        }).
         otherwise({
            redirectTo: '/'
        });
    });

var almostEverythingControllers = angular.module('almostEverything.controllers', []);
var almostEverythingServices = angular.module('almostEverything.services', []);
