<template>
  <div class="locations-show">
    <!-- <div class="table-row">
      <div class="table-cell cell-content bg-custom">
        <div class="col-xs-12">
          <h2 class="title-border gray text-white">{{ location.name }}</h2>
          <img :src="location.image_url" :alt="location.name">
          <h4 class="text-white">{{location.address}}</h4>
    
          <a class="text-white" :href="location.weblink">{{location.weblink}}</a><br>

          <router-link class="text-white" v-bind:to="'/locations/' + location.id + '/edit'">Edit Location</router-link><br>

          <router-link class="text-white" to="/">Back to all locations</router-link><br>

          <button class="btn btn-custom2" v-if="location.favorite_id" v-on:click="unfavoriteLocation()">Unfavorite</button>
          <button class="btn btn-custom2" v-else v-on:click="favoriteLocation()">Favorite</button>
          <button class="btn btn-custom2" v-on:click="destroyLocation()">Delete</button>
        </div>

        <div class="mb25"></div>

      </div>
    </div> -->


    <div class="page-header custom2 text-center larger">
      <div class="container-fluid">
        <h1>{{location.name}}</h1>
      </div><!-- End .container -->
    </div><!-- End .page-header -->


    <div class="table-row">
        
      <!-- <div class="table-cell cell-image">
        <img :src="location.image_url" alt="">
      </div> -->

        <img :src="location.image_url">
        </img> <!-- End .table-cell -->

        <div class="table-cell cell-content bg-dark text-muted">
            <div class="mb10"></div>

            <div class="row">
                <div class="col-sm-6">
                    <div class="service">
                        <div class="service-icon custom">
                            <i class="fa fa-diamond"></i>
                        </div><!-- End .service-icon -->
                        <h3 class="service-title text-white"><a href="#">About</a></h3>
                        <p>{{location.description}}</p>
                    </div><!-- End .service -->
                </div><!-- End .col-sm-6 -->

                <div class="col-sm-6">
                    <div class="service">
                        <div class="service-icon custom">
                            <i class="fa fa-compass"></i>
                        </div><!-- End .service-icon -->
                        <h3 class="service-title text-white"><a href="#">Address</a></h3>
                        <p>{{location.address}}</p>
                    </div><!-- End .service -->
                </div><!-- End .col-sm-6 -->
            </div><!-- End .row -->

            <div class="mb10"></div><!-- margin -->

            <div class="row">
                <div class="col-sm-12">
                    <div class="service">
                        <div class="service-icon custom">
                            <i class="fa fa-wifi"></i>
                        </div><!-- End .service-icon -->
                        <h3 class="service-title text-white"><a href="#">Website</a></h3>
                        <p><a class="text-white" :href="location.weblink">{{location.weblink}}</a></p>
                    </div><!-- End .service -->
                </div><!-- End .col-sm-6 -->

            </div><!-- End .row -->
        </div><!--End .table-cell  -->
    </div><!-- End .table-row -->

    <div class="table-row no-border">
        <div class="table-cell cell-content bg-custom text-white">
            <div class="mb10"></div><!-- margin -->

            <div class="row">
                <div class="col-sm-6">
                    <div class="service">
                        <div class="service-icon custom2">
                            <i class="fa fa-edit"></i>
                        </div><!-- End .service-icon -->
                        <h3 class="service-title text-white"><a href="#">Amanda H.</a></h3>
                        <p>Love it here!</p>
                    </div><!-- End .service -->
                </div><!-- End .col-sm-6 -->

                <div class="col-sm-6">
                    <div class="service">
                        <div class="service-icon custom2">
                            <i class="fa fa-edit"></i>
                        </div><!-- End .service-icon -->
                        <h3 class="service-title text-white"><a href="#">Dani Z.</a></h3>
                        <p>Cool spot!</p>
                    </div><!-- End .service -->
                </div><!-- End .col-sm-6 -->
            </div><!-- End .row -->

            <div class="mb10"></div><!-- margin -->

            <div class="row">
                <div class="col-sm-6">
                    <div class="service">
                        <div class="service-icon custom2">
                            <i class="fa fa-edit"></i>
                        </div><!-- End .service-icon -->
                        <h3 class="service-title text-white"><a href="#">Shred Beans & Rice</a></h3>
                        <p>Great ramps!</p>
                    </div><!-- End .service -->
                </div><!-- End .col-sm-6 -->

                <div class="col-sm-6">
                    <div class="service">
                        <div class="service-icon custom2">
                            <i class="fa fa-edit"></i>
                        </div><!-- End .service-icon -->
                        <h3 class="service-title text-white"><a href="#">Kid Vicious</a></h3>
                        <p>Skate Date here Saturday at 4pm?</p>
                    </div><!-- End .service -->
                </div><!-- End .col-sm-6 -->
            </div><!-- End .row -->
        </div><!--End .table-cell  -->

        <div class="table-cell cell-map-container">
            <div id="locations-show-map" class="cell-map"></div><!-- End #map -->
        </div><!-- End .table-cell -->
    </div><!-- End .table-row -->

  </div>
</template>

<style scoped>
.page-header.custom2.text-center {
  margin: 0px;
}
img {
  max-width: 100%;
  height: auto;
}
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      location: {}
    };
  },
  created: function() {
    axios
      .get("/api/locations/" + this.$route.params.id)
      .then(response => {
        // console.log(response.data);
        this.location = response.data;
      })
      .then(() => {
        mapboxgl.accessToken =
          "pk.eyJ1IjoiYXd3LWhhbGUtbmFoIiwiYSI6ImNqc293em84azAyaTU0M3A2bWJtZGEwNTIifQ.TuzMm3FyjpufA_WOlHkqNA";

        var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
        console.log(this.location);

        mapboxClient.geocoding
          .forwardGeocode({
            query: this.location.address,
            autocomplete: false,
            limit: 1
          })
          .send()
          .then(function(response) {
            if (response && response.body && response.body.features && response.body.features.length) {
              var feature = response.body.features[0];

              var map = new mapboxgl.Map({
                container: "locations-show-map",
                style: "mapbox://styles/mapbox/streets-v9",
                center: feature.center,
                zoom: 10
              });
              new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
            }
          });
      });
  },

  mounted: function() {
    // var laBodega = [-87.649995, 41.917039];
    // var map = new mapboxgl.Map({
    //   container: "map", // container id
    //   style: "mapbox://styles/mapbox/streets-v9", // stylesheet location
    //   center: laBodega, // starting position [lng, lat]
    //   zoom: 9 // starting zoom
    // });
    // // create the popup
    // var popup = new mapboxgl.Popup({ offset: 25 }).setText("La Bodega");
    // // create the marker
    // new mapboxgl.Marker()
    //   .setLngLat([-87.649995, 41.917039])
    //   .setPopup(popup) // sets a popup on this marker
    //   .addTo(map);
  },

  methods: {
    destroyLocation: function() {
      axios.delete("api/locations/" + this.location.id).then(response => {
        console.log("Successfully Removed Location", response.data);
        this.$router.push("/");
      });
    },
    favoriteLocation: function() {
      var params = {
        location_id: this.location.id
      };
      axios
        .post("/api/favorites", params)
        .then(response => {
          console.log(response.data);
          this.location.favorite_id = response.data.id;
        })
        .catch(error => {
          console.log(error.response.data);
          // this.errors = error.response.data.errors;
        });
    },
    unfavoriteLocation: function() {
      axios
        .delete("/api/favorites/" + this.location.favorite_id)
        .then(response => {
          console.log(response.data);
          this.location.favorite_id = "";
        })
        .catch(error => {
          console.log(error.response.data);
          // this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
