<template><div class = "note" :style = "note">
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-info" style="padding: 3px"></i>{{messagetitle}}</h3>
    <p data-test-content1 style="color: white"><b><i >Welcome to the cargo delivery system</i></b>
    <p data-test-content2 style="color: white">This is a Cargo Delivery&Search System</p>
    <p data-test-content3 style="color: white">My name is Lu Sun </p>
    <p data-test-content4 style="color: white">My student number is: w20082256 </p>

  </div></div>
</template>

<script>
  export default {
    name: 'AboutUs',
    data () {
      return {
        messagetitle: ' About Us ',
        note:{
          backgroundImage: "url(" + require("../assets/star2.jpg") + ")",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }
      }
    }
  }
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
