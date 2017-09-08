angular.module("refugeeapp")
    .controller("myinterestsController", function ($scope, apiSvc, sessionSvc) {
        $scope.matches = [];
        var user = sessionSvc.getUser();
        function list(){
            apiSvc.get("donationmatch", { "interested": user.userId }).then(function(response){
                $scope.matches = response.data.objects;
            });
        }
        list();
        $scope.remove = function(dm){
            apiSvc.remove("donationmatch", dm.id).then(function(response){
                list();
            });
        };
     })
