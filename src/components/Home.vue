<template><div class="note" :style ="note">
  <div class="hero">
    <h1 class="vue-title" >Homepage of cargo delivery syetem</h1>
    <table align="center" style="color: white">
      <tr>
        <td>
          <p class="lead" style="color: white"><b><i >Welcome to the cargo delivery system</i></b>
          <p style="color: white">This is a Cargo Delivery&Search System</p>
          <button @click="logout">Logout</button>
        </td>
        <td>
          <img src="../assets/homer.gif" alt="description here" />
        </td>
      </tr>
    </table>

    <p></p>
    <p class="lead" style="color: white">This is the homepage of the Cargo Delivery System Web app</p>
  </div></div>
</template>
<script>
  import firebase from 'firebase';

  export default {
    name: 'Home',
    data() {
      return {
        note: {
          backgroundImage: "url(" + require("../assets/bg8.jpg") + ")",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          marginTop: "5px",
        },
      }
    }
    ,
    methods:{
      logout : function () {
        firebase.auth().signOut().then(()=>{
          this.$router.replace('login')
        })
      }
    }
  }
</script>
<style>
  .hero {
    height: 100vh;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    color: white;
    margin-bottom: 10px;
  }

</style>
