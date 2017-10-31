angular.module("refugeeapp")
.directive("interestedIn", function(apiSvc){
    return{
        restrict:"E",
        templateUrl:"/static/templates/interestedDirective.html",
        link: function($scope, $el, attrs){
            $scope.donatematches = [];
            function list() {
                apiSvc.get("donationmatch", { "donate": attrs.donateId }).then(function(response){
                    $scope.donatematches = response.data;
                });
            };
            $scope.approve = function(dm) {
                apiSvc.put("donationmatch/" + dm.id, { donate:dm.donate.resource_uri, interested:dm.interested.resource_uri, approve_contact:true }).then(function(response){
                    list();
                });
            }
            $scope.disapprove = function(dm) {
                apiSvc.put("donationmatch/" + dm.id, { donate:dm.donate.resource_uri, interested:dm.interested.resource_uri, approve_contact:false }).then(function(response){
                    list();
                });
            }
            list();
        }

    }
})
