<template>
  <div class="locations-index">

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
    });
  },

  methods: {}
};
</script>
