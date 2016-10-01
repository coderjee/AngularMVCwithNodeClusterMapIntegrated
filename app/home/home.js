almostEverythingControllers.controller('HomeCtrl', function ($scope, autoSuggestServices, mapService, placeDetail) {

    // Initialize a MapmyIndia Map by simply calling new MapmyIndia.Map() and passing it, at the minimum the div object in which you want the map populated. All others parameters are optional...

    var map = new MapmyIndia.Map("map", { center: [28.61, 77.23], zoomControl: true, hybrid: true }); /*map initialized*/

    // MapmyIndia interactive map API is based on Leaflet, a popular and powerful open source interactive mapping API
    // Once you initialize a MapmyIndia Map, you can access all leaflet functionality through the global Leaflet singlet (class/object), "L" and by passing it the "map" variable we initialize the MapmyIndia Map into.

    // for example to add a marker to the map, simply add the line of code below. More documentation on Leaflet and plugins are available at leafletjs.org
    // L.marker([28.61, 77.23]).addTo(map);

    $scope.getSuggestedResult = function () {
        $scope.hideSugg = true;
        autoSuggestServices.get({ q: $scope.searchKeyword }, function (resp) {
            console.log(resp)
            $scope.suggestion = resp.results;

        }, function (err) {
            console.log(err)
        });
    }

    $scope.placeDetail = function (placeId) {
        $scope.hideSugg = false;
        placeDetail.get({ place_id: placeId }, function (resp) {
            var result = resp.results[0];
            $scope.searchedResult = result;
            addMarker(result.latitude, result.longitude)
        });
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        addMarker(position.coords.latitude, position.coords.longitude)
    }

    addMarker = function (lat, lng) {
        var pt = new L.LatLng(lat, lng);
        L.marker(pt).addTo(map);
        map.setView(pt, 8);
    }

    // getLocation();

});