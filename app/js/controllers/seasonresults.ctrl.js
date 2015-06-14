'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SeasonResultsCtrl(results) {

  // ViewModel
  var vm = this;

  vm.page = 'Season Results';

  vm.results = results;
}

controllersModule.controller('SeasonResultsCtrl', SeasonResultsCtrl);