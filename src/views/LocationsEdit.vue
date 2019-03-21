<template>
  <div class="locations-edit">

    <div class="page-header custom text-right">
        <div class="container-fluid">
            <h1></h1>
            <ol class="breadcrumb">
                <li><a href="index.html"></a></li>
                <li><a href="#"></a></li>
                <li class="active"></li>
            </ol>
        </div><!-- End .container -->
    </div><!-- End .page-header -->
    
    <div class="table-row">
        <div class="table-cell cell-content bg-custom">
            <div class="row">
                <div class="col-xs-12">
                    <h2 class="title-border gray text-white">Edit a Location</h2>

                    <form action="#" method="post" id="contact-form">
                        <div class="row row-sm">
                            <div class="col-sm-6">
                                <label>Name</label>
                                <input type="text" class="form-control" id="contactname" name="contactname" placeholder="Name" required>
                            </div><!-- End .col-sm-6 -->

                            <div class="col-sm-6">
                                <label>Email</label>
                                <input type="email" class="form-control" id="contactemail" name="contactemail" placeholder="Email" required>
                            </div><!-- End .col-sm-6 -->
                        </div><!-- End .row -->

                        <div class="row row-sm">
                            <div class="col-sm-6">
                                <label>Website</label>
                                <input type="url" class="form-control" id="contactwebsite" name="contactwebsite" placeholder="Website" required>
                            </div><!-- End .col-sm-6 -->

                            <div class="col-sm-6">
                                <label>Subject</label>
                                <input type="text" class="form-control" id="contactsubject" name="contactsubject" placeholder="Subject">
                            </div><!-- End .col-sm-6 -->
                        </div><!-- End .row -->

                        <div class="row">
                            <div class="col-xs-12">
                                <label>Message</label>
                                <textarea class="form-control" rows="6" id="contactmessage" name="contactmessage" placeholder="Message" required></textarea>
                            </div><!-- End .col-md-12 -->
                        </div><!-- End .row -->

                        <div class="mb5"></div><!-- margin -->

                        <input type="submit" class="btn btn-custom2 min-width" data-loading-text="Sending Message..." value="Send Message">
                    </form>

                    <div class="mb25"></div><!-- margin -->
                </div><!-- End .col-xs-12 -->
            </div><!-- End .row -->
        </div><!--End .table-cell  -->

        <div class="table-cell cell-map-container">
            <div id="map" class="cell-map"></div><!-- End #map -->
        </div><!-- End .table-cell -->
    </div><!-- End .table-row -->


<!--     <img v-if="status" v-bind:src="'https://http.cat/' + status" alt="">
    <br><br><br><br><br><br>
    <header class="title-block text-right">
        <h2 class="title text-right custom"><span class="light text-custom">Edit A</span> Location<small></small></h2>
    </header>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      
      <div class="form-group input-group">
        <span class="input-group-addon">Name</span> 
        <input type="name" class="form-control" v-model="location.name">
      </div>

      <div class="form-group input-group col-sm-6">
        <span class="input-group-addon">Address</span> 
        <input type="address" class="form-control" v-model="location.address">
      </div>

      <div class="form-group input-group col-sm-6">
        <span class="input-group-addon">Weblink</span> 
        <input type="weblink" class="form-control" v-model="location.weblink">
      </div>

      <div class="form-group input-group col-sm-6">
        <span class="input-group-addon">Image Url</span> 
        <input type="image_url" class="form-control" v-model="location.image_url">
      </div>

      <div>
        <input type="submit" class="btn btn-black" value="Submit">
      </div>

    </form> -->

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
