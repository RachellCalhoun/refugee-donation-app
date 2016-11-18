angular.module("refugeeapp",["ngRoute"]); //creating module
angular.module("refugeeapp") //calling module
    .config(function($routeProvider){
        $routeProvider.when("/people", {
            templateUrl:"/static/templates/people.html",
            controller:"peopleController"
        })
        $routeProvider.when("/donate", {
            templateUrl:"/static/templates/donate.html",
            controller:"donateController"
        })
        $routeProvider.when("/landing", {
            templateUrl:"/static/templates/landing.html",
            controller:"mainController"
        })
        $routeProvider.otherwise({
            redirectTo:"/landing"
        })
    })
    .controller("mainController", function($scope){
        $scope.name = "Rachell";
    })
    // .controller("peopleController", function($scope){
    //     $scope.people = [];
    //     $scope.person = {};
    //     $scope.add = function(person){
    //         $scope.people.push(angular.copy(person));
    //         $scope.person = {}
    //     };

    // })


