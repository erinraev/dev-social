angular.module('socialApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('welcome', {
          url: '/welcome',
          templateUrl: './views/initial.html'
      })

      .state('landing', {
       url: '/landing',
       templateUrl: 'views/landing.html'
     })

     .state('update', {
        url: '/update',
        templateUrl: 'update.html'
      })

      .state('view', {
       url: '/view',
       templateUrl: 'viewfriends.html'
     })

     .state('find', {
      url: '/find',
      templateUrl: 'findfriends.html'
    })

     .state('info', {
       url: '/info',
       templateUrl: 'friendinfo.html'
     })

    $urlRouterProvider
      .otherwise('/welcome')

 });
