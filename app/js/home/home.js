'use strict';

angular.module('marvelApp.homez', [])

.controller('HomeCtrl', [function() {
    var vm = this;
    
    vm.init = function(){
        vm.defaults();
    };
    
    vm.defaults = function(){
        vm.options = [
            {id: 1, title: 'Discover', state: 'discover'},
            {id: 1, title: 'Browse', state: 'browse', disabled: true},
            {id: 1, title: 'About', state: 'about'}
        ];
    };
    
    vm.init();
}]);