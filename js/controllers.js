appCarros.controller("listarDetalleCarro",['$scope','Car',
    function($scope, Car){
        $scope.cars = Car.query();
        $scope.orderProp = 'nombre';
}]);

appCarros.controller("controllerDetalleCarro", function controllerDetalleCarro ($scope, $rootScope, $location){
    $scope.verListas = function(){
        $location.url("/detalle");
    }
});