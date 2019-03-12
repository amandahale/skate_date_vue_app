<template>
  <div class="locations-show">
    <div id='map'></div>

  <h2>{{ location.name }}</h2>
  <img :src="location.image_url" :alt="location.name">
  <p>{{location.address}}</p>
  <p>{{location.weblink}}</p>

  <router-link v-bind:to="'/locations/' + location.id + '/edit'">Edit Location</router-link><br>

  <router-link to="/">Back to all locations</router-link><br>

  <button v-if="location.favorite_id" v-on:click="unfavoriteLocation()">Unfavorite</button>
  <button v-else v-on:click="favoriteLocation()">Favorite</button>
  <button v-on:click="destroyLocation()">Delete</button>

  </div>
</template>


<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      location: {}
    };
  },
  created: function() {
    axios
      .get("/api/locations/" + this.$route.params.id)
      .then(response => {
        // console.log(response.data);
        this.location = response.data;
      })
      .then(() => {
        mapboxgl.accessToken =
          "pk.eyJ1IjoiYXd3LWhhbGUtbmFoIiwiYSI6ImNqc293em84azAyaTU0M3A2bWJtZGEwNTIifQ.TuzMm3FyjpufA_WOlHkqNA";

        var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
        console.log(this.location);

        mapboxClient.geocoding
          .forwardGeocode({
            query: this.location.address,
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

  methods: {
    destroyLocation: function() {
      axios.delete("api/locations/" + this.location.id).then(response => {
        console.log("Successfully Removed Location", response.data);
        this.$router.push("/");
      });
    },
    favoriteLocation: function() {
      var params = {
        location_id: this.location.id
      };
      axios
        .post("/api/favorites", params)
        .then(response => {
          console.log(response.data);
          this.location.favorite_id = response.data.id;
        })
        .catch(error => {
          console.log(error.response.data);
          // this.errors = error.response.data.errors;
        });
    },
    unfavoriteLocation: function() {
      axios
        .delete("/api/favorites/" + this.location.favorite_id)
        .then(response => {
          console.log(response.data);
          this.location.favorite_id = "";
        })
        .catch(error => {
          console.log(error.response.data);
          // this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
