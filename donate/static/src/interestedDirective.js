angular.module("refugeeapp")
.directive("interestedIn", function(apiSvc){
    return{
        restrict:"E",
        templateUrl:"/static/templates/interestedDirective.html",
        link: function($scope, $el, attrs){
            $scope.donatematches = [];
            
            apiSvc.get("donationmatch", { "donate": attrs.donateId }).then(function(response){
                $scope.donatematches = response.data.objects;
            });
            $scope.approve = function(dm) {
                apiSvc.put("donationmatch/" + dm.id, { donate:dm.donate.resource_uri, interested:dm.interested.resource_uri, approve_contact:true }).then(function(response){
                    // list();
                });
            }
        }

    }
})
