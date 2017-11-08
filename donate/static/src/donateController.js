angular.module("refugeeapp")
    .controller("donateController", function ($scope, apiSvc, sessionSvc) {
        $scope.donations = [];
        $scope.user = sessionSvc.getUser();
        function list() {
            apiSvc.get("donate/not_interested", { "user": $scope.user.userId })
            apiSvc.get("donationmatch", { "interested": $scope.user.userId }).then(function (response) {
                var myinterests = response.data.objects.map(function (d) {
                    return d.donate.id;
                })
                apiSvc.get("donate").then(function (response) {
                    $scope.donations = response.data.objects.filter(function (d) {
                        if (d.location.indexOf("lat") > -1) {
                            d.location = JSON.parse(d.location);
                            d.mapUrl = "http://maps.google.com/maps?q=loc:" + d.location.lat + "," + d.location.lng;
                        }
                        else {
                            d.mapUrl = "http://maps.google.com/maps?q=" + d.location;
                        }
                        return myinterests.indexOf(d.id) == -1;
                    });
                });
            });
        }
        list();
        $scope.remove = function (donate) {
            apiSvc.remove("donate", donate.id).then(function (response) {
                list();
            });
        };
        $scope.interested = function (donate) {
            apiSvc.post("donationmatch", { donate: donate.resource_uri }).then(function (response) {
                list();
            });
        };
    });

