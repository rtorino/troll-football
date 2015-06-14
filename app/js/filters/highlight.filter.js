'use strict';

var filtersModule = require('./_index');

/**
 * @ngInject
 */
function highlight($sce) {

  return function(text, phrase) {
    if (phrase) {
      text = text.replace(new RegExp('('+phrase+')', 'gi'), '<span class="highlighted">$1</span>');
    }

    return $sce.trustAsHtml(text)
  }

}

filtersModule.filter('highlight', highlight);