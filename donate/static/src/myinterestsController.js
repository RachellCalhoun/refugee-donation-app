angular.module("refugeeapp")
    .controller("myinterestsController", function ($scope, apiSvc, sessionSvc) {
        $scope.matches = [];
        var user = sessionSvc.getUser();
        function list(){
            apiSvc.get("donationmatch", { "interested": user.userId }).then(function(response){
                $scope.matches = response.data;
            });
        }
        list();
        $scope.remove = function(dm){
            apiSvc.remove("donationmatch", dm.id).then(function(response){
                list();
            });
        };
        $scope.getStatus = function(dm) {
            if (dm.approve_contact) {
                return dm.donate.author.email;
            } else {
                return "pending";
            }
        }
     })
 