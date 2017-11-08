angular.module("refugeeapp")
.controller("myrequestsController", function ($scope, apiSvc, sessionSvc) {
    $scope.requests = [];
    $scope.user = sessionSvc.getUser();
    function list(){
        apiSvc.get("request", { "author": $scope.user.userId }).then(function(response){
            $scope.requests = response.data.objects.map(function (r) {
                if (r.location.indexOf("lat") > -1) {
                    r.location = JSON.parse(r.location);
                    r.mapUrl = "http://maps.google.com/maps?q=loc:" + r.location.lat + "," + r.location.lng;
                }
                else {
                    r.mapUrl = "http://maps.google.com/maps?q=" + r.location;
                }
                return r;
            })
        });
    }
    list();
    $scope.remove = function(request){
        apiSvc.remove("request", request.id).then(function(response){
            list();
        });
    };
 })
