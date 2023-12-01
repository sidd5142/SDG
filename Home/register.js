app.controller(
  "RegistrationController",
  function ($scope, $http, $location, $state) {
    $scope.register = function () {
      var data = {
        username: $scope.username,
        first_name: $scope.firstname,
        last_name: $scope.lastname,
        email: $scope.email,
        mission: $scope.Mission,
        password: $scope.password,
        name: $scope.Ngo_name,
        user_type: "NGO",
      };
      console.log(data);

      $http
        .post(apiUrl + "register", data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    $scope.login = function () {
      console.log("uj");
      $location.path("/login");
    };
  }
);

app.controller("SignUpController", [
  "$scope",
  "$http",
  "$location",
  "$state",

  function ($scope, $http, $location,$state) {
    $scope.login = function () {
      $location
      // $location.path("/homepage")
      let login = {
        username: $scope.loginName,
        password: $scope.loginPassword,
      };
      console.log(login);
      $http
        .post(apiUrl + "login_view", login, {
          withCredentials: true,
        })
        .then(function (response) {
          console.log(response.data);
          if (response.data.message == "Admin logged in") {
            // $location.path("/voul");
            $state.go("voul")
            // window.location.href = "/Clone/vol.html";


          } else {
            // $location.path("/volunteer");
            window.location.href = "/Clone/index.html";
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      // }
    };
  },
]);

app.controller(
  "VolunteerController",
  function ($scope, $http, $location, $state) {
    $scope.register = function () {
      var data = {
        username: $scope.username,
        first_name: $scope.firstname,
        last_name: $scope.lastname,
        email: $scope.email,
        password: $scope.password,
        user_type: "volunteer",
      };
      console.log(data);

      $http
        .post(apiUrl + "register", data)
        .then(function (response) {
          console.log(response);
          $location.path("/dashboard");
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    $scope.login = function () {
      console.log("uj");
      $location.path("/login");
    };
  }
);
