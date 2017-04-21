angular.module("refugeeapp")
    .controller("donateDetailController", function($scope, apiSvc, $routeParams){
        $scope.donate = {};

        function list(){
            apiSvc.get("donate/"+$routeParams.donateId).then(function(response){
                console.log(response);
                $scope.donate = response.data;
            });
        }
        list();

    });

