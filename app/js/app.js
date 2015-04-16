"use strict";
angular.module("chart", [
  "constants",
  "ui.router",
  "templates",
  "nvd3",
  "ngDropdowns"
])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "main/views/home.html",
    controller: "MainController",
    controllerAs: "main"
  });

  $urlRouterProvider.otherwise("/");
})
;
