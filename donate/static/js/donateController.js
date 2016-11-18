angular.module("refugeeapp")
    .controller("donateController", function($scope, apiSvc){
        $scope.donations = [];
        $scope.donate = {};
        $scope.fields = {};
        $scope.add = function(donate){
            // $scope.donations.push(angular.copy(donate));
            // $scope.donate = {}
           apiSvc.post("donate", donate).then(function(d){
                list()
            })

        };
        function list(){
            apiSvc.get("donate").then(function(response){
                $scope.donations = response.data.objects;
            })
        }
        list()
        function init() {
            apiSvc.getSchema("donate").then(function(fields){
                $scope.fields = fields;
                $scope.donate.condition = $scope.fields.condition.default;
            })
            apiSvc.get("category").then(function(response){
                $scope.categories = response.data.objects;
            })
        }
        init();
    })

