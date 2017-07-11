angular.module("refugeeapp")
    .controller("donateController", function($scope, apiSvc, sessionSvc){
        $scope.donations = [];
        $scope.user = sessionSvc.getUser();
        function list(){
            apiSvc.get("donate").then(function(response){
                $scope.donations = response.data.objects;
            });
        }
        list();
        $scope.remove = function(donate){
            apiSvc.remove("donate", donate.id).then(function(response){
                list();
            });
        };
        $scope.interested = function(donate){
            apiSvc.post("donationmatch", { donate:donate.resource_uri }).then(function(response){
                list();
            });
        };
    });

