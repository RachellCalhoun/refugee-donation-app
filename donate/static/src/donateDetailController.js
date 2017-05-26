angular.module("refugeeapp")
    .controller("donateDetailController", function($scope, apiSvc, $routeParams){
        $scope.donate = {};

        function list(){
            apiSvc.get("donate/"+$routeParams.donateId).then(function(response){
                console.log(response);
                var data = response.data;
                if (data.location) {
                    data.location = JSON.parse(data.location)
                }
                $scope.donate = data;
            });
        }
        list();

    });

