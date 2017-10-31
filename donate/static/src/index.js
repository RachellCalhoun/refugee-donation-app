angular.module("refugeeapp",["ngRoute", "ngCookies"]); //creating module
angular.module("refugeeapp") //calling module
    .config(function($routeProvider, $locationProvider){
        $locationProvider.hashPrefix("");
        $routeProvider.when("/register", {
            templateUrl:"/static/templates/register.html",
            controller:"userController"
        })
        $routeProvider.when("/donations", {
            templateUrl:"/static/templates/donate_list.html",
            controller:"donateController",
            auth:"auth"
        })
        $routeProvider.when("/requests", {
            templateUrl:"/static/templates/request_list.html",
            controller:"requestController",
            auth:"auth"
        })
        $routeProvider.when("/request/edit/new", {
            templateUrl:"/static/templates/request_edit.html",
            controller:"requestController",
            auth:"auth"
        })
        $routeProvider.when("/landing", {
            templateUrl:"/static/templates/landing.html",
            controller:"userController"
        })

        $routeProvider.when("/welcome", {
            templateUrl:"/static/templates/welcome.html",
        })
        $routeProvider.when("/donate/:donateId", {
            templateUrl:"/static/templates/donate_detail.html",
            controller:"donateDetailController",
        })
        $routeProvider.when("/donate/edit/new", {
            templateUrl:"/static/templates/donate_edit.html",
            controller:"donateEditController",
        })
        $routeProvider.when("/myinterests", {
            templateUrl:"/static/templates/myinterests.html",
            controller:"myinterestsController",
        })
        $routeProvider.when("/myrequests", {
            templateUrl:"/static/templates/myrequests.html",
            controller:"myrequestsController",
        })
        $routeProvider.when("/letmehelp", {
            templateUrl:"/static/templates/letMeHelp.html",
            controller:"letMeHelpController",
        })
        $routeProvider.when("/mydonations", {
            templateUrl:"/static/templates/mydonations.html",
            controller:"mydonationsController",
        })
        $routeProvider.otherwise({
            redirectTo:"/landing"
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
    .controller("mainController", function($scope, sessionSvc, $location){
        $scope.isLoggedIn = sessionSvc.isLoggedIn();
        $scope.$on("SESSION_STATE_CHANGED", function(){
            $scope.isLoggedIn = sessionSvc.isLoggedIn();
        })
        $scope.logout = function(){
            sessionSvc.set(null);
            $location.path("/")
            apiSvc.post("user/logout").then(function(response){

                console.log(response);
            }, function(response){
                console.log(response)
            })
        }
    })
    // .controller("peopleController", function($scope){
    //     $scope.people = [];
    //     $scope.person = {};
    //     $scope.add = function(person){
    //         $scope.people.push(angular.copy(person));
    //         $scope.person = {}
    //     };

    // })


