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
        }

    }
})
