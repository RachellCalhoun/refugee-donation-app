angular.module("refugeeapp")
.controller("letMeHelpController", function ($scope, apiSvc, sessionSvc) {
    $scope.requestmatches = [];
    var user = sessionSvc.getUser();
    function list(){
        apiSvc.get("requestmatch", { "interested": user.userId }).then(function(response){
            $scope.requestmatches = response.data.objects.map(function(r){
                if (r.request.location.indexOf("lat") > -1) {
                    r.request.location = JSON.parse(r.request.location);
                    r.request.mapUrl = "http://maps.google.com/maps?q=loc:" + r.request.location.lat + "," + r.request.location.lng;
                }
                else {
                    r.request.mapUrl = "http://maps.google.com/maps?q=" + r.request.location;
                }
                return r;
            })
            
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
