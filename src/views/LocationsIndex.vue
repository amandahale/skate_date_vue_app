<template>
  <div class="locations-index">
    <h1>All Locations</h1>
    <div v-for="location in locations">
      <h2>{{ location.name }}</h2>
      <img v-bind:src="location.image_url">
      <p>{{ location.address }}</p>
      <p>{{ location.weblink }}</p>
    </div>
  </div>
</template>

<style>
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
    });
  },
  methods: {}
};
</script>
