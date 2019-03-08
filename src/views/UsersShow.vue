<template>
  <div class="users-show">


    <h2>Update User Account</h2>

      <img v-if="status" v-bind:src="'https://http.cat/' + status" alt="">

      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    <form v-on:submit.prevent="submit()">
      <div>
        Name: <input type="text" class="form-control" v-model="user.name">
      </div>
      <div>
        Email: <input type="text" class="form-control" v-model="user.email">
      </div>
      <div>
        Password: <input type="text" class="form-control" v-model="user.password">
      </div>
      <div>
        Password Confirmaion: <input type="text" class="form-control" v-model="user.password_confirmation">
      </div>

      <div>
        <input type="submit" value="Update">
      </div>

    </form>



<h2>Your Favorite Locations</h2>
<div v-for="location in user.locations">
  <router-link v-bind:to=" '/users/' + user.id">
  <h2>{{ location.name }}</h2>
</router-link>
  <img v-bind:src="location.image_url">
  <p>{{ location.address }}</p>
  <p>{{ location.weblink }}</p>
</div>

  

  </div>
</template>


<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      user: []
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {
    submit: function(user) {
      var userParams = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation
      };
      axios
        .patch("/api/users/" + this.user.id, userParams)
        .then(response => {
          console.log("Success!", response.data);
          this.$router.push("/users/" + this.user.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
      //   destroyLocation: function() {
      //     axios.delete("api/locations/" + this.location.id).then(response => {
      //       console.log("Successfully Removed Location", response.data);
      //       this.$router.push("/");
      //     });
      //   },
      //   favoriteLocation: function() {
      //     var params = {
      //       location_id: this.location.id
      //     };
      //     axios
      //       .post("/api/favorites", params)
      //       .then(response => {
      //         console.log(response.data);
      //         this.location.favorite_id = response.data.id;
      //       })
      //       .catch(error => {
      //         console.log(error.response.data);
      //         // this.errors = error.response.data.errors;
      //       });
      //   },
      //   unfavoriteLocation: function() {
      //     axios
      //       .delete("/api/favorites/" + this.location.favorite_id)
      //       .then(response => {
      //         console.log(response.data);
      //         this.location.favorite_id = "";
      //       })
      //       .catch(error => {
      //         console.log(error.response.data);
      //         // this.errors = error.response.data.errors;
      //       });
    }
  }
};
</script>
