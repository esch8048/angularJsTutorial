var appName = 'mean';
var app = angular.module(appName, ['ngResource', 'ngRoute', 'users', 'example']);

//manual initialisation
angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});

app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

if (window.location.hash === '#_=_') window.location.hash = '#!';
