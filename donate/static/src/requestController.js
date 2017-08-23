angular.module("refugeeapp")
    .controller("requestController", function ($scope, apiSvc, sessionSvc, $location) {
        $scope.requests = [];
        $scope.request = {};
        $scope.fields = {};
        $scope.user = sessionSvc.getUser();
        $scope.add = function (request) {
            // $scope.donations.push(angular.copy(request));
            // $scope.request = {}
            request.location = JSON.stringify(request.location);
            apiSvc.post("request", request).then(function (d) {
                $location.path("/request")
            })

        };
        function list() {
            apiSvc.get("request").then(function (response) {
                $scope.requests = response.data.objects.map(function (r) {
                    if (r.location.indexOf("lat") > -1) {
                        r.location = JSON.parse(r.location);
                        r.mapUrl = "http://maps.google.com/maps?q=loc:" + r.location.lat + "," + r.location.lng;
                    }
                    else {
                        r.mapUrl = "http://maps.google.com/maps?q=" + r.location;
                    }
                    return(r)
                });

            });
        }
        list();
        function init() {
            apiSvc.getSchema("request").then(function (fields) {
                $scope.fields = fields;

            });
            apiSvc.get("category").then(function (response) {
                $scope.categories = response.data.objects;
            });

        }
        init();
        $scope.getSubCategories = function (category) {
            $scope.request.category = category.resource_uri;
            apiSvc.get("subcategory", { category: category.id }).then(function (response) {
                $scope.subcategories = response.data.objects;
            });
        };
        $scope.remove = function (request) {
            apiSvc.remove("request", request.id).then(function (response) {
                list();
            });
        };
        $scope.interested = function(request){
            apiSvc.post("requestmatch", { request:request.resource_uri }).then(function(response){
                list();
            });
        };
    });

