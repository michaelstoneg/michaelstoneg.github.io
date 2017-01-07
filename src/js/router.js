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
          url: '/aboutWork',
          templateUrl: '/templates/about/aboutType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/aboutWork',
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
          url: '/techSkills',
          templateUrl: '/templates/skills/skillsType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/techSkills',
          templateUrl: '/templates/skills/skillsTech.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'skillsTeach', {
      views: {
        'left': {
          url: '/teachingSkills',
          templateUrl: '/templates/skills/skillsType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/teachingSkills',
          templateUrl: '/templates/skills/skillsTeach.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'skillsHosp', {
      views: {
        'left': {
          url: '/hospitalityskills',
          templateUrl: '/templates/skills/skillsType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/hospitalityskills',
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
          url: '/experience1',
          templateUrl: '/templates/exp/experienceType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/experience1',
          templateUrl: '/templates/exp/experience1.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'experience2', {
      views: {
        'left': {
          url: '/experience2',
          templateUrl: '/templates/exp/experienceType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/experience2',
          templateUrl: '/templates/exp/experience2.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'projects', {
      views: {
        'left': {
          url: '/projects',
          templateUrl: '/templates/projects/projectType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/projects',
          templateUrl: '/templates/projects/projects.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'project1', {
      views: {
        'left': {
          url: '/projectGridOfFire',
          templateUrl: '/templates/projects/projectType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/projectGridOfFire',
          templateUrl: '/templates/projects/project1.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'project2', {
      views: {
        'left': {
          url: '/projectTimeTravlrz',
          templateUrl: '/templates/projects/projectType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/projectTimeTravlrz',
          templateUrl: '/templates/projects/project2.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'project3', {
      views: {
        'left': {
          url: '/projectAlign',
          templateUrl: '/templates/projects/projectType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/projectAlign',
          templateUrl: '/templates/projects/project3.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'project4', {
      views: {
        'left': {
          url: '/projectEphemeralia',
          templateUrl: '/templates/projects/projectType.html',
          controller: 'MainController as main'
        },
        'right': {
          url: '/projectEphemeralia',
          templateUrl: '/templates/projects/project4.html',
          controller: 'MainController as main'
        }
      }
    })
    ;
  $urlRouterProvider.otherwise('/welcome');
}
