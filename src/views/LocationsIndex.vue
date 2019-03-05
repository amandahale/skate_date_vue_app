<template>
  <div class="locations-index">
    <div id='map'></div>
    <h1>All Locations</h1>
    <div v-for="location in locations">
      <router-link v-bind:to=" '/locations/' + location.id">
      <h2>{{ location.name }}</h2>
    </router-link>
      <img v-bind:src="location.image_url">
      <p>{{ location.address }}</p>
      <p>{{ location.weblink }}</p>
    </div>
  </div>
</template>


<style>
#map {
  height: 400px;
  width: 700px;
}
</style>


<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      locations: []
    };
  },
  created: function() {
    axios.get("/api/locations").then(response => {
      this.locations = response.data;
      console.log(this.locations);
      mapboxgl.accessToken =
        "pk.eyJ1IjoiYXd3LWhhbGUtbmFoIiwiYSI6ImNqc293em84azAyaTU0M3A2bWJtZGEwNTIifQ.TuzMm3FyjpufA_WOlHkqNA";

      var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });

      mapboxClient.geocoding
        .forwardGeocode({
          query: this.locations[0].address,
          autocomplete: false,
          limit: 1
        })
        .send()
        .then(function(response) {
          if (response && response.body && response.body.features && response.body.features.length) {
            var feature = response.body.features[0];

            var map = new mapboxgl.Map({
              container: "map",
              style: "mapbox://styles/mapbox/streets-v9",
              center: feature.center,
              zoom: 10
            });
            new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
          }
        });
    });
  },
  mounted: function() {
    // var laBodega = [-87.649995, 41.917039];
    // var map = new mapboxgl.Map({
    //   container: "map", // container id
    //   style: "mapbox://styles/mapbox/streets-v9", // stylesheet location
    //   center: laBodega, // starting position [lng, lat]
    //   zoom: 9 // starting zoom
    // });
    // // create the popup
    // var popup = new mapboxgl.Popup({ offset: 25 }).setText("La Bodega");
    // // create the marker
    // new mapboxgl.Marker()
    //   .setLngLat([-87.649995, 41.917039])
    //   .setPopup(popup) // sets a popup on this marker
    //   .addTo(map);
  },
  methods: {}
};
</script>
