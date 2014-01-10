'use strict';

// Declare app level module which depends on filters, and services
angular.module('indexApp', [
        'indexApp.controllers',
        'indexApp.services',
        'indexApp.directives'
    ]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['indexApp']);
});
