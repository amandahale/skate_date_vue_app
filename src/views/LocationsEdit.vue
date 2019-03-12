<template>
  <div class="locations-edit">
    <h2>Edit Location</h2>

      <img v-if="status" v-bind:src="'https://http.cat/' + status" alt="">

      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        Name: <input type="text" class="form-control" v-model="location.name">
      </div>
      <div>
        Address: <input type="text" class="form-control" v-model="location.address">
      </div>
      <div>
        Weblink: <input type="text" class="form-control" v-model="location.weblink">
      </div>
      <div>
        Image Url: <input type="text" class="form-control" v-model="location.image_url">
      </div>

      <div>
        <input type="submit" value="Update">
      </div>

    </form>

  </div>
</template>



<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      location: {},
      errors: [],
      status: ""
    };
  },
  created: function() {
    axios.get("/api/locations/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.location = response.data;
    });
  },

  methods: {
    submit: function(location) {
      var locationParams = {
        name: this.location.name,
        address: this.location.address,
        weblink: this.location.weblink,
        image_url: this.location.image_url
      };
      axios
        .patch("/api/locations/" + this.location.id, locationParams)
        .then(response => {
          console.log("Success!", response.data);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    }
  }
};
</script>
