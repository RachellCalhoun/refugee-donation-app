angular.module("refugeeapp")
.controller("myrequestsController", function ($scope, apiSvc, sessionSvc) {
    $scope.matches = [];
    var user = sessionSvc.getUser();
    function list(){
        apiSvc.get("requestmatch", { "interested": user.userId }).then(function(response){
            $scope.requestmatches = response.data.objects;
        });
    }
    list();
 })
