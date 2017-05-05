angular.module("refugeeapp")
.directive("map", function(){
    return{
        restrict:"E",
        templateUrl:"/static/templates/map.html",
        transclude:true,
        link: function($scope, elem, attributes){
            var map = new google.maps.Map(elem.children(0).children(0)[0], {
            center: {lat: -34.397, lng: 150.644},
            zoom: 10
            });
            $scope.locate=function(){
                navigator.geolocation.getCurrentPosition(function(pos){
                    map.setCenter({lat:pos.coords.latitude, lng:pos.coords.longitude})
                }, function(error){
                    console.log(error)
                },{
                    enableHighAccuracy:true,
                    timeout:5000,
                    maximumAge:0,
                })
            }

        }

    }
})
