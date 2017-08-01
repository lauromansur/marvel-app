'use strict';

angular.module('marvelApp')

.factory('Comics', ['$resource', 'api', function($resource, api) {
    return $resource(api.path + '/comics?orderBy=onsaleDate&apikey=' + api.key, { dateRange: 'dateRange' });
}]);