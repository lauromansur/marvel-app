'use strict';

angular.module('marvelApp')

.factory('Characters', ['$resource', 'api', function($resource, api) {
    return $resource(api.path + '/characters?apikey=' + api.key);
}]);