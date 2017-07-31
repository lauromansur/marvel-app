'use strict';

angular.module('marvelApp.about', [])

.controller('AboutCtrl', ["$rootScope", function($rootScope) {
    var vm = this;
    
    vm.init = function(){
        vm.defaults();
    };
    
    vm.defaults = function(){
        $rootScope.mainContentAlign = "center center";
    };
    
    vm.init();
}]);