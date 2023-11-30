app.controller("VerifyController", function ($scope, $http, $window, $state) {
  $http
    .get(apiUrl + "")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});
