<template>
  <div class="signup">
      <div class="page-header larger custom2 text-center">
          <div class="container-fluid">
              <h1><small>Sign Up</small></h1>
          </div><!-- End .container -->
      </div><!-- End .page-header -->
      <div class="container">


      <form v-on:submit.prevent="submit()">
        
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        <div class="form-group input-group">
          <span class="input-group-addon">Name</span>
          <input type="name" v-model="name" class="form-control" placeholder="Your Name">
        </div>

        <div class="form-group input-group">
          <span class="input-group-addon">Email</span>
          <input type="email" v-model="email" class="form-control" placeholder="Your Email">
        </div>

        <div class="form-group input-group">
          <span class="input-group-addon">Password</span>
          <input type="password" v-model="password" class="form-control" placeholder="Your Password">
        </div>

        <div class="form-group input-group">
          <span class="input-group-addon">Password confirmation:</span>
          <input type="password" v-model="passwordConfirmation" class="form-control" placeholder="Confirm Password">
          <span v-if="passwordConfirmation.length > 0 && passwordConfirmation !== password" class="text-danger">Must match password</span>
        </div>
        <input type="submit" class="btn btn-black" value="Submit">
      </form>
    </div>
  </div>
</template>

<!-- CONSOLE IS RETURNING A 500 SERVER ERROR @ http://localhost:3000/api/users/1, BUT STILL CREATING AN ACCOUNT ON CLICK??? -->

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    }
  }
};
</script>
