angular.module("refugeeapp")
    .factory("sessionSvc", function($window, $rootScope){
        var sessionObject = null;
        function init(){
            sessionObject = JSON.parse($window.sessionStorage.getItem("sessionObject"));
        }
        function isLoggedIn(){
            return !!sessionObject;
        }
        function getUser(){
            return sessionObject;
        }
        function set(obj){
            if (obj){
                sessionObject = obj;
                $window.sessionStorage.setItem("sessionObject", JSON.stringify(sessionObject));
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
            getUser:getUser,
        }
    })
