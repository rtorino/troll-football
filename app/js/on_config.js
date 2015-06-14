'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
      .state('seasons', {
        url: '/',
        controller: 'SoccerSeasonsCtrl as vm',
        templateUrl: 'soccerseasons.html',
        title: 'Soccer Seasons',
        resolve: {
          /**
           * @ngInject
           */
          seasons: function(SoccerSeasonsSvc) {
            return SoccerSeasonsSvc.getSeasons();
          }
        }
      })

      .state('results', {
        url: '/soccerseasons/:seasonId/fixtures',
        controller: 'SeasonResultsCtrl as vm',
        templateUrl: 'seasonresults.html',
        title: 'Season Results',
        resolve: {
          /**
           * @ngInject
           */
          results: function(SoccerSeasonsSvc, $stateParams) {
            var seasonId = $stateParams.seasonId;

            if (seasonId) {
              return SoccerSeasonsSvc.getResults(seasonId);
            } else {
              return false;
            }
          }
        }
      });

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;