<template>
  <div id="app">

    <header class="header header2 transparent sticky-header animated-dropdown ttb-dropdown">
      <div class="header-top custom">
        <div class="container-fluid">
          <ul class="top-menu hidden-xs pull-right">
            <li class="active"></li>
            <li v-if= "isLoggedIn()"><router-link to="/logout">Logout</router-link> </li>
            <li v-else><router-link to="/login">Login</router-link> </li>
            <li v-if= "!isLoggedIn()"><router-link to="/signup">Signup</router-link></li>
          </ul>


        </div><!-- End .container-fluid -->
      </div>

      <div class="header-inner">
        <div class="container-fluid">
          <a href="index.html" class="site-logo" title="Bold - Multipurpose Template">
            
            <div class="pull-left">
              <router-link to="/"> Skate Date</router-link>
            </div><!-- End .social-icons -->
            <span class="sr-only">Bold</span>
          </a>

          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav-container" aria-expanded="false">
            <span class="toggle-text">Menu</span>
            <span class="toggle-wrapper">
              <span class="sr-only">Toggle Menu</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </span>
          </button>

          <div class="collapse navbar-collapse" id="main-nav-container">
            <ul class="nav navbar-nav">

              <li class="dropdown reverse">
                <a href="" class="sticky-header dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Get Low<span class="angle"></span></a>
                <ul class="dropdown-menu" role="menu">
                  <li class="dropdown">
                    
                  <li><router-link to="/users/me">Your Dash</router-link></li>
                  <li><router-link to="/">Locations</router-link></li>
                  <li><router-link to="/locations/new">Add a Location</router-link></li>


                </ul>
              </li>
              <li class="dropdown pull-right">
                <a href="#" class="header-search-toggle" role="button" title="Open Search"><span class="visible-inline-xs">Search</span><i class="fa fa-search"></i></a>
              </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- End .container-fluid -->
      </div><!-- End .header-inner -->
    </header><!-- End .header -->

    <div class="header-search-form">
      <a href="#" class="header-search-toggle" title="Close"><i class="fa fa-times"></i></a>
      <form action="#">
        <input type="search" class="form-control" placeholder="Type in here" required>
      </form>
    </div><!-- End .header-search-form -->


    <div class="main">
      <router-view/>
    </div><!-- End .main -->

    <footer class="footer text-center white">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">

            <div class="row">
              <div class="col-xs-4 col-xss-12">
                <div class="widget">
                  <h4 class="widget-title">Company</h4>
                  <ul class="fa-ul">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Latest News</a></li>
                  </ul>
                </div><!-- End .widget -->
              </div><!-- End .col-xs-4 -->
              <div class="col-xs-4 col-xss-12">
                <div class="widget">
                  <h4 class="widget-title">Policy</h4>
                  <ul class="fa-ul">
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Cookies</a></li>
                    <li><a href="#">Trademarks</a></li>
                    <li><a href="#">Terms of use</a></li>
                  </ul>
                </div><!-- End .widget -->
              </div><!-- End .col-xs-4 -->
              <div class="col-xs-4 col-xss-12">
                <div class="widget">
                  <h4 class="widget-title">Learn</h4>
                  <ul class="fa-ul">
                    <li><a href="#">Order Tracking</a></li>
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">Return Policy</a></li>
                    <li><a href="#">Sales &amp; Support</a></li>
                  </ul>
                </div><!-- End .widget -->
              </div><!-- End .col-xs-4 -->
            </div><!-- End .row -->

            <div class="widget text-center">
              <div class="social-icons circle mb0">
                <label>Find Us:</label><br>
                <a href="#" class="social-icon" title="Facebook"><i class="fa fa-facebook"></i></a>
                <a href="#" class="social-icon" title="Twitter"><i class="fa fa-twitter"></i></a>
                <a href="#" class="social-icon" title="Github"><i class="fa fa-github"></i></a>
                <a href="#" class="social-icon" title="Linkedin"><i class="fa fa-linkedin"></i></a>
                <a href="#" class="social-icon" title="Tumblr"><i class="fa fa-tumblr"></i></a>
                <a href="#" class="social-icon" title="Flickr"><i class="fa fa-flickr"></i></a>
                <a href="#" class="social-icon" title="Snapchat"><i class="fa fa-snapchat"></i></a>
                <a href="#" class="social-icon" title="Vine"><i class="fa fa-vine"></i></a>
              </div><!-- End .social-icons -->
            </div>
          </div><!-- End .col-md-8 -->
        </div><!-- End .row -->
      </div><!-- End .container-fluid -->

    </footer><!-- End .footer -->

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
