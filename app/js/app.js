'use strict';

// Declare app level module which depends on views, and components
angular.module('marvelApp', [
    'ui.router',
    'ngAnimate',
    'ngResource',
    'ngMaterial',
    'oc.lazyLoad'
])
.value('api', { key: '9a35ae944d0e70c1caeacec80a9319c6', path: 'https://gateway.marvel.com:443/v1/public' })
.value('version', '0.0.1')
.value('imageVariants', {
    portrait: {
        small: 'portrait_small',
        medium: 'portrait_medium',
        xlarge: 'portrait_xlarge',
        fantastic: 'portrait_fantastic',
        uncanny: 'portrait_uncanny',
        incredible: 'portrait_incredible'
    },
    standard: {
        small: 'standard_small',
        medium: 'standard_medium',
        large: 'standard_large',
        xlarge: 'standard_xlarge',
        fantastic: 'standard_fantastic',
        amazing: 'standard_amazing'
    }, 
    landscape: {
        small: 'landscape_small',
        medium: 'landscape_medium',
        large: 'landscape_large',
        xlarge: 'landscape_xlarge',
        amazing: 'landscape_amazing',
        incredible: 'landscape_incredible'
    },
    detail: 'detail',
    fullsize: ''
})
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
                    {name: 'discover', files: ['js/discover/discover.js', 'js/resources/comics.js']},
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