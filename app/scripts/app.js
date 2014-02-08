'use strict';

angular.module('pokedexApp', ['ui.router']).config;
 (function($stateProvider, $urlRouterProvider) {
 	$urlRouterProvider.otherwise('/')

  $stateProvider.state('main',{
      url: "/",
      templateUrl: "views/main.html"
      controller: 'MainCtrl',
      resolve:{
      	teams:function(TurtleService){
      		return TurtleService.getTeams();
      	}
      }
    })
 	.state('team',{
 		 url: "/team/:teamld",
      template: "templates/team.html"
      Controller: 'TeamCtrl'
      resolve:{
      	teams:function(TurtleService,$stateParams){
      		return TurtleService.getTeams($stateParams.teamId);

      }
 	})
     
 });