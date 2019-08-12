appCarros.controller("listarDetalleCarro",['$scope','Car',
    function($scope, Car){
        $scope.cars = Car.query();
        $scope.orderProp = 'id';
}]);

appCarros.controller("controllerDetalleCarro", ['$scope','CarD','$routeParams', 
function($scope, CarD ,$routeParams){
    $scope.carId = $routeParams.carId;
}]);

