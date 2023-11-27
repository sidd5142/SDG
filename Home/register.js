app.controller("RegistrationController", function ($scope, $http, $window, $state) {
    $scope.register = function(){
        var data = {
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            email: $scope.email,
            phonenumber: $scope.contact,
            password: $scope.password,
            confirmpassword: $scope.confpassword
        }
        console.log(data);
    }
})
app.controller("SignUpController", function ($scope, $http, $window, $state) {
    console.log("SiddYadav")
})

app.controller("VolunteerController", function ($scope, $http, $window, $state) {
})