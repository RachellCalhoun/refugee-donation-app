angular.module("refugeeapp")
    .controller("userController", function($scope, apiSvc, sessionSvc){
        $scope.users = [];
        $scope.user = {};
        $scope.add = function(user){
            if(user.password !== user.confirmpassword){
                alert("Your passwords don't match");
                return;
            }
           apiSvc.post("user", user).then(function(){
                list()
            })

        };
        function list(){
            apiSvc.get("user").then(function(response){
                $scope.users = response.data.objects;
            });
        }
        list();
        $scope.login = function(user) {
            apiSvc.post("user/login", user).then(function(response){
                sessionSvc.set(response);
            }, function(response){
                console.log(response);
            });
            // http://hostname/api/user/login
        }
        $scope.logout = function() {
            apiSvc.post("user/logout").then(function(response){
                console.log(response);
            }, function(response){
                console.log(response)
            })
        }
    })
