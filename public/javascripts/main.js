angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
		
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', "$http", function($scope, $http){
		
		$http.get('/api/applicants')
		.then(function(returnData){
			console.log('GET : ', returnData)
			$scope.applicants = returnData.data
		})

	}]);
