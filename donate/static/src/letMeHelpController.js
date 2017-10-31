angular.module("refugeeapp")
.controller("letMeHelpController", function ($scope, apiSvc, sessionSvc) {
    $scope.requestmatches = [];
    var user = sessionSvc.getUser();
    function list(){
        apiSvc.get("requestmatch", { "interested": user.userId }).then(function(response){
            $scope.requestmatches = response.data;
        });
    }
    list();
    $scope.remove = function(rm){
        apiSvc.remove("requestmatch", rm.id).then(function(response){
            list();
        });
    };
    $scope.getStatus = function(rm) {
        if (rm.approve_contact) {
            return rm.request.author.email;
        } else {
            return "pending";
        }
    }
 })
