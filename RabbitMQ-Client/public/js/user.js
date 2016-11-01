//loading the 'login' angularJS module
var user = angular.module('user', []);
//defining the login controller
user.controllers

user.controller('user', function($scope, $http) {
	$scope.invalid_user = true;
	$scope.checkUser = function() {
			$http({
	            method: 'POST',
	            url: '/signin',
	            data: { "username": $scope.email, "password": $scope.password }
	            
	         }).success(function(response){
	           
	            alert(JSON.stringify(response));
	            
	            if(response.login == "Success")
	           		window.location = '/success_login';
	            else
	            	window.location = '/fail_login';
	        }).error(function(error){
	            alert("error");
	        });
	}	
	
	$scope.register = function() {
		var email = $scope.email;
		var firstName = $scope.firstName;
		var lastName = $scope.lastName;
		var password = $scope.password;
		
		if(($scope.email == "" || $scope.password == "" || $scope.firstName == "" || $scope.tel == "" ||
				$scope.email == undefined || $scope.password == undefined || $scope.firstName == undefined)){
			alert("Enter Mandatory details");
		}
		else{
		$http({
			method : "POST",
			url : '/register',
			data : {
				"email" : $scope.email,
				"password" : $scope.password,
				"firstname": firstName,
				"lastname": lastName,
			}
		}).success(function(data) {
			if(data.register == "Success"){
				alert("register success");
				window.location = '/signin';
			}
            else
				alert("register failed");
//            	window.location = '/fail_login';
		}).error(function(error) {
		});
		}
	}
	
});