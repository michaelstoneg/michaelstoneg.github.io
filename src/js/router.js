angular.module('portfolio')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state( 'welcome', {
      views: {
        'right': {
          url: '/welcome',
          templateUrl: '/templates/welcome.html',
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
    .state( 'skills', {
      views: {
        'left': {
          url: '/skills',
          templateUrl: '/templates/skills/skillsType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/skills',
          templateUrl: '/templates/skills/skills.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'skillsTech', {
      views: {
        'left': {
          url: '/skills',
          templateUrl: '/templates/skills/skillsType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/skills',
          templateUrl: '/templates/skills/skillsTech.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'skillsTeach', {
      views: {
        'left': {
          url: '/skills',
          templateUrl: '/templates/skills/skillsType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/skills',
          templateUrl: '/templates/skills/skillsTeach.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'skillsHosp', {
      views: {
        'left': {
          url: '/skills',
          templateUrl: '/templates/skills/skillsType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/skills',
          templateUrl: '/templates/skills/skillsHosp.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'experience', {
      views: {
        'left': {
          url: '/experience',
          templateUrl: '/templates/exp/experienceType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/experience',
          templateUrl: '/templates/exp/experience.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'experience1', {
      views: {
        'left': {
          url: '/experience',
          templateUrl: '/templates/exp/experienceType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/experience',
          templateUrl: '/templates/exp/experience1.html',
          controller: 'MainController as main'
        }
      }
    })

    .state( 'experience2', {
      views: {
        'left': {
          url: '/experience',
          templateUrl: '/templates/exp/experienceType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/experience',
          templateUrl: '/templates/exp/experience2.html',
          controller: 'MainController as main'
        }
      }
    })
    ;
  $urlRouterProvider.otherwise('/welcome');
}
