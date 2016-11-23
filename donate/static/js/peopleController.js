angular.module("refugeeapp")
    .controller("peopleController", function($scope, apiSvc){
        $scope.people = [];
        $scope.person = {};
        $scope.add = function(person){
            //api service
            apiSvc.then(function(p){
                list()
            })

        };
        function list(){
            apiSvc.then(function(response){
                $scope.people = response.data.objects
            })
        }
        list()
        function init() {
            apiSvc.getSchema("accounts").then(function(fields){
                $scope.fields = fields;
                $scope.donate.condition = $scope.fields.condition.default;
            })
            apiSvc.get("category").then(function(response){
                $scope.categories = response.data.objects;
            })
        }
        init();
    })
