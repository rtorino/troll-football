'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function SeasonResultsCtrl(results) {
  angular.extend(this, {
    page: 'Season Results',
    results: results
  });
}

controllersModule.controller('SeasonResultsCtrl', SeasonResultsCtrl);