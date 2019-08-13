'use strict';

var appMotoControllers = angular.module ('appMotoControllers',[]);

appMotoControllers.controller('appListController',['$scope','Moto',
    function($scope, Moto){
        $scope.motos = Moto.query();
        $scope.orderProp = 'name';
        $scope.classPage = 'animacion1  ';

}]);

appMotoControllers.controller('detalleMotoController', ['$scope', '$routeParams', 'Moto',
  function($scope, $routeParams, Moto){
    $scope.classPage = 'animacion2';
    $scope.moto = Moto.get({motoId: $routeParams.motoId}, function(moto){
    });
    $scope.setImage = function(mainImageUrl){
      $scope.mainImageUrl = mainImageUrl;
    }

}]);