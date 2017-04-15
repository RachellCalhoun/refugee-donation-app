angular.module("refugeeapp")
    .controller("donateController", function($scope, apiSvc){
        $scope.donations = [];
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
                list()
            })

        };
        function list(){
            apiSvc.get("donate").then(function(response){
                $scope.donations = response.data.objects;
            });
        }
        list();
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
        $scope.remove = function(donate){
            apiSvc.remove("donate", donate.id).then(function(response){
                list();
            });
        };
    });

