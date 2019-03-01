<template>
  <div class="locations-show">

  <h2>{{ location.name }}</h2>
  <img :src="location.image_url" :alt="location.name">
  <p>{{location.address}}</p>
  <p>{{location.weblink}}</p>

  <router-link v-bind:to="'/locations/' + location.id + '/edit'">Edit Location</router-link><br>

  <router-link to="/">Back to all locations</router-link><br>

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
    axios.get("/api/locations/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.location = response.data;
    });
  },
  methods: {
    destroyLocation: function() {
      axios.delete("api/locations/" + this.location.id).then(response => {
        console.log("Successfully Removed Location", response.data);
        this.$router.push("/");
      });
    }
  }
};
</script>
