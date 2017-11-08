angular.module("refugeeapp")
    .controller("myinterestsController", function ($scope, apiSvc, sessionSvc) {
        $scope.matches = [];
        var user = sessionSvc.getUser();
        function list(){
            apiSvc.get("donationmatch", { "interested": user.userId }).then(function(response){
                $scope.matches = response.data.objects.map(function (d) {
                    if (d.donate.location.indexOf("lat") > -1) {
                        d.donate.location = JSON.parse(d.donate.location);
                        d.donate.mapUrl = "http://maps.google.com/maps?q=loc:" + d.donate.location.lat + "," + d.donate.location.lng;
                    }
                    else {
                        d.donate.mapUrl = "http://maps.google.com/maps?q=" + d.donate.location;
                    }
                    return d;
                });
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
 