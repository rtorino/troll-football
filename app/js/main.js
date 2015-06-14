'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('angular-loading-bar');
require('./templates');
require('./controllers/_index');
require('./filters/_index');
require('./services/_index');
require('./directives/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'angular-loading-bar',
    'templates',
    'app.controllers',
    'app.filters',
    'app.services',
    'app.directives'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').constant('AppSettings', require('./constants'));

  angular.module('app').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push(function ($q, AppSettings) {
      return {
        request: function(config) {
          config.headers = config.headers || {};

          // Already has an authorization headers
          if (config.headers['X-Auth-Token']) {
            return config;
          }

          config.headers['X-Auth-Token'] = AppSettings.apiKey;

          return config;
        }
      };
    });
  }]);

  angular.module('app').config(require('./on_config'));

  angular.module('app')
    .config(['cfpLoadingBarProvider',
      function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
      }
    ]);

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

});