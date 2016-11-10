var app = angular.module('MyApp', ['ngRoute']);
app.config([
    '$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {

        $routeProvider
        .when('/Home', { // For Home Page
            templateUrl: '/AngularTemplates/Index.html',
            controller: 'HomeController'
         })
        .when('/Contact', { // For Contact page
            templateUrl: '/AngularTemplates/Contact.html',
            controller: 'ContactController'
        })
        .when('/About', { // For About page
            templateUrl: '/AngularTemplates/About.html',
            controller: 'AboutController'
        })
        .when('/User/:userid', { // For User page 
           templateUrl: '/AngularTemplates/User.html',
           controller: 'UserController'
        })
        .otherwise({   // This is when any route not matched => error
           controller: 'ErrorController'
        })
    }]);




