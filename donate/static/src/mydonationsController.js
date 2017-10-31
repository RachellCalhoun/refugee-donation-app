angular.module("refugeeapp")
.controller("mydonationsController", function ($scope, apiSvc, sessionSvc) {
    $scope.donations = [];
    $scope.user = sessionSvc.getUser();
    function list(){
        apiSvc.get("donate", { "author": $scope.user.userId }).then(function(response){
            $scope.donations = response.data;
        });
    }
    list();
    $scope.remove = function(donate){
        apiSvc.remove("donate", donate.id).then(function(response){
            list();
        });
    };
    
 })
