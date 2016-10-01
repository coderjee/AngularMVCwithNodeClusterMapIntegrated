almostEverythingControllers.controller('IndexCtrl', function($scope, $location, $route) {

	//leftpanel tabs
	/**
	 * Start addind routes here
	 */
	$scope.leftTabs = [
		{
			heading:'Home',
			navURL:'/'
		}
	];

	// navigate from left side bar to specific view
	$scope.redirectTo = function (tabAdr) {
		$location.path(tabAdr);
		$location.url($location.path())
	};
});