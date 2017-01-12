function ContactController($scope, $timeout) {
	$scope.name = 'Craig';
	$timeout(function(){
		$scope.name = 'Craig Iturbe';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
