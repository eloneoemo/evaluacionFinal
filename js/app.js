var appCarros = angular.module('appCarros',[
    'ngRoute',
    'carAppServices'
]);

appCarros.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl : "vistas/listaCarros.html",
        controller : "listarDetalleCarro"
    })
    .when("/detalle/:carId",{
        templateUrl : "vistas/detalleCarro.html",
        controller : "controllerDetalleCarro"
    })
    .otherwise({ reditrectTo : "/" });

    
})/*.directive('detalle',function(){
    return{
        restric : 'A',
        scope:{
            mostrarDetalle: '='
        },
        template :'<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>',
        controller: ['$scope','$http','$interval',function($scope,$http,$interval){
            $scope.getCar = function(id){
                var url = "data/data.json";
                var full_url = url + id
                $http.get(full)
                .success(function(data,status,headers,config){
                    $scope.car = data;
                })
                .error(function(data,status,headers,config){
                    $scope.car = "No hay nada"
                });
            };
        }],
        link: function($scope,iElement,iAttrs,ctrl){
            $scope.getCar($scope.mostrarDetalle.id)
        }
    }
})*/;
