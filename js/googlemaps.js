 function initialize() {
     var googleCambridge = new google.maps.LatLng(42.362710, -71.087272);
     var mapOptions = {
         center: googleCambridge,
         mapTypeId: google.maps.MapTypeId.ROADMAP,
         scrollwheel: false,
         zoom: 13
     };
     var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
     var marker = new google.maps.Marker({
         position: googleCambridge,
         map: map,
         title: "Blueprint"
     });
     var infoWindow = new google.maps.InfoWindow({
         content: "<strong>Google Cambridge</strong><br>5 Cambridge Center<br>Cambridge, MA"
     });
     google.maps.event.addListener(marker, 'click', function() {
         infoWindow.open(map, marker);
     });
 }
 google.maps.event.addDomListener(window, 'load', initialize);
