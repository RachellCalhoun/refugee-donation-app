angular.module("refugeeapp")
.directive("lastDonations", function(apiSvc){
    return{
        restrict:"E",
        templateUrl:"/static/templates/lastDonations.html",
        link: function($scope, attributes){
            apiSvc.get("donate").then(function(response){
                $scope.donations = response.data;
            });
        }

    }
})
