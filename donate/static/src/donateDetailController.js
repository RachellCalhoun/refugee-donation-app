angular.module("refugeeapp")
    .controller("donateDetailController", function($scope, apiSvc, $routeParams, sessionSvc, $location){
        $scope.donate = {};
        $scope.user = sessionSvc.getUser();
        $scope.interest;     
        function list(){
            apiSvc.get("donationmatch", { "interested": $scope.user.userId, "donate": $routeParams.donateId }).then(function (response) {                
                $scope.interest = response.data.objects.filter(function(d){
                    return d.interested.id === $scope.user.userId
                }).pop()
                apiSvc.get("donate/"+$routeParams.donateId).then(function(response){
                    console.log(response);
                    var data = response.data;
                    if (data.location) {
                        data.location = JSON.parse(data.location)
                    }
                    $scope.donate = data;
                });
            });
        }
        list();
        $scope.remove = function (donate) {
            apiSvc.remove("donate", donate.id).then(function (response) {
                $location.path("/#/donations");
            });
        };
        $scope.removeInterest = function () {
            apiSvc.remove("donationmatch", $scope.interest.id ).then(function (response) {
                list();
            });
        };
        $scope.interested = function (donate) {
            apiSvc.post("donationmatch", { donate: donate.resource_uri }).then(function (response) {
                list();
            });
        };
    });

