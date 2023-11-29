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
