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
          .post(
            "https://9549-103-72-6-89.ngrok-free.app/UnityGoals/register",
            data
          )
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
            "https://bf07-103-72-6-89.ngrok-free.app/UnityGoals/login_view",
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
            "https://bf07-103-72-6-89.ngrok-free.app/UnityGoals/register",
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