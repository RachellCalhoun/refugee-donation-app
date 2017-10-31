angular.module("refugeeapp")
.directive("lastRequests", function(apiSvc){
    return{
        restrict:"E",
        templateUrl:"/static/templates/lastRequests.html",
        link: function($scope, attributes){
            apiSvc.get("request").then(function(response){
                $scope.requests = response.data;
            });
        }

    }
})