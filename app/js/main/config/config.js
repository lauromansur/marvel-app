'use strict';

angular.module('marvelApp')
.config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
    function($mdThemingProvider, $stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        
        var init = function(){
            configTheme();
            configLazyLoad();
            configStates();
        };
        
        var configTheme = function(){
            var redMarvel = $mdThemingProvider.extendPalette('red', { '500': '#f0141e' });
            
            $mdThemingProvider.definePalette('redMarvel', redMarvel);
            
            $mdThemingProvider.theme('default')
                .primaryPalette('redMarvel')
                .accentPalette('grey')
                .dark();
        };
        
        var configLazyLoad = function(){
            $ocLazyLoadProvider.config({
                debug: false,
                modules: [
                    {name: 'home', files: ['js/home/home.js']},
                    {name: 'discover', files: ['js/discover/discover.js', 'js/main/resources/comics.js']},
                    {name: 'browse', files: ['js/browse/browse.js']},
                    {name: 'about', files: ['js/about/about.js']}
                ]
            });
        };
        
        var configStates = function(){
            $urlRouterProvider.otherwise("/home");
            
            $stateProvider
                .state("home", {
                    url: '/home',
                    controller: 'HomeCtrl as ctrl',
                    templateUrl: "js/home/home.html",
                    resolve: { lazy: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load(['home']); }] }
                })
                .state("discover", {
                    url: '/discover',
                    templateUrl: 'js/discover/discover.html',
                    controller: 'DiscoverCtrl as ctrl',
                    resolve: { lazy: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load(['discover']); }] }
                })
                .state("browse", {
                    url: '/browse',
                    controller: 'BrowseCtrl as ctrl',
                    templateUrl: 'js/browse/browse.html',
                    resolve: { lazy: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load(['browse']); }] }
                })
                .state("about", {
                    url: '/about',
                    controller: 'AboutCtrl as ctrl',
                    templateUrl: 'js/about/about.html',
                    resolve: { lazy: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load(['about']); }] }
                });
        };
        
        init();
    }
]);