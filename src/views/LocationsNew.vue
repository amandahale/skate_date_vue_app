<template>
  <div class="locations-new">

    <div class="page-header custom text-center larger">
      <div class="container-fluid">
      </div><!-- End .container -->
    </div><!-- End .page-header -->

    <form v-on:submit.prevent="submit()">
    <div class="container">
      <header class="title-block text-right">
          <h2 class="title text-right custom"><span class="light text-custom">Create A</span> New Location<small></small></h2>
      </header>

      <div class="form-group input-group">
        <span class="input-group-addon">Name</span>
        <input type="text" v-model="newLocationName" class="form-control" placeholder="Location Name">
      </div>

      <div class="form-group input-group">
        <span class="input-group-addon">Location Address</span>
        <input type="text" v-model="newLocationAddress" class="form-control" placeholder="Location Address">
      </div>

      <div class="form-group input-group">
        <span class="input-group-addon">Weblink</span>
        <input type="text" v-model="newLocationWeblink" class="form-control" placeholder="Location Weblink">
      </div>

      <div class="form-group input-group">
        <span class="input-group-addon">Image</span>
        <input type="text" v-model="newLocationImageUrl" class="form-control" placeholder="Location Image Url">
      </div>

      <div class="form-group input-group">
        <span class="input-group-addon">Location Description</span>
        <input type="text" v-model="newLocationDescription" class="form-control" placeholder="Location Description">
      </div>

      <div>
        <input type="submit" class="btn btn-black" value="Submit">
      </div>
      </div>
    </form>
  </div>
</template>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      newLocationName: "",
      newLocationAddress: "",
      newLocationWeblink: "",
      newLocationImageUrl: "",
      newLocationDescription: "",
      errors: [],
      status: ""
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var locationParams = {
        name: this.newLocationName,
        address: this.newLocationAddress,
        weblink: this.newLocationWeblink,
        image_url: this.newLocationImageUrl,
        description: this.newLocationDescription
      };
      axios
        .post("api/locations", locationParams)
        .then(response => {
          console.log("Location successfully created", response.data);
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
