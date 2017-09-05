angular.module("RouteController", [])
.controller("homeController", ["$scope", function($scope) {
    $scope.message = "Home Page";
}]);

app.controller("coursesController", ["$scope", function($scope) {
    $scope.message = "Courses we offer";
    $scope.courses = [
        {"name": "HTML"},
        {"name": "CSS"},
        {"name": "Javascript"},
        {"name": "AngularJS",
         "info": "An MVC type framework developed by Google that lets you build dynamic web applications."},
        {"name": "Python"}
    ];
}]);

app.controller("studentsController", ["$scope", function($scope) {
    $scope.message = "Lists of Students";
    $scope.students = [
        {"name": "John"},
        {"name": "Mary"},
        {"name": "Harry"},
        {"name": "Bridget"}
    ]
}]);