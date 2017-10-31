angular.module("refugeeapp")
    .controller("userController", function($scope, apiSvc, sessionSvc, $location){
        $scope.user = {};
        $scope.add = function(user){
            if(user.password !== user.confirmpassword){
                alert("Your passwords don't match");
                return;
            }
           apiSvc.post("user", user).then(function(){
                $location.path("/landing");
            })

        };
        $scope.login = function(user) {
            apiSvc.post("login", user).then(function(response){
                sessionSvc.set(response.data);
                $location.path("/welcome")
            }, function(response){
                console.log(response);
            });
            // http://hostname/api/user/login
        }
        $scope.logout = function() {
            sessionSvc.set(null);
            apiSvc.post("user/logout").then(function(response){
                console.log(response);
            }, function(response){
                console.log(response)
            })
        }
    })
