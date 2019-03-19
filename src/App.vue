<template>
  <div id="app">

    <header class="header header2 transparent sticky-header animated-dropdown ttb-dropdown">
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

      <div class="header-inner">
        <div class="container-fluid">
          <a href="index.html" class="site-logo" title="Bold - Multipurpose Template">
            <img src="assets/images/logo.png" data-rjs="3" alt="Bold Logo">
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
              <li class="dropdown active">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Home<span class="angle"></span></a>
                <ul class="dropdown-menu" role="menu">
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Business<span class="angle"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="index.html">Business - Version 1</a></li>
                      <li><a href="index2.html">Business - Version 2</a></li>
                      <li><a href="index3.html">Business - Version 3</a></li>
                      <li><a href="index4.html">Business - Version 4</a></li>
                      <li><a href="index5.html">Business - Version 5</a></li>
                      <li><a href="index6.html">Business - Version 6</a></li>
                      <li><a href="index7.html">Business - Version 7</a></li>
                      <li><a href="index8.html">Business - Version 8</a></li>
                      <li><a href="index9.html">Business - Version 9</a></li>
                      <li><a href="index10.html">Business - Version 10</a></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Shop<span class="angle"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="index-shop.html">Shop - Version 1</a></li>
                      <li><a href="index-shop2.html">Shop - Version 2</a></li>
                      <li><a href="index-shop3.html">Shop - Version 3</a></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Blog<span class="angle"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="index-blog.html">Blog - Version 1</a></li>
                      <li><a href="index-blog2.html">Blog - Version 2</a></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Portfolio<span class="angle"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="index-portfolio.html">Portfolio - Version 1</a></li>
                      <li><a href="index-portfolio2.html">Portfolio - Version 2</a></li>
                      <li><a href="index-portfolio3.html">Portfolio - Version 3</a></li>
                      <li><a href="index-portfolio4.html">Portfolio - Version 4</a></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Photography<span class="angle"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="index-photography.html">Photography - Version 1</a></li>
                      <li><a href="index-photography2.html">Photography - Version 2</a></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Onepages<span class="angle"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="index-onepage.html">Onepage - Version 1</a></li>
                      <li><a href="index-onepage2.html">Onepage - Version 2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="dropdown reverse">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Elements<span class="angle"></span></a>
                <ul class="dropdown-menu" role="menu">
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Elements - Headers<span class="angle"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="header.html">Header Version 1</a></li>
                      <li><a href="header2.html">Header Version 2</a></li>
                      <li><a href="header3.html">Header Version 3</a></li>
                      <li><a href="header4.html">Header Version 4</a></li>
                      <li><a href="header5.html">Header Version 5</a></li>
                      <li><a href="header6.html">Header Version 6</a></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Elements - Headers<span class="angle"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="header7.html">Header Version 7</a></li>
                      <li><a href="header8.html">Header Version 8</a></li>
                      <li><a href="header9.html">Header Version 9</a></li>
                      <li><a href="header10.html">Header Version 10</a></li>
                      <li><a href="header11.html">Header Version 11</a></li>
                      <li><a href="header12.html">Header Version 12</a></li>
                    </ul>
                  </li>
                  <li><a href="elements-footers.html">Elements - Footers</a></li>
                  <li><a href="elements-footers-white.html">Footers - White</a></li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Elements<span class="angle"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="elements-pageheaders.html">Elements - Page Headers</a></li>
                      <li><a href="elements-typography.html">Elements - Typography</a></li>
                      <li><a href="elements-titles.html">Elements - Titles</a></li>
                      <li><a href="elements-buttons.html">Elements - Buttons</a></li>
                      <li><a href="elements-services.html">Elements - Services</a></li>
                      <li><a href="elements-forms.html">Elements - Forms</a></li>
                      <li><a href="elements-counters.html">Elements - Counters</a></li>
                      <li><a href="elements-collapses.html">Elements - Collapses</a></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Elements<span class="angle"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="elements-callouts.html">Elements - Callouts</a></li>
                      <li><a href="elements-text-blocks.html">Elements - Blocks</a></li>
                      <li><a href="elements-tabs.html">Elements - Tabs</a></li>
                      <li><a href="elements-progressbars.html">Elements - Progress bars</a></li>
                      <li><a href="elements-tables.html">Elements - Tables</a></li>
                      <li><a href="elements-alerts.html">Elements - Alerts</a></li>
                      <li><a href="elements-media.html">Elements - Media</a></li>
                      <li><a href="elements-more.html">Elements - More</a></li>
                    </ul>
                  </li>
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
