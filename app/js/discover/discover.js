'use strict';

angular.module('marvelApp.discover', [])

.controller('DiscoverCtrl', ['Comics', '$scope', '$mdToast', function(Comics, $scope, $mdToast) {
    var vm = this;
    
    vm.init = function(){
        vm.defaults();
    };
    
    vm.defaults = function(){
        vm.comics = [];
        vm.birthYear = undefined;
        vm.flags = { showComics: false };
    };
    
    vm.submit = function(){
        if($scope.frm.$valid){
            vm.comics = Comics.get({dateRange: vm.getDateRange(vm.birthYear)},
                function(response){ vm.flags.showComics = true; console.log(vm.comics); },
                function(responseError){ $mdToast.simple().textContent(responseError.status || "Oh no, something bad hapenned! Try againd later.").position('top right').highlightClass('md-warn'); }
            );
        }
    };
    
    vm.getDateRange = function(year){
        return year + '-01-01,' + year + '-12-31';
    };
    
    vm.init();
}]);