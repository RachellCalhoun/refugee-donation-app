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
    .controller("peopleController", function($scope){
        $scope.people = [];
        $scope.person = {};
        $scope.add = function(person){
            $scope.people.push(angular.copy(person));
            $scope.person = {}
        };

    })
    .controller("donateController", function($scope, $http){
        $scope.donations = [];
        $scope.donate = {};
        $scope.add = function(donate){
            // $scope.donations.push(angular.copy(donate));
            // $scope.donate = {}
            $http.post("/api/v1/donate/?format=json", donate).then(function(d){
                list()
            })

        };
        function list(){
            $http.get("/api/v1/donate/?format=json").then(function(response){
                $scope.donations = response.data.objects
            })
        }
        list()
    })
