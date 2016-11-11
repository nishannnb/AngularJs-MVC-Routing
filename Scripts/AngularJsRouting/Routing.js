var app = angular.module('MyApp', ['ngRoute']);
app.config([
    '$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {

        $routeProvider
        .when('/Home', { // For Home Page
            templateUrl: '/Views/Home/Home.html',
            controller: 'HomeController'
        })
        .when('/Contact', { // For Contact page
            templateUrl: '/Views/Home/Contact.html',
            controller: 'ContactController'
        })
        .when('/About', { // For About page
            templateUrl: '/Views/Home/About.html',
            controller: 'AboutController'
        })
        .when('/User/:userid', { // For User page 
            templateUrl: '/Views/Home/User.html',
            controller: 'UserController'
        })
        .when('/Fun', { // For User page 
            templateUrl: '/Views/Home/Fun.html',
            controller: 'FunController'
        })
        .otherwise({   // This is when any route not matched => error
            controller: 'ErrorController'
        })
    }]);




