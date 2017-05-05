angular.module("refugeeapp")
    .controller("donateEditController", function($scope, apiSvc, $location){
        $scope.donate = {};
        $scope.fields = {};
        $scope.add = function(donate){
            // $scope.donations.push(angular.copy(donate));
            // $scope.donate = {}
            var fd = new FormData();
            for(var key in donate){
                if (donate.hasOwnProperty(key)){
                    fd.append(key, donate[key])
                }
            }
           apiSvc.multipartpost("donate", fd).then(function(d){
                $location.path("#/donate")
            })

        };
        function init() {
            apiSvc.getSchema("donate").then(function(fields){
                $scope.fields = fields;
                $scope.donate.condition = $scope.fields.condition.default;

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
        //todo:needthis? check permissions
        $scope.remove = function(donate){
            apiSvc.remove("donate", donate.id).then(function(response){
                list();
            });
        };

    });

