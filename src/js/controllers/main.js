angular.module('portfolio')
  .controller('MainController', MainController);


MainController.$inject = ['$state', '$rootScope'];
function MainController($state, $rootScope) {
  const main = this;

  function secureState(e, toState, toParams) {
    main.stateName = toState.name;
  }

  $rootScope.$on('$stateChangeStart', secureState);

  //link handling
  function aboutGo () {
    console.log('to the about page');
    $state.go('about');
  }

  function aboutLife () {
    console.log('to the about life page');
    $state.go('aboutLife');
  }

  function aboutWork () {
    console.log('to the about work page');
    $state.go('aboutWork');
  }

  function contact () {
    console.log('to the about contact page');
    $state.go('contact');
  }

  function skills () {
    console.log('to the about contact page');
    $state.go('skills');
  }

  function skillsTech () {
    console.log('to the about contact page');
    $state.go('skillsTech');
  }

  function skillsTeach () {
    console.log('to the about contact page');
    $state.go('skillsTeach');
  }

  function skillsHosp () {
    console.log('to the about contact page');
    $state.go('skillsHosp');
  }

  function experience () {
    console.log('to the experience page');
    $state.go('experience');
  }

  main.aboutGo = aboutGo;
  main.aboutLife = aboutLife;
  main.aboutWork = aboutWork;
  main.contact = contact;
  main.skills = skills;
  main.skillsTech = skillsTech;
  main.skillsTeach = skillsTeach;
  main.skillsHosp = skillsHosp;
  main.experience = experience;
}
