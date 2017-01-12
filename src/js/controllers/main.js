angular.module('portfolio')
  .controller('MainController', MainController);


MainController.$inject = ['$state', '$rootScope'];
function MainController($state, $rootScope) {
  const main = this;

  function secureState(e, toState, toParams) {
    main.stateName = toState.name;
    main.statLighter = 'true';
    console.log(main.stateName);
    console.log('stat lighter', main.statLighter);
  }

  $rootScope.$on('$stateChangeStart', secureState);
}
