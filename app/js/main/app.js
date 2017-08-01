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
});