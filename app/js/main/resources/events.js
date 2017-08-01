'use strict';

angular.module('marvelApp')

.factory('Events', ['$resource', 'api', function($resource, api) {
    return $resource(api.path + '/events?apikey=' + api.key);
}]);