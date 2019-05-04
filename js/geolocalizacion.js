/*Esta función se activa al iniciar la pantalla y regresa las coordenadas
 que se guardaran en las variables latitud y altitud*/
<script>
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude);
}
</script>

getLocation();
