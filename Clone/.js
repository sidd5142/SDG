app.controller("voultController", function ($scope, $http, $window, $state) {
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