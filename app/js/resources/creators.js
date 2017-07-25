'use strict';

angular.module('marvelApp')

.factory('Creators', ['$resource', 'api', function($resource, api) {
    return $resource(api.path + '/creators?apikey=' + api.key);
}]);