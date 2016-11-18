angular.module("refugeeapp")
    .controller("peopleController", function($scope, $http){
        $scope.people = [];
        $scope.person = {};
        $scope.add = function(person){
            //api service
            $http.post("/api/v1/people/?format=json", person).then(function(p){
                list()
            })

        };
        function list(){
            $http.get("/api/v1/people/?format=json").then(function(response){
                $scope.people = response.data.objects
            })
        }
        list()
    })
