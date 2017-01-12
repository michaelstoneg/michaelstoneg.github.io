angular.module('portfolio')
  .controller('MainController', MainController);


MainController.$inject = ['$state', '$rootScope'];
function MainController($state, $rootScope) {
  const main = this;

  function secureState(e, toState, toParams) {
    main.stateName = toState.name;
    console.log(main.stateName);
  }

  $rootScope.$on('$stateChangeStart', secureState);
}
