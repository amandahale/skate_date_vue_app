<template>
  <div class="locations-index">

    <div class="page-header largest parallax custom text-center" style="background-image:url(https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/53541694_10156181506858339_4155514097355456512_n.jpg?_nc_cat=100&_nc_ht=scontent-ort2-2.xx&oh=c00132faf1fdb8dc3b44ded392046aea&oe=5D089B4C)" data-0="background-position:50% 50%;" data-top-bottom="background-position:50% 100%">
      <div class="container-fluid">
        <h1>Skate Date</h1>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div><!-- End .container -->
    </div><!-- End .page-header -->

    <div class="container-fluid text-center">
      <ul id="portfolio-filter">
        <li class="active"><a href="#" data-filter="*">All</a></li>
        <li><a href="#" data-filter=".web-design">Web Design</a></li>
        <li><a href="#" data-filter=".marketing">Marketing</a></li>
        <li><a href="#" data-filter=".video">Video</a></li>
        <li><a href="#" data-filter=".wordpress">Wordpress</a></li>
        <li><a href="#" data-filter=".illustration">Illustration</a></li>
        <li><a href="#" data-filter=".logo-design">Logo Design</a></li>
      </ul>
    </div><!-- End .container-fluid -->

    <div class="container-fluid">
      <div class="portfolio-row">
        <div id="portfolio-item-container" class="popup-gallery max-col-3" data-layoutmode="fitRows">


          <div v-for="location in locations" class="portfolio-item web-design wordpress">
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




        </div><!-- End .portfolio-item-container -->
      </div><!-- End .row -->

      <div class="pagination-wrapper text-center">
        <nav class="pagination-container min-width text-center">
          <a href="#" class="btn btn-custom min-width">View more</a>
        </nav>
      </div><!-- End .pagination-wrapper -->
    </div><!-- End .container-fluid -->

    <div class="mb40 mb20-sm mb0-xs"></div><!-- margin -->

       
     
          <!-- 

          <p>{{ location.address }}</p>
          <p>{{ location.weblink }}</p> -->
 

  </div>
</template>


  <style>
#map {
  height: 400px;
  width: 700px;
}
</style>


<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      locations: []
    };
  },
  created: function() {
    axios.get("/api/locations").then(response => {
      this.locations = response.data;
      console.log(this.locations);
    });
  },

  methods: {}
};
</script>
