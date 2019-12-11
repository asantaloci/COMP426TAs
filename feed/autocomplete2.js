
let place2;
window.onload = function () {
initMap2();

}
function initMap2() {

    var map2 = new google.maps.Map(document.getElementById('map2'), {
      center: {lat: 35.9132, lng: -79.0558},
      zoom: 13,
      styles:[
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8ec3b9"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1a3646"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#4b6878"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#64779e"
        }
      ]
    },
    {
      "featureType": "administrative.province",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#4b6878"
        }
      ]
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#334e87"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#283d6a"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6f9ba5"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3C7680"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#304a7d"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#98a5be"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2c6675"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#255763"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#b0d5ce"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#98a5be"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#283d6a"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3a4762"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#0e1626"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#4e6d70"
        }
      ]
    }
  ]
    });
      var card2 = document.getElementById('pac-card2');
      var input2 = document.getElementById('pac-input2');
      // var types = document.getElementById('type-selector');
      var strictBounds2 = document.getElementById('strict-bounds-selector');

      map2.controls[google.maps.ControlPosition.TOP_RIGHT].push(card2);

      var autocomplete2 = new google.maps.places.Autocomplete(input2);


      // Bind the map's bounds (viewport) property to the autocomplete object,
      // so that the autocomplete requests use the current map bounds for the
      // bounds option in the request.
      autocomplete2.bindTo('bounds', map2);


      // Set the data fields to return when the user selects a place.
      autocomplete2.setFields(
          ['address_components', 'geometry', 'icon', 'name']);

      var infowindow2 = new google.maps.InfoWindow();
      var infowindowContent2 = document.getElementById('infowindow-content2');
      infowindow2.setContent(infowindowContent2);

      var marker2 = new google.maps.Marker({
        map: map2,
        anchorPoint: new google.maps.Point(0, -29)

      });

      autocomplete2.addListener('place_changed', function() {

        infowindow2.close();
        marker2.setVisible(false);
        place2 = autocomplete2.getPlace();
        console.log(place2); //WOW
        if (!place2.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place2.name + "'");
          return;
        }

        // If the place has a geometry, then present it on a map.
        if (place2.geometry.viewport) {
          map2.fitBounds(place2.geometry.viewport);

        } else {
          map2.setCenter(place2.geometry.location);
          map2.setZoom(17);  // Why 17? Because it looks good.
        }
        marker2.setPosition(place2.geometry.location);
        marker2.setVisible(true);

        var address2 = '';
        if (place2.address_components) {
          address2 = [
            (place2.address_components[0] && place2.address_components[0].short_name || ''),
            (place2.address_components[1] && place2.address_components[1].short_name || ''),
            (place2.address_components[2] && place2.address_components[2].short_name || '')
          ].join(' ');
        }
        // console.log(place.address_components[0]);
        // console.log(place.address_components[0]["long_name"]);
        console.log(place2.name);
        let location2 = place2.name;
        console.log(location2);
        document.getElementById("to").innerHTML=location2;

        infowindowContent2.children['place-icon'].src = place2.icon;
        infowindowContent2.children['place-name'].textContent = place2.name;
        infowindowContent2.children['place-address'].textContent = address2;
        infowindow2.open(map2, marker2);

      });

      // Sets a listener on a radio button to change the filter type on Places
      // Autocomplete.
      function setupClickListener2(id2, types2) {
        var radioButton2 = document.getElementById(id2);
        radioButton2.addEventListener('click', function() {
          autocomplete2.setTypes(types2);

        });
      }

      setupClickListener2('changetype-all', []);
      setupClickListener2('changetype-address', ['address']);
      setupClickListener2('changetype-establishment', ['establishment']);
      setupClickListener2('changetype-geocode', ['geocode']);

      document.getElementById('use-strict-bounds')
          .addEventListener('click', function() {
            console.log('Checkbox clicked! New state=' + this.checked);
            autocomplete2.setOptions({strictBounds: this.checked});


          });
        }

// get place for the information
// where
// let $location = $($retweet.siblings('.retweetbox')[0]);
