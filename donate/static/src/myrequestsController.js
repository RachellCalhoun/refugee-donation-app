angular.module("refugeeapp")
.controller("myrequestsController", function ($scope, apiSvc, sessionSvc) {
    $scope.requests = [];
    $scope.user = sessionSvc.getUser();
    function list(){
        apiSvc.get("request", { "author": $scope.user.userId }).then(function(response){
            $scope.requests = response.data;
        });
    }
    list();
    $scope.remove = function(request){
        apiSvc.remove("request", request.id).then(function(response){
            list();
        });
    };
 })
