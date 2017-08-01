'use strict';

angular.module('marvelApp')

.factory('Series', ['$resource', 'api', function($resource, api) {
    return $resource(api.path + '/series?apikey=' + api.key);
}]);