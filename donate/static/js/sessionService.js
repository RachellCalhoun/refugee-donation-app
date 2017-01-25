angular.module("refugeeapp")
    .factory("sessionSvc", function($window){
        var sessionObject = null;
        function init(){
            sessionObject = $window.sessionStorage.getItem("sessionObject")
        }
        function isLoggedIn(){
            return sessionObject;
        }
        function set(obj){
            sessionObject = JSON.stringify(obj);
            $window.sessionStorage.setItem("sessionObject", sessionObject)
        }
        return {
            init:init,
            isLoggedIn:isLoggedIn,
            set:set,
        }
    })
