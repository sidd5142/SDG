var app = angular.module("myApp", ["ui.router"]);
var app = angular.module("myApp", ["ui.router"]);

app.config([
  "$stateProvider",
  "$urlRouterProvider",
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("Registration", {
        url: "/register",
        templateUrl: "/Home/registration.html",
        controller: "RegistrationController",
      })
      .state("SignUp", {
        url: "/login",
        templateUrl: "/Home/login.html",
        controller: "SignUpController",
      })
      .state("volunteer", {
        url: "/volunteer",
        templateUrl: "/Home/volunteer.html",
        controller: "VolunteerController",
      })
      .state("Dashboard", {
        url: "/dashboard",
        templateUrl: "Dashboard.html",
        controller: "DashboardController",
      })
      .state("Dashboard.Verification", {
        url: "/verification",
        templateUrl: "/Pages/Verification.html",
        controller: "VerifyController",
      })
      .state("Homepage", {
        url: "/homepage",
        templateUrl: "/HomePage/homepage.html",
        controller: "HomePageController",
      });
    $urlRouterProvider.otherwise("/homepage");
  },
]);