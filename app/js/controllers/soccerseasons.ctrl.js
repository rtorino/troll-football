'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SoccerSeasonsCtrl(seasons, SoccerSeasonsSvc, $state) {
  angular.extend(this, {
    page: 'Soccer Seasons',
    seasons: seasons,
    getResults: function(seasonUrl) {
      var idFromUrl = seasonUrl.substr(seasonUrl.lastIndexOf('/') + 1);
      var options = {};

      $state.go('results', {seasonId: idFromUrl}, options);
    }
  });
}

controllersModule.controller('SoccerSeasonsCtrl', SoccerSeasonsCtrl);