<template>
  <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <label class="input-desc"> Sign In</label>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <br><br><br><br><br><br><br>
        <div class="form-group input-group">
          <span class="input-group-addon">Email</span>
          <input type="email" v-model="email" class="form-control" placeholder="Your Email">
        </div>
        <div class="form-group input-group">
          <span class="input-group-addon">Password</span>
          <input type="password" v-model="password" class="form-control" placeholder="Your Password">
        </div>
        <input type="submit" class="btn btn-black" value="Submit">
      </form>
    </div>
  </div>
</template>








<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
