'use strict';

var appMoto = angular.module('appMoto',['ngRoute','ngAnimate','appMotoControllers','appMotoServices']);

appMoto.config(['$routeProvider',
    function($routeProvider){
        $routeProvider
        .when('/lista',{
            templateUrl: 'vistas/listaMotos.html',
            controller: 'appListController'
        })
        .when('/detalle/:motoId',{
            templateUrl: 'vistas/detalleMoto.html',
            controller: 'detalleMotoController'
        })
        .otherwise({
            templateUrl: 'vistas/listaMotos.html',
            controller: 'appListController'
        });
}]);