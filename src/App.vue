<template>
  <div id="app">
    <!--<img src="./assets/food.jpg" height="125" width="200">-->
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/foodSmall.jpg" height="60" width="60" class="img-circle" style="padding: 5px">
      <b-navbar-brand to="/">Cargo Delivery System</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/cargoes"><i class="fa fa-list" style="padding: 5px">All Cargoes</i></b-nav-item>
          <b-nav-item to="/addCargo"><i class="fa fa-list" style="padding: 5px"> AddCargo</i></b-nav-item>
          <b-nav-item to="/providers"><i class="fa fa-list" style="padding: 5px"> providers</i></b-nav-item>


        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about"><i class="fa fa-info" style="padding: 5px"> About Us</i></b-nav-item>
          <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 5px"> Contact Us</i></b-nav-item>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
