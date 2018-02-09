angular.module('trivia-trends').config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/views/home.html',
        controller: 'qController'
    }).state('easy',{
        url: '/easy',
        templateUrl: 'app/views/easy.html',
        controller:'qController'
    }).state('medium',{
        url: '/medium',
        templateUrl: 'app/views/medium.html',
        controller:'qController'
    }).state('hard',{
        url: '/hard',
        templateUrl: 'app/views/hard.html',
        controller:'qController'
    }).state('search',{
        url: '/search',
        templateUrl: 'app/views/search.html',
        controller:'qController'
    })

    $urlRouterProvider.otherwise('/');
})