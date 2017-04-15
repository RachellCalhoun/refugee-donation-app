angular.module("refugeeapp")
    .factory("sessionSvc", function($window, $rootScope){
        var sessionObject = null;
        function init(){
            sessionObject = $window.sessionStorage.getItem("sessionObject")
        }
        function isLoggedIn(){
            return sessionObject;
        }
        function set(obj){
            if (obj){
            sessionObject = JSON.stringify(obj);
            $window.sessionStorage.setItem("sessionObject", sessionObject)
            }
            else{
                sessionObject = null;
                $window.sessionStorage.removeItem("sessionObject");
            }
            $rootScope.$broadcast("SESSION_STATE_CHANGED");

        }
        return {
            init:init,
            isLoggedIn:isLoggedIn,
            set:set,
        }
    })
