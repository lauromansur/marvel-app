'use strict';

// Declare app level module which depends on views, and components
angular.module('marvelApp', [
    'ui.router',
    'ngAnimate',
    'ngMaterial',
    'oc.lazyLoad'
])
.value('version', '0.0.1')
.config(['$locationProvider', '$mdThemingProvider', '$stateProvider', '$urlRouterProvider',
    function($locationProvider, $mdThemingProvider, $stateProvider, $urlRouterProvider) {
        
        var init = function(){
            configLocation();
            configStates();
            configTheme();
        };
        
        var configLocation = function(){
            $locationProvider.hashPrefix('!');
        };
        
        var configStates = function(){
            $urlRouterProvider.otherwise("/home");
            
            $stateProvider
                .state("home", {
                    url: '/home',
                    controller: 'HomeCtrl as ctrl',
                    templateUrl: "js/home/home.html",
                    resolve: { lazy: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load(['js/home/home.js']); }] }
                })
                .state("discover", {
                    url: '/discover',
                    templateUrl: 'js/discover/discover.html',
                    controller: 'DiscoverCtrl as ctrl',
                    resolve: { lazy: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load(['js/discover/discover.js']); }] }
                })
                .state("browse", {
                    url: '/browse',
                    controller: 'BrowseCtrl as ctrl',
                    templateUrl: 'js/browse/browse.html',
                    resolve: { lazy: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load(['js/browse/browse.js']); }] }
                })
                .state("about", {
                    url: '/about',
                    controller: 'AboutCtrl as ctrl',
                    templateUrl: 'js/about/about.html',
                    resolve: { lazy: ['$ocLazyLoad', function($ocLazyLoad) { return $ocLazyLoad.load(['js/about/about.js']); }] }
                });
        };
        
        var configTheme = function(){
            var redMarvel = $mdThemingProvider.extendPalette('red', { '500': '#f0141e' });
            
            $mdThemingProvider.definePalette('redMarvel', redMarvel);
            
            $mdThemingProvider.theme('default')
                .primaryPalette('redMarvel')
                .accentPalette('grey')
                .dark();
        };
        
        init();
    }
]);
