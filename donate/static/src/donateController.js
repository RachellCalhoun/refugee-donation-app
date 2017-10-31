angular.module("refugeeapp")
    .controller("donateController", function($scope, apiSvc, sessionSvc){
        $scope.donations = [];
        $scope.user = sessionSvc.getUser();
        function list(){
            apiSvc.get("donate/not_interested", { "user": $scope.user.userId })
            apiSvc.get("donationmatch", { "interested": $scope.user.userId }).then(function(response){
                var myinterests = response.data.map(function (d){
                    return d.donate.id;
                })
                apiSvc.get("donate").then(function(response){
                    $scope.donations = response.data.filter(function (d) {
                        return myinterests.indexOf(d.id) == -1;
                    });
                });
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

