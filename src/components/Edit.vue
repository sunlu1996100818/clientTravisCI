<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <cargo-form :cargo="cargo" cargoBtnTitle="Update Cargo"
                           @cargo-is-created-updated="updateCargo"></cargo-form>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
  import CargoService from '@/services/cargoservice'
  import CargoForm from '@/components/CargoForm'

  export default {
    data () {
      return {
        cargo: {
        },
        childDataLoaded: false,
        temp: {},
        messagetitle: ' Edit Cargo'
      }
    },
    components: {
      'cargo-form': CargoForm
    },
    created () {
      this.getCargo()
    },
    methods: {
      getCargo: function () {
        CargoService.fetchCargoById(this.$router.params)
          .then(response => {
            this.temp = response.data
            this.cargo = this.temp[0]
            this.childDataLoaded = true
            console.log('Getting Cargo in Edit: ' + JSON.stringify(this.cargo, null, 5))
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      },
      updateCargo: function (cargo) {
        console.log('Before PUT ' + JSON.stringify(cargo, null, 5))
        CargoService.putCargo(this.$router.params, cargo)
          .then(response => {
            console.log(response);
            console.log('AFTER PUT ' + JSON.stringify(cargo, null, 5))
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped>
  .vue-title {
    margin-top: 10px;
    text-align: center;
    font-size: 45pt;
    color: darkblue;
    margin-bottom: 10px;
  }
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .cargo-form .form-control-label.text-left{
    text-align: left;
  }
  .bg1{
    background-color: white;
    color: black ;
  }
  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    margin-left: 390px;
    margin-right: 390px;
    background: #157ffb;
    color:white;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
