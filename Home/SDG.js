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
        .post("", data)
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
      console.log("uj");
    };
    // $http
    //   .get(apiUrl + "/hospitalapp/checkuser/", {
    //     withCredentials: true,
    //   })
    //   .then(function (response) {
    //     console.log(response.status);
    //     if (response.status == 200) {
    //       $location.path("/dashboard");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    $scope.login = function () {
      let login = {
        username: $scope.loginName,
        password: $scope.loginPassword,
      };
      console.log(login.username);
      if (
        login.username == null ||
        login.username == "" ||
        login.password == ""
      ) {
        Swal.fire({
          icon: "error",
          text: "Enter all details!",
        });
      } else if (login.username != null && login.password == null) {
        Swal.fire({
          icon: "error",
          title: "Enter valid password!",
          text: "Password Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters",
        });
      } else {
        $http
          .post(apiUrl + "/hospitalapp/login_all/", login, {
            withCredentials: true,
          })
          .then(function (response) {
            console.log(response.data);
            $location.path("/dashboard");
          })
          .catch(function (error) {
            console.log(error.data);
            Swal.fire({
              icon: "error",
              text: error.data.message,
            });
          });
      }
    };
  },
]);

app.controller(
  "VolunteerController",
  function ($scope, $http, $location, $state) {
    $scope.login = function () {
      $location.path("/login");
    };
  }
);

app.controller(
  "DashboardController",
  function ($scope, $http, $window, $state) {}
);
