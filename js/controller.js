var app = angular.module("MyApp", ['ngSanitize']);

/**
 * Controls the messages.
 * 
 * @param $scope
 * @param $http
 */
app.controller("PostsCtrl", function($scope, $http) {
	$http.defaults.useXDomain = true;
	delete $http.defaults.headers.common['X-Requested-With'];

	$scope.processHTML = function(html) {
		// Combine HTML
		return $scope.myHTML;
	}
	
	/**
	 * Vacation
	 */ 
	$scope.instruction = function(object) {
		if (document.getElementById("instruction").style.display == "block") {
			document.getElementById("instruction").style.display = "none";
			document.getElementById('instructionGroup').className = 'contact_group parent';
		} else {
			document.getElementById("instruction").style.display = "block";
			document.getElementById('instructionGroup').className = 'contact_group parent active';
		}
	}

	/**
	 * Info point
	 */
	$scope.alt = '';

	$scope.switchOnOff = function(object) {
		if (object.className == 'item parent') {
			$scope.alt = object.innerHTML;
			object.className = 'item parent active';
			object.innerHTML += '<ul class="site_submenu"><li class="item white-7"><div class="item_inner"><div class="item_txt"><a class="item_link" href="http://dev.ivm.at/ivm_live_iphone/faq_content_live.php?id=32&art=unknown&kat=Jahresblatt">Jahresblatt</a></div><span class="item_icon"></span></div></li><li class="item white-7"><div class="item_inner"><div class="item_txt"><a class="item_link" href="http://dev.ivm.at/ivm_live_iphone/faq_content_live.php?id=33&art=unknown&kat=Zeiterfassung">Zeiterfassung</a></div><span class="item_icon"></span></div></li></ul>';
		} else {
			object.className = 'item parent';
			object.innerHTML  = $scope.alt;
		}
	}
});
