'use strict';

angular.module('PokedexApp')
	.directive('h1', function(){
		return {
			restrist: 'A',
			link: function postLink(scope, element, arrts){
				element.css('color', attrs.dvColor);
			}
		};
	});