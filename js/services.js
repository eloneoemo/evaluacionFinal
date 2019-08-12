var carAppServices = angular.module('carAppServices', ['ngResource']);

carAppServices.factory('Car',['$resource',
    function($resource){
        return $resource('data/data.json',{},{
            query: {method: 'GET', params:{carId:'cars'},isArray:true}
        });
}]);

carAppServices.factory('CarD',['$resource',
    function($resource){
        return $resource('data/data.json',{},{
            query: {method: 'GET', params:{id:'carId'},isArray:true}
        });
}]);