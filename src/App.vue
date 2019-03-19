<template>
  <div id="app">

    <div class="header-top custom">
        <div class="container-fluid">
            <ul class="top-menu hidden-xs pull-right">
                <li class="active"><a href="#">Home</a></li>
                <li><router-link to="/">Locations</router-link></li>
                <li><router-link to="/locations/new">Create Location</router-link></li>
                <li v-if= "isLoggedIn()"><router-link to="/logout">Logout</router-link> </li>
                <li v-else><router-link to="/login">Login</router-link> </li>
                <li v-if= "!isLoggedIn()"><router-link to="/signup">Signup</router-link></li>
            </ul>

            <div class="social-icons pull-left">
               <router-link to="/" class="social-icon"> Skate Date</router-link>
            </div><!-- End .social-icons -->
        </div><!-- End .container-fluid -->
    </div>



    <router-view/>
  </div>
</template>

<style>
</style>


<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() {
    // axios.get("/api/users/" + localStorage.getItem("user_id")).then(response => {
    //   console.log(response.data);
    //   this.user = response.data;
    // });
  },
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      }
      return false;
    }
  }
};
</script>
