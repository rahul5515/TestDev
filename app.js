var App = angular.module('App', []);


App.config(['$routeProvider', function($routeProvider)
{  
	$routeProvider.     
	when('/Account', 
	{	
templateUrl: 'Account.html',	
controller: 'AccountController'
	}).     
	when('/Loan', 
	{	
templateUrl: 'Loan.html',	
controller: 'LoanController'
	})
	.otherwise({
redirectTo: '/Account'
	});
}]);


App.controller('TodoCtrl', function($scope, $http, $location) {
	$http.get('todos.json')
	.then(function(res){
		$scope.todos = res.data;             
	});		
	
});

App.controller('AccountController', function($scope, $http, $routeParams) {
	
});

App.controller('LoanController', function($scope) {	
	$scope.name = "Rahul";
	$scope.date = new Date(); 

});

App.controller('DashboardHKController', function($scope, $http) {
	$http.get('todos.json')
	.then(function(res){
		$scope.todos1 = res.data;            
	});
});