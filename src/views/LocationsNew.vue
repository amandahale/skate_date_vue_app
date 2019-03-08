<template>
  <div class="locations-new">
    <h2>Add A Location</h2>
    <form v-on:submit.prevent="submit()">
      <div>
        Name: <input type="text" class="form-control" v-model="newLocationName">
      </div>
      <div>
        Address: <input type="text" class="form-control" v-model="newLocationAddress">
      </div>
      <div>
        Weblink: <input type="text" class="form-control" v-model="newLocationWeblink">
      </div>      
      <div>
        Image Url: <input type="text" class="form-control" v-model="newLocationImageUrl">
      </div>

      <div>
        <input type="submit" value="Create">
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
        image_url: this.newLocationImageUrl
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
