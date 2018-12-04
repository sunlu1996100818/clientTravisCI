<template><div class = "note" :style = "note">
  <div class="hero" style="color: white">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px "></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="cargoesList" :options="options">
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteCargo(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editCargo(props.row._id)"></a>
      </v-client-table>
    </div>
  </div></div>
</template>

<script>
  import CargoService from '@/services/cargoservice'
  import Vue from 'vue'
  import VueTables from 'vue-tables-2'

  Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

  export default {
    name: 'cargoes',
    data () {
      return {
        messagetitle: ' Cargoes List ',
        cargoesList: [],
        errors: [],
        columns: ['_id', 'name', 'price', 'amount','providerID','providerName','remove','edit'],
        options: {
          headings: {
            _id: '_id',
            name: 'name',
            price: 'price',
            amount: 'amount',
            providerID: 'providerID',
            providerName: 'providerName',
            providerType: 'providerType'
          },
          sortable: ['name','price','amount','providerName']
        },
        note:{
          backgroundImage: "url(" + require("../assets/star2.jpg") + ")",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }
      }
    },
    // Fetches Donations when the component is created.
    created () {
      this.loadCargoes()
    },
    methods: {
      loadCargoes: function () {
        CargoService.fetchCargoes()
          .then(response => {
            // JSON responses are automatically parsed.
            this.cargoesList = response.data;
            console.log(this.cargoesList)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      },
      editCargo: function (id) {
        this.$router.params = id;
        this.$router.push('edit')
      },
      deleteCargo: function (id) {
        this.$swal({
          title: 'Are you totaly sure?',
          text: 'You can\'t Undo this action',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'OK Delete it',
          cancelButtonText: 'Cancel',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          console.log('SWAL Result : ' + result)
          if (result === true) {
            CargoService.deleteCargo(id)
              .then(response => {
                // JSON responses are automatically parsed.
                this.message = response.data
                console.log(this.message)
                this.loadCargoes()
                // Vue.nextTick(() => this.$refs.vuetable.refresh())
                this.$swal('Deleted', 'You successfully deleted this Cargo ' + JSON.stringify(response.data, null, 5), 'success')
              })
              .catch(error => {
                this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
                this.errors.push(error)
                console.log(error)
              })
          } else {
            this.$swal('Cancelled', 'Your Cargo still counts!', 'info')
          }
        })
      }
    }
  }
</script>

<style scoped>
  .vue-title {
    text-align: center;
    font-size: 70pt;
    margin-bottom: 10px;
  }
  #app1 {
    width: 75%;
    margin: 0 auto;
  }
  .VueTables__sortable {
    cursor: pointer;
  }
</style>
