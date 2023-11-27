var app = angular.module("myApp", ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) { 
	$stateProvider
	    .state('Registration', {
            url: '/register',
            templateUrl: '/Home/registration.html',
            controller: 'RegistrationController'
        }) 
        .state('SignUp', {
            url: '/login',
            templateUrl: '/Home/login.html',
            controller: 'SignUpController'
        }) 
        .state('volunteer', {
            url: '/volunteer',
            templateUrl: '/Home/volunteer.html',
            controller: 'VolunteerController'
        }) 
        $urlRouterProvider.otherwise('/login');

}]) ;
