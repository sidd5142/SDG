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
      .state("AdminDashboard", {
        url: "/Admin",
        templateUrl: "AdminDashboard.html",
        controller: "AdminController",
      })
      .state("Dashboard.Verification", {
        url: "/verification",
        templateUrl: "/Pages/Verification.html",
        controller: "VerifyController",
      })
      .state("Homepage", {
        url: "/homepage",
        templateUrl: "/Clone/index.html",
        controller: "HomePageController",
      })
     
      .state("Event", {
        url: "/event",
        templateUrl: "/Pages/event.html",
        controller: "eventController",
      })
      .state("voul", {
        url: "/voul",
        templateUrl: "/Clone/vol.html",
        controller: "voultController",
      });
    $urlRouterProvider.otherwise("/login");
  },
]);

const apiUrl = "https://10.21.162.155:8000/UnityGoals/";

app.controller("voultController", function ($scope, $http, $window, $state) {
  console.log("oihnin")
  $http
    .get(apiUrl + "login_view", {
      headers: {
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      withCredentials: true,
    })
    .then(function (response) {
      console.log(response);
      $scope.names = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  $scope.id = function (id) {
    console.log(id);
    localStorage.setItem("id", id);
  };
});

app.controller(
  "DashboardController",
  function ($scope, $http, $window, $state) {
    let Id = "";

    $http
      .get(apiUrl + "verify_ngo", {
        headers: {
          Accept: "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
        $scope.details = response.data;
        console.log($scope.details);
      })
      .catch(function (error) {
        console.log(error);
      });

    $scope.file = function () {
      console.log($scope.fileModel);
      $http
        .post(apiUrl + "verify_ngo", $scope.fileModel, {
          withCredentials: true,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    $scope.ohkay = function (id) {
      console.log(id);
      Id = id;
    };
    $scope.submit = function () {
      console.log();
      let formdata = new FormData();
      formdata.append("sdgs", $scope.select.id);
      formdata.append("title", $scope.project_name);
      formdata.append("status", $scope.project_title);
      formdata.append("location", $scope.location);
      formdata.append("project_image", $scope.fileModel);
      formdata.append("description", $scope.description);
      console.log(formdata);
      $http
        .post(apiUrl + "project_create", formdata, {
          headers: { "Content-Type": undefined },
          withCredentials: true,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    $http
      .get(apiUrl + "project_create", {
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response.data);
        $scope.names = response.data;
        console.log($scope.names);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
);

app.directive("fileModel", [
  "$parse",
  function ($parse) {
    return {
      restrict: "A",
      link: function (scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind("change", function () {
          scope.$apply(function () {
            var file = element[0].files[0];
            modelSetter(scope, file);
          });
        });
      },
    };
  },
]);

app.controller("AdminController", function ($scope, $http, $window, $location) {
  $http
    .get(apiUrl + "login_view", {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    })
    .then(function (response) {
      console.log(response.data);
      $scope.ngoRequests = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  $scope.Accept = function (id) {
    console.log(id);
    $http
      .post(apiUrl + `approve_verification/${id}`, id, {
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  $scope.Reject = function (id) {
    console.log(id);
    $http
      .post(apiUrl + `reject_verification/${id}`, id, {
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
});

app.controller("VerifyController", function ($scope, $http, $window, $state) {
  $scope.login = function () {
    let login = {
      username: $scope.loginName,
      password: $scope.loginPassword,
    };
    console.log(login);
    $http
      .get(apiUrl + "login_view", login, {
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response.data);
        // if (response.data.message == "ngo logged in") {
        $scope.ngoRequests = response.data;
        $location.path("/dashboard");
        // }
      })
      .catch(function (error) {
        console.log(error.data);
        Swal.fire({
          icon: "error",
          text: error.data.message,
        });
      });
  };

  $scope.Accept = function (id) {
    console.log(id);
  };
});

