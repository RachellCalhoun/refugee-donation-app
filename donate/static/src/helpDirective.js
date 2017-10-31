angular.module("refugeeapp")
.directive("volunteerHelp", function(apiSvc){
    return{
        restrict:"E",
        templateUrl:"/static/templates/helpDirective.html",
        link: function($scope, $el, attrs){
            $scope.requestmatches = [];
            function list() {
                apiSvc.get("requestmatch", { "request": attrs.requestId }).then(function(response){
                    $scope.requestmatches = response.data;
                });
            };
            $scope.approve = function(rm) {
                apiSvc.put("requestmatch/" + rm.id, { request:rm.request.resource_uri, interested:rm.interested.resource_uri, approve_contact:true }).then(function(response){
                    list();
                });
            }
            $scope.disapprove = function(rm) {
                apiSvc.put("requestmatch/" + rm.id, { request:rm.request.resource_uri, interested:rm.interested.resource_uri, approve_contact:false }).then(function(response){
                    list();
                });
            }
            list();
        }

    }
})
