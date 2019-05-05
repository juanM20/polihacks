
var firebaseConfig = {
    apiKey: "AIzaSyBF_GZ2Ng3VePrGfmqSJObROzoz-W7QRlU",
    authDomain: "hackaton-b5b58.firebaseapp.com",
    databaseURL: "https://hackaton-b5b58.firebaseio.com",
    projectId: "hackaton-b5b58",
    storageBucket: "hackaton-b5b58.appspot.com",
    messagingSenderId: "879033278918",
    appId: "1:879033278918:web:9f1b76e921065262"
  };
var direccion = new Object();
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var jasons = db.collection("json");

console.log(jasons);


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  direccion.latitud = position.coords.latitude;
  direccion.longitud = position.coords.longitude;
  console.log("Latitud: " + direccion.latitud +
  " Longitud: " + direccion.longitud);
  const long = direccion.longitud;
  const lati = direccion.latitud;

  var platform = new H.service.Platform({
  'app_id': 'L9nu8AfZcs7bQx77fX9U',
  'app_code': 'NgO459xoAJ2Wnxgjr-4DFQ'
  });

  // Creamos las platillas de los diversos mapas de la API
  var maptypes = platform.createDefaultLayers();
  // Creamos una instancia y desplegamos en el container el mapa
  var map = new H.Map(
  document.getElementById('mapContainer'),
  maptypes.normal.map,
  {
  zoom: 15,
  center: { lng: long, lat: lati   }
  });
  // Create the default UI:
  var ui = H.ui.UI.createDefault(map, maptypes,'es-ES');
  // Create the parameters for the routing request:
  var routingParameters = {
    // The routing mode:
    'mode': 'fastest;truck;traffic:enabled',
    // The start point of the route:

    'waypoint0': '19.46632,-99.13321', //En este caso estas son las coordenadas de Nuevo Vallejo
    // The end point of the route:
    //'waypoint1': 'street!stopOver,60!19.499806,-99.148522;basurero2!19.494668,-99.133588;basurero1',
    'waypoint1': '19.499806,-99.148522',
    'waypoint2': '19.510261699999997,-99.12902369999999', //Estas son las coordenadas de UPIITA
    // To retrieve the shape of the route we choose the route
    // representation mode 'display'
    'height':'4',
    'width':'3',
    'length':'7',
    'limitedWeight':'10',
    'representation': 'display'
  };
  // Define a callback function to process the routing response:
  var onResult = function(result) {
   var route,
   routeShape,
   startPoint,
   endPoint,
   linestring;
   if(result.response.route) {
   // Pick the first route from the response:
   route = result.response.route[0];
   // Pick the route's shape:
   routeShape = route.shape;
   // Create a linestring to use as a point source for the route line
   linestring = new H.geo.LineString();
   // Push all the points in the shape into the linestring:
   routeShape.forEach(function(point) {
   var parts = point.split(',');
   linestring.pushLatLngAlt(parts[0], parts[1]);
   });
   // Retrieve the mapped positions of the requested waypoints:
   startPoint = route.waypoint[0].mappedPosition;
   endPoint = route.waypoint[1].mappedPosition;
   // Create a polyline to display the route
   routeLine = new H.map.Polyline(linestring, {
     style: { lineWidth: 10 },
     arrows: { fillColor: 'white', frequency: 2, width: 0.8, length: 0.7 }
   });
   // Create a marker for the start point:
   var startMarker = new H.map.Marker({
   lat: startPoint.latitude,
   lng: startPoint.longitude
   });
   // Create a marker for the end point:
   var endMarker = new H.map.Marker({
   lat: endPoint.latitude,
   lng: endPoint.longitude
   });
   // Add the route polyline and the two markers to the map:
   map.addObjects([routeLine, startMarker, endMarker]);
   // Set the map's viewport to make the whole route visible:
   map.setViewBounds(routeLine.getBounds());
   }
  };
  // Get an instance of the routing service:
  var router = platform.getRoutingService();
  // Call calculateRoute() with the routing parameters,
  // the callback and an error callback function (called if a
  // communication error occurs):
  router.calculateRoute(routingParameters, onResult,
   function(error) {
   alert(error.message);
   });
}



getLocation();
