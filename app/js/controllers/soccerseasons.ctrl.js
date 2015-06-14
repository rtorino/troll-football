'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SoccerSeasonsCtrl(seasons, SoccerSeasonsSvc, $state) {

  // ViewModel
  var vm = this;

  vm.page = 'Soccer Seasons';

  vm.seasons = seasons;

  vm.getResults = function(seasonUrl) {
    var idFromUrl = seasonUrl.substr(seasonUrl.lastIndexOf('/') + 1);
    var options = {};

    $state.go('results', {seasonId: idFromUrl}, options);
  };
}

controllersModule.controller('SoccerSeasonsCtrl', SoccerSeasonsCtrl);