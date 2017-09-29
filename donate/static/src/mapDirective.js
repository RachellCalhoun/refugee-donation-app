angular.module("refugeeapp")
.directive("map", function(){
    return{
        restrict:"E",
        templateUrl:"/static/templates/map.html",
        transclude:true,
        scope:{
            location:"=",
            editable: "="
        },
        link: function($scope, elem, attributes){
            var initpos = { lat: -34.397, lng: 150.644 };
            if ($scope.location) {
                initpos = $scope.location
            }
            var map = new google.maps.Map(elem.children(0).children(0)[0], {
            center: initpos,
            zoom: 10, 
            draggable: !!$scope.editable
            });
            function setCenter(position){
                map.setCenter(position);
                $scope.location = position;
            }
            $scope.locate=function(){
                navigator.geolocation.getCurrentPosition(function(pos){
                    setCenter({lat:pos.coords.latitude, lng:pos.coords.longitude})
                }, function(error){
                    console.log(error)
                },{
                    enableHighAccuracy:true,
                    timeout:5000,
                    maximumAge:0,
                })
            }
            if ($scope.editable) {
                // Create the search box and link it to the UI element.
                var input = document.getElementById('pac-input');
                var searchBox = new google.maps.places.SearchBox(input);
                map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

                searchBox.addListener('places_changed', function() {
                var places = searchBox.getPlaces();

                if (places.length == 0) {
                    return;
                }

                places.forEach(function(place) {
                    if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                    }
                    setCenter(place.geometry.location)

                });
                });
            }; 
        }

    }
})
