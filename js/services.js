'use strict';

var appMotoServices = angular.module('appMotoServices',['ngResource']);

appMotoServices.factory('Moto',['$resource',
    function($resource){
        return $resource('data/:motoId.json',{},{
            query: {method: 'GET',
                params:{
                    motoId: 'data'
                },
            isArray : true
            }
        });
}]);