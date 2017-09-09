var app = angular.module("myApp", ["ngRoute"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when("/home", {
            templateUrl: "views/home.html",
            controller: "homeController"
        })
        .when("/courses", {
            templateUrl: "views/courses.html",
            controller: "coursesController"
        })
        .when("/students", {
            templateUrl: "views/students.html",
            controller: "studentsController"
        })
        .otherwise({
            redirectTo: "/home"
        });
    
}]);

app.controller("homeController", ["$scope", function($scope) {
    $scope.message = "Home Page";
}]);

app.controller("coursesController", ["$scope", function($scope) {
    $scope.message = "Courses we offer";
    $scope.courses = [
        {"name": "HTML",
         "info": " (Hypertext Markup Language) is the set of markup symbols or codes inserted in a file " +
         "intended for display on a World Wide Web browser page. The markup tells the Web browser how to " +
         "display a Web page's words and images for the user."},
        {"name": "CSS",
         "info": "CSS (Cascading Style Sheets) describes how HTML elements are to be displayed on screen, " +
         "paper, or in other media. It saves a lot of work and can control the layout of multiple web pages " +
         "all at once."},
        {"name": "Javascript",
         "info": "JavaScript is a cross-platform, object-oriented scripting language. It is a small and " +
         "lightweight language. Inside a host environment (for example, a web browser), JavaScript can be " +
         "connected to the objects of its environment to provide programmatic control over them."},
        {"name": "AngularJS",
         "info": "An MVC type framework developed by Google that lets you build dynamic web applications."},
        {"name": "Python",
         "info": "An interpreted language, Python has a design philosophy that emphasizes code readability "+
         "(notably using whitespace indentation to delimit code blocks rather than curly brackets or keywords), "+
        "and a syntax that allows programmers to express concepts in fewer lines of code than might be used "+
         "in languages such as C++."}
    ];
}]);

app.controller("studentsController", ["$scope", function($scope) {
    $scope.message = "Lists of Students";
    $scope.students = [
        {"name": "John",
         "surname": "Smith",
         "age": "22",
         "town": "Haselmere",
         "photo": "",
         "courses": [["HTML", "5"], ["CSS", "3"]]},
        {"name": "Mary",
         "surname": "White",
         "age": "25",
         "town": "Godalming",
         "photo": "",
         "courses": [["HTML", "5"], ["CSS", "4"], ["JavaScript", "1"]]},
        {"name": "Harry",
        "surname": "Black",
        "age": "30",
        "town": "Aldershot",
        "photo": "",
        "courses": [["JavaScript", "3"], ["AngularJS", "2"]]},
        {"name": "Bridget",
        "surname": "Green",
        "age": "28",
        "town": "Woking",
        "photo": "",
        "courses": [["AngularJS", "5"], ["Python", "3"]]}
    ]
}]);