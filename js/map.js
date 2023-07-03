// Carga la API de Mapas de Google
function initMap() {
  // Configura las opciones del mapa
  var options = {
    center: { lat: 0, lng: 0 }, // Centro inicial del mapa
    zoom: 10 // Nivel de zoom inicial
  };

  // Crea el mapa en el elemento con el ID "map"
  var map = new google.maps.Map(document.getElementById("map"), options);
}

// Llama a la función initMap una vez que se haya cargado la API de Mapas de Google
function loadMapScript() {
  var script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=initMap";
  script.defer = true;
  script.async = true;
  document.head.appendChild(script);
}

// Carga el script de la API de Mapas de Google
loadMapScript();

