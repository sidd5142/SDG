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
