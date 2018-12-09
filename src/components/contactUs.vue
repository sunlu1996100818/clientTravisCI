<template><div class = "note" :style = "note">
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-comment" style="padding: 3px"></i>{{messagetitle}}</h3>
    <h1 data-test-content1 align="center" style="color: white"> Please contact me of my email: 996844107@qq.com</h1>
  </div></div>
</template>

<script>
  export default {
    name: 'ContactUs',
    data () {
      return {
        messagetitle: ' Contact Us ',
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
