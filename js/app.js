angular.module('socialApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('welcome', {
          url: '/',
          templateUrl: 'views/initial.html',
          controller: 'mainController'
      })

      .state('landing', {
       url: '/landing',
       templateUrl: 'views/landing.html',
       controller: 'mainController'
     })

     .state('update', {
        url: '/update',
        templateUrl: 'views/update.html',
        controller: 'mainController'
      })

      .state('view', {
       url: '/view',
       templateUrl: 'views/viewfriends.html',
       controller: 'mainController'
     })

     .state('find', {
      url: '/find',
      templateUrl: 'views/findfriends.html',
      controller: 'mainController'
    })

     .state('info', {
       url: '/info',
       templateUrl: 'views/friendinfo.html',
       controller: 'mainController'
     })

    $urlRouterProvider
      .otherwise('/')

 });
