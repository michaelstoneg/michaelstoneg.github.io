angular.module('portfolio')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state( 'welcome', {
      views: {
        'right': {
          url: '/welcome',
          templateUrl: 'templates/welcome.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'about', {
      views: {
        'left': {
          url: '/about',
          templateUrl: '/templates/about/aboutType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/about',
          templateUrl: '/templates/about/about.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'aboutWork', {
      views: {
        'left': {
          url: '/about',
          templateUrl: '/templates/about/aboutType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/about',
          templateUrl: '/templates/about/aboutWork.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'aboutLife', {
      views: {
        'left': {
          url: '/about',
          templateUrl: '/templates/about/aboutType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/about',
          templateUrl: '/templates/about/aboutLife.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'contact', {
      views: {
        'right': {
          url: '/contact',
          templateUrl: '/templates/contact.html',
          controller: 'MainController as main'
        }
      }
    })


    ;
  $urlRouterProvider.otherwise('/welcome');
}
