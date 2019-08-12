appCarros.controller("listarDetalleCarro",['$scope','Car',
    function($scope, Car){
        $scope.cars = Car.query();
        $scope.orderProp = 'id';
}]);

appCarros.controller("controllerDetalleCarro", ['$scope','$routeParams', 
function($scope, $routeParams){
    $scope.carId = $routeParams.carId;
}]);

