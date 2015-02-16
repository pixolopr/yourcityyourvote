// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ngRoute',
  'phonecatControllers',
  'templateservicemod',
    'navigationservice'
]);

firstapp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'views/index-01.html',
            controller: 'homeCtrl'
        }).
        when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
        }).
        when('/faq', {
            templateUrl: 'views/single-project.html',
            controller: 'faqCtrl'
        }).
        when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactCtrl'
        }).
        when('/voterregister', {
            templateUrl: 'views/single-project.html',
            controller: 'voterregiisterCtrl'
        }).
        when('/voterlogin', {
            templateUrl: 'views/single-project.html',
            controller: 'voterloginCtrl'
        }).
        when('/vote', {
            templateUrl: 'views/portfolio-3.html',
            controller: 'voteCtrl'
        }).
        when('/candidates', { /*List of candidates (by region)*/
            templateUrl: 'views/portfolio-4.html',
            controller: 'candidatesCtrl'
        }).
        when('/candidateprofile', { /*when clicked on a candidate, his/her stories*/
            templateUrl: 'views/left-sidebar.html',
            controller: 'candidateprofileCtrl'
        }).
        when('/candidateregister', {
            templateUrl: 'views/single-project.html',
            controller: 'candidateregisterCtrl'
        }).
        when('/candidatelogin', {
            templateUrl: 'views/single-project.html',
            controller: 'candidateloginCtrl'
        }).
        when('/candidatewall', { /*all candidates of my region*/
            templateUrl: 'views/left-sidebar.html',
            controller: 'candidatewallCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);