angular.module('index').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'index_module/views/index.client.view.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
