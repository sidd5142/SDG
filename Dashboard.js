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
