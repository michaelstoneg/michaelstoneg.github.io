angular.module('portfolio')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state( 'welcome', {
      url: '/welcome',
      views: {
        'right': {
          // url: '/welcome',
          templateUrl: '/templates/welcome.html',
          controller: 'MainController as main'
        },
        'stats': {
          // url: '/welcome',
          templateUrl: '/templates/stats/mainStats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'about', {
      url: '/about',
      views: {
        'left': {
          templateUrl: '/templates/about/aboutType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/about/about.html',
          controller: 'MainController as main'
        },
        'stats': {
          // url: '/welcome',
          templateUrl: '/templates/stats/mainStats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'aboutWork', {
      url: '/aboutWork',
      views: {
        'left': {
          templateUrl: '/templates/about/aboutType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/about/aboutWork.html',
          controller: 'MainController as main'
        },'stats': {
          // url: '/welcome',
          templateUrl: '/templates/stats/about/aboutWorkStats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'aboutLife', {
      url: '/aboutLife',
      views: {
        'left': {
          templateUrl: '/templates/about/aboutType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/about/aboutlife.html',
          controller: 'MainController as main'
        },
        'stats': {
          // url: '/welcome',
          templateUrl: '/templates/stats/about/aboutLifeStats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'contact', {
      url: '/contact',
      views: {
        'right': {
          templateUrl: '/templates/contact.html',
          controller: 'MainController as main'
        },
        'stats': {
          // url: '/welcome',
          templateUrl: '/templates/stats/mainStats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'skills', {
      url: '/skills',
      views: {
        'left': {
          templateUrl: '/templates/skills/skillsType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/skills/skills.html',
          controller: 'MainController as main'
        },
        'stats': {
          // url: '/welcome',
          templateUrl: '/templates/stats/mainStats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'skillsTech', {
      url: '/techSkills',
      views: {
        'left': {
          templateUrl: '/templates/skills/skillsType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/skills/skillsTech.html',
          controller: 'MainController as main'
        },
        'stats': {
          // url: '/welcome',
          templateUrl: '/templates/stats/skills/techSkillStats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'skillsTeach', {
      url: '/teachingSkills',
      views: {
        'left': {
          templateUrl: '/templates/skills/skillsType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/skills/skillsTeach.html',
          controller: 'MainController as main'
        },
        'stats': {
          // url: '/welcome',
          templateUrl: '/templates/stats/skills/teachSkillStats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'skillsHosp', {
      url: '/hospitalityskills',
      views: {
        'left': {
          templateUrl: '/templates/skills/skillsType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/skills/skillsHosp.html',
          controller: 'MainController as main'
        },
        'stats': {
          // url: '/welcome',
          templateUrl: '/templates/stats/skills/hospSkillStats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'skillsOther', {
      url: '/otherskills',
      views: {
        'left': {
          templateUrl: '/templates/skills/skillsType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/skills/skillsOther.html',
          controller: 'MainController as main'
        },
        'stats': {
          // url: '/welcome',
          templateUrl: '/templates/stats/skills/otherSkillStats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'experience', {
      url: '/experience',
      views: {
        'left': {
          templateUrl: '/templates/exp/experienceType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/exp/experience.html',
          controller: 'MainController as main'
        },
        'stats': {
          // url: '/welcome',
          templateUrl: '/templates/stats/mainStats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'experience1', {
      url: '/experience1',
      views: {
        'left': {
          templateUrl: '/templates/exp/experienceType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/exp/experience1.html',
          controller: 'MainController as main'
        },
        'stats': {
          templateUrl: '/templates/stats/experience/experience1Stats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'experience2', {
      url: '/experience2',
      views: {
        'left': {
          templateUrl: '/templates/exp/experienceType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/exp/experience2.html',
          controller: 'MainController as main'
        },
        'stats': {
          templateUrl: '/templates/stats/experience/experience2Stats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'experience3', {
      url: '/experience3',
      views: {
        'left': {
          templateUrl: '/templates/exp/experienceType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/exp/experience3.html',
          controller: 'MainController as main'
        },
        'stats': {
          templateUrl: '/templates/stats/experience/experience3Stats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'experience4', {
      url: '/experience4',
      views: {
        'left': {
          templateUrl: '/templates/exp/experienceType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/exp/experience4.html',
          controller: 'MainController as main'
        },
        'stats': {
          templateUrl: '/templates/stats/experience/experience4Stats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'experience5', {
      url: '/experience5',
      views: {
        'left': {
          templateUrl: '/templates/exp/experienceType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/exp/experience5.html',
          controller: 'MainController as main'
        },
        'stats': {
          templateUrl: '/templates/stats/experience/experience5Stats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'experience6', {
      url: '/experience6',
      views: {
        'left': {
          templateUrl: '/templates/exp/experienceType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/exp/experience6.html',
          controller: 'MainController as main'
        },
        'stats': {
          templateUrl: '/templates/stats/experience/experience6Stats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'projects', {
      url: '/projects',
      views: {
        'left': {
          templateUrl: '/templates/projects/projectType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/projects/projects.html',
          controller: 'MainController as main'
        },
        'stats': {
          // url: '/welcome',
          templateUrl: '/templates/stats/mainStats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'project1', {
      url: '/projectGridOfFire',
      views: {
        'left': {
          templateUrl: '/templates/projects/projectType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/projects/project1.html',
          controller: 'MainController as main'
        },
        'stats': {
          templateUrl: '/templates/stats/projects/project1Stats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'project2', {
      url: '/projectTimeTravlrz',
      views: {
        'left': {
          templateUrl: '/templates/projects/projectType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/projects/project2.html',
          controller: 'MainController as main'
        },
        'stats': {
          templateUrl: '/templates/stats/projects/project2Stats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'project3', {
      url: '/projectAlign',
      views: {
        'left': {
          templateUrl: '/templates/projects/projectType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/projects/project3.html',
          controller: 'MainController as main'
        },
        'stats': {
          templateUrl: '/templates/stats/projects/project3Stats.html',
          controller: 'MainController as main'
        }
      }
    })
    .state( 'project4', {
      url: '/projectEphemeralia',
      views: {
        'left': {
          templateUrl: '/templates/projects/projectType.html',
          controller: 'MainController as main'
        },
        'right': {
          templateUrl: '/templates/projects/project4.html',
          controller: 'MainController as main'
        },
        'stats': {
          templateUrl: '/templates/stats/projects/project4Stats.html',
          controller: 'MainController as main'
        }
      }
    })
    ;
  $urlRouterProvider.otherwise('/welcome');
}
