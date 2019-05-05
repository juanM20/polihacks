var maptypes;
var platform;
var routingParameters;
var direcciones = [{ 'mode': 'fastest;truck;traffic:enabled',
  'waypoint0': '20.46632,-97.133211',
  'waypoint1': '17.499806,-99.148522',
  'waypoint2': '16.510261699999997,-10.12902369999999',
  'height':'4',
  'width':'3',
  'length':'7',
  'limitedWeight':'10',
  'representation': 'display'
},{ 'mode': 'fastest;truck;traffic:enabled',
  'waypoint0': '19.3875085,-99.1385991',
  'waypoint1': '19.3115251,-99.0413789',
  'waypoint2': '19.3697395,-99.1413214',
  'height':'4',
  'width':'3',
  'length':'7',
  'limitedWeight':'10',
  'representation': 'display'
},{ 'mode': 'fastest;truck;traffic:enabled',
  'waypoint0': '19.6342263,-99.3695564',
  'waypoint1': '19.635102858877886,-99.36499675952254',
  'waypoint2': '19.634456139302287,-99.36562976085477',
  'height':'4',
  'width':'3',
  'length':'7',
  'limitedWeight':'10',
  'representation': 'display'
},{ 'mode': 'fastest;truck;traffic:enabled',
  'waypoint0': '19.5640171,-99.2795356',
  'waypoint1': '19.5733975,-99.243949',
  'waypoint2': '19.58547,-99.26035',
  'height':'4',
  'width':'3',
  'length':'7',
  'limitedWeight':'10',
  'representation': 'display'
},{ 'mode': 'fastest;truck;traffic:enabled',
  'waypoint0': '19.6118471,-99.3007102',
  'waypoint1': '19.63658,-99.30682',
  'waypoint2': '19.6434469,-99.365861',
  'height':'4',
  'width':'3',
  'length':'7',
  'limitedWeight':'10',
  'representation': 'display'
},{ 'mode': 'fastest;truck;traffic:enabled',
  'waypoint0': '19.54005,-99.19538',
  'waypoint1': '19.5349481,-99.1957947',
  'waypoint2': '19.5589808,-99.2044617',
  'height':'4',
  'width':'3',
  'length':'7',
  'limitedWeight':'10',
  'representation': 'display'
},{ 'mode': 'fastest;truck;traffic:enabled',
  'waypoint0': '19.5255716,-99.2276346',
  'waypoint1': '19.5103168,-99.2341564',
  'waypoint2': '19.499195,-99.2368621',
  'height':'4',
  'width':'3',
  'length':'7',
  'limitedWeight':'10',
  'representation': 'display'
},{ 'mode': 'fastest;truck;traffic:enabled',
  'waypoint0': '19.5043757,-99.2002284',
  'waypoint1': '19.4947868,-99.1962408',
  'waypoint2': '19.4908384,-99.1736468',
  'height':'4',
  'width':'3',
  'length':'7',
  'limitedWeight':'10',
  'representation': 'display'
},{ 'mode': 'fastest;truck;traffic:enabled',
  'waypoint0': '19.4591465,-99.2155762',
  'waypoint1': '19.4597042,-99.1881487',
  'waypoint2': '19.4530629,-99.1753585',
  'height':'4',
  'width':'3',
  'length':'7',
  'limitedWeight':'10',
  'representation': 'display'
},{ 'mode': 'fastest;truck;traffic:enabled',
  'waypoint0': '20.46632,-97.133211',
  'waypoint1': '17.499806,-99.148522',
  'waypoint2': '16.510261699999997,-10.12902369999999',
  'height':'4',
  'width':'3',
  'length':'7',
  'limitedWeight':'10',
  'representation': 'display'
},{ 'mode': 'fastest;truck;traffic:enabled',
  'waypoint0': '20.46632,-97.133211',
  'waypoint1': '17.499806,-99.148522',
  'waypoint2': '16.510261699999997,-10.12902369999999',
  'height':'4',
  'width':'3',
  'length':'7',
  'limitedWeight':'10',
  'representation': 'display'
},{ 'mode': 'fastest;truck;traffic:enabled',
  'waypoint0': '20.46632,-97.133211',
  'waypoint1': '17.499806,-99.148522',
  'waypoint2': '16.510261699999997,-10.12902369999999',
  'height':'4',
  'width':'3',
  'length':'7',
  'limitedWeight':'10',
  'representation': 'display'
},{ 'mode': 'fastest;truck;traffic:enabled',
  'waypoint0': '20.46632,-97.133211',
  'waypoint1': '17.499806,-99.148522',
  'waypoint2': '16.510261699999997,-10.12902369999999',
  'height':'4',
  'width':'3',
  'length':'7',
  'limitedWeight':'10',
  'representation': 'display'
},{ 'mode': 'fastest;truck;traffic:enabled',
  'waypoint0': '20.46632,-97.133211',
  'waypoint1': '17.499806,-99.148522',
  'waypoint2': '16.510261699999997,-10.12902369999999',
  'height':'4',
  'width':'3',
  'length':'7',
  'limitedWeight':'10',
  'representation': 'display'
},{ 'mode': 'fastest;truck;traffic:enabled',
  'waypoint0': '20.46632,-97.133211',
  'waypoint1': '17.499806,-99.148522',
  'waypoint2': '16.510261699999997,-10.12902369999999',
  'height':'4',
  'width':'3',
  'length':'7',
  'limitedWeight':'10',
  'representation': 'display'
}];

















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

  platform = new H.service.Platform({
  'app_id': 'L9nu8AfZcs7bQx77fX9U',
  'app_code': 'NgO459xoAJ2Wnxgjr-4DFQ'
  });

  // Creamos las platillas de los diversos mapas de la API
  maptypes = platform.createDefaultLayers();
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


}

function rutas(num){
  //Retrieve the target element of the map
  var targetElement = document.getElementById('mapContainer');
  var map = new H.Map(
  document.getElementById('mapContainer'),
  maptypes.normal.map,
  {
  zoom: 15,
  center: { lng: 52.51, lat: 13.4   }
  });
  // Create the default UI:
  var ui = H.ui.UI.createDefault(map, maptypes,'es-ES');
  //Get routeParameters
  var docRef = db.collection("json").doc(num);
  docRef.get().then(function(doc) {
        if (doc.exists) {
      var dat = doc.data();
      console.log(dat);
      routingParameters=dat;
      console.log(routingParameters);

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
      console.log(routingParameters);
      console.log(typeof(routingParameters));
      var obj = JSON.stringify(routingParameters.jason);
      console.log(array);
      console.log(typeof(array));
      console.log(obj);
      console.log(routingParameters.jason);
      console.log(typeof(obj));
      router.calculateRoute(obj, onResult,
       function(error) {
       alert(error.message);
       });

      //dibujarRuta(routingParameters);
        } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

function dibujarRuta(routingParameters){

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
  console.log(routingParameters);
  console.log(typeof(routingParameters));
  var obj = JSON.stringify(routingParameters);
  console.log(obj);
  router.calculateRoute(routingParameters, onResult,
   function(error) {
   alert(error.message);
   });
}

getLocation();
