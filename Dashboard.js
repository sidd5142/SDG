app.controller(
  "DashboardController",
  function ($scope, $http, $window, $state) {
    $http
      .get("https://a08b-103-72-6-89.ngrok-free.app/UnityGoals/verify_ngo", {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    [];
    $scope.add = function () {
      console.log($scope.files);
      $http
        .post(
          "https://a08b-103-72-6-89.ngrok-free.app/UnityGoals/verify_ngo",
          $scope.files
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
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
