'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function SoccerSeasonsSvc($q, $http, AppSettings) {

  var service = {};

  service.getSeasons = function() {
    var deferred = $q.defer();

    $http.get(AppSettings.apiUrl + '/soccerseasons')
      .success(function(data) {
        deferred.resolve(data);
      })
      .error(function(err, status) {
        deferred.reject(err, status);
      });

    return deferred.promise;
  };

  service.getResults = function(seasonId) {
    var deferred = $q.defer();

    $http.get(AppSettings.apiUrl + '/soccerseasons/' + seasonId + '/fixtures')
      .success(function(data) {
        deferred.resolve(data);
      })
      .error(function(err, status) {
        deferred.reject(err, status);
      });

    return deferred.promise;
  };

  return service;

}

servicesModule.service('SoccerSeasonsSvc', SoccerSeasonsSvc);