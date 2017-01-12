angular.module('portfolio')
  .controller('MainController', MainController);


MainController.$inject = ['$state', '$rootScope'];
function MainController($state, $rootScope) {
  const main = this;
  main.popupShow = false;
  console.log(main.popupShow);

  function secureState(e, toState, toParams) {
    main.stateName = toState.name;
    console.log(main.stateName);
    main.stateChange = true;
    console.log('changing state. light up stats');
  }

  $rootScope.$on('$stateChangeStart', secureState);

  function popupShow () {
    main.popupShow = true;
    console.log(main.popupShow);
  }

  main.popupShowFunc = popupShow;
}
