'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [


    'myApp.version',
    'ui.router',
    'ui.bootstrap',
    'smart-table'
]).
config( function($locationProvider) {
 // $locationProvider.hashPrefix('!');


});
