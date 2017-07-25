'use strict';

angular.module('marvelApp')

.factory('Stories', ['$resource', 'api', function($resource, api) {
    return $resource(api.path + '/stories?apikey=' + api.key);
}]);