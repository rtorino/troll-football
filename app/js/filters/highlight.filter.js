'use strict';

var filtersModule = require('./_index');

/**
 * @ngInject
 */
function highlight($sce) {

  return function(text, searchText) {
    if (searchText) {
      text = text.replace(new RegExp('('+searchText+')', 'gi'), '<span class="highlighted">$1</span>');
    }

    return $sce.trustAsHtml(text);
  };

}

filtersModule.filter('highlight', highlight);