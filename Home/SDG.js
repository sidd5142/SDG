app.controller(
  "RegistrationController",
  function ($scope, $http, $location, $state) {
    $scope.register = function () {
      var data = {
        firstname: $scope.firstname,
        lastname: $scope.lastname,
        email: $scope.email,
        phonenumber: $scope.contact,
        password: $scope.password,
        confirmpassword: $scope.confpassword,
      };
      console.log(data);

      $http
        .post("https://5f2a-103-72-6-89.ngrok-free.app", data)
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

  function ($scope, $http, $location) {
    $scope.login = function () {
      let login = {
        username: $scope.loginName,
        password: $scope.loginPassword,
      };
      console.log(login);
      $http
        .post(
          "https://a08b-103-72-6-89.ngrok-free.app/UnityGoals/login_view",
          login,
          {
            withCredentials: true,
          }
        )
        .then(function (response) {
          console.log(response.data);
          // if (response.data.message == "ngo logged in") {
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
        .post(
          "https://a08b-103-72-6-89.ngrok-free.app/UnityGoals/register",
          data
        )
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
