angular.module("refugeeapp",["ngRoute"]); //creating module
angular.module("refugeeapp") //calling module
    .config(function($routeProvider){
        $routeProvider.when("/people", {
            templateUrl:"/static/templates/user.html",
            controller:"userController"
        })
        $routeProvider.when("/donate", {
            templateUrl:"/static/templates/donate.html",
            controller:"donateController",
            auth:"auth"
        })
        $routeProvider.when("/request", {
            templateUrl:"/static/templates/requests.html",
            controller:"requestController",
            auth:"auth"
        })
        $routeProvider.when("/landing", {
            templateUrl:"/static/templates/landing.html",
            controller:"mainController"
        })
        $routeProvider.when("/login", {
            templateUrl:"/static/templates/login.html",
            controller:"userController"
        })
        $routeProvider.otherwise({
            redirectTo:"/login"
        })
    })
    .run(function(sessionSvc, $rootScope, $location){
        sessionSvc.init();
        $rootScope.$on("$routeChangeStart", function(event, next){
            if (next.auth && !sessionSvc.isLoggedIn()){
                event.preventDefault();
                alert("You are not logged in.");
                $location.path("/login");
            }
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


