<template>
  <div class="users-show">

<div class="page-header custom2 text-center larger">
  <div class="container-fluid">
    <h1>Hi, {{user.name}}</h1>
    <h4>ready to shred?</h4>
  </div><!-- End .container -->
</div><!-- End .page-header -->

    <div class="container">

<!--       <img v-if="isLoggedIn()" v-bind:src="'https://http.cat/' + status" alt=""> -->


      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    <form v-on:submit.prevent="submit()">
      <br><br>

        <header class="title-block text-right">
            <h2 class="title text-right custom"><span class="light text-custom">Update</span> Your Info <small></small></h2>
        </header>

      <br>
      <div class="form-group input-group">
        <span class="input-group-addon">Name</span> 
        <input type="name" class="form-control" v-model="user.name">
      </div>

      <div class="form-group input-group">
        <span class="input-group-addon">Email</span> 
        <input type="email" class="form-control" v-model="user.email">
      </div>

      <div class="form-group input-group">
        <span class="input-group-addon">Password</span> 
        <input type="password" class="form-control" v-model="user.password">
      </div>


        <div class="form-group input-group">
          <span class="input-group-addon">Password confirmation:</span>
          <input type="password" v-model="passwordConfirmation" class="form-control">
          <span v-if="passwordConfirmation !== password" class="text-danger">Must match password</span>
        </div>


      <input type="submit" class="btn btn-black" value="Submit">
      <br><br><br><br>
    </form>



    <div class="container-fluid">
      <div class="portfolio-row">
        <div id="portfolio-item-container" class="popup-gallery max-col-3" data-layoutmode="fitRows">
          
          <header class="title-block">
              <h2 class="title dark">Your <span class="light text-custom2">Favorites</span><small></small></h2>
              <p>Locations you have favorited:</p>
          </header>

          <div v-for="location in user.locations" class="portfolio-item web-design wordpress">
            <router-link v-bind:to=" '/locations/' + location.id">
              <figure>
                <img v-bind:src="location.image_url" :alt="location.name">
                <figcaption>
                  <a :data-thumb="location.image_url" class="zoom-btn"><i class="fa fa-search"></i></a>
                </figcaption>
              </figure>
              <div class="portfolio-meta">
                <h3 class="portfolio-title"><a href="#" title="Portfolio name">{{ location.name }}</a></h3>
                <div class="portfolio-tags">
                  <a href="#">{{ location.address }}</a>
                </div><!-- End .portfolio-tags -->
              </div><!-- End .portfolio-meta -->
            </router-link>
          </div><!-- End .portfolio-item -->



          </div>
        </div><!-- End .portfolio-item-container -->
      </div><!-- End .row -->
    </div>
  </div>
</template>

<style scoped>
.page-header.custom2.text-center {
  margin: 0px;
  max-width: 100%;
  height: auto;
}
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      user: [],
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  created: function() {
    axios.get("/api/users/me").then(response => {
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
        .patch("/api/users/me")
        .then(response => {
          console.log("Success!", response.data);
          this.$router.push("/users/me");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    },
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      }
      return false;
    }
  }
};
</script>
