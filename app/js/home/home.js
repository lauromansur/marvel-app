'use strict';

angular.module('marvelApp.home', [])

.controller('HomeCtrl', ['$rootScope', function($rootScope) {
    var vm = this;
    
    vm.init = function(){
        vm.defaults();
    };
    
    vm.defaults = function(){
        $rootScope.mainContentAlign = "center center";
        
        vm.options = [
            {id: 1, title: 'Discover', state: 'discover'},
            {id: 1, title: 'Browse', state: 'browse', disabled: true},
            {id: 1, title: 'About', state: 'about'}
        ];
    };
    
    vm.init();
}]);