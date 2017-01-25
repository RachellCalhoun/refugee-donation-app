angular.module("refugeeapp")
    .controller("requestController", function($scope, apiSvc){
        $scope.requests = [];
        $scope.request = {};
        $scope.fields = {};
        $scope.add = function(request){
            // $scope.donations.push(angular.copy(request));
            // $scope.request = {}
           apiSvc.post("request", request).then(function(d){
                list()
            })

        };
        function list(){
            apiSvc.get("request").then(function(response){
                $scope.requests = response.data.objects;
            });
        }
        list();
        function init() {
            apiSvc.getSchema("request").then(function(fields){
                $scope.fields = fields;

            });
            apiSvc.get("category").then(function(response){
                $scope.categories = response.data.objects;
            });

        }
        init();
        $scope.getSubCategories = function(category){
            apiSvc.get("subcategory",{category:category.id}).then(function(response){
                $scope.subcategories = response.data.objects;
            });
        };
        $scope.remove = function(request){
            apiSvc.remove("request", request.id).then(function(response){
                list();
            });
        };
    });

