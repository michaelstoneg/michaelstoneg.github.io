"use strict";function MainController(t,o){function e(t,o,e){u.stateName=o.name}function l(){console.log("to the about page"),t.go("about")}function a(){console.log("to the about life page"),t.go("aboutLife")}function r(){console.log("to the about work page"),t.go("aboutWork")}function n(){console.log("to the about contact page"),t.go("contact")}var u=this;o.$on("$stateChangeStart",e),u.aboutGo=l,u.aboutLife=a,u.aboutWork=r,u.contact=n}function Router(t,o){t.state("welcome",{views:{right:{url:"/welcome",templateUrl:"templates/welcome.html",controller:"MainController as main"}}}).state("about",{views:{left:{url:"/about",templateUrl:"/templates/about/aboutType.html",controller:"MainController as main"},right:{url:"/about",templateUrl:"/templates/about/about.html",controller:"MainController as main"}}}).state("aboutWork",{views:{left:{url:"/about",templateUrl:"/templates/about/aboutType.html",controller:"MainController as main"},right:{url:"/about",templateUrl:"/templates/about/aboutWork.html",controller:"MainController as main"}}}).state("aboutLife",{views:{left:{url:"/about",templateUrl:"/templates/about/aboutType.html",controller:"MainController as main"},right:{url:"/about",templateUrl:"/templates/about/aboutLife.html",controller:"MainController as main"}}}).state("contact",{views:{right:{url:"/contact",templateUrl:"/templates/contact.html",controller:"MainController as main"}}}),o.otherwise("/welcome")}angular.module("portfolio",["ui.router"]),angular.module("portfolio").controller("MainController",MainController),MainController.$inject=["$state","$rootScope"],angular.module("portfolio").config(Router),Router.$inject=["$stateProvider","$urlRouterProvider"];
//# sourceMappingURL=app.js.map
