<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px;"></i>{{messagetitle}}</h3>
    <form @submit.prevent="submit">
      <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label" style="color: darkblue">name</label>
        <input class="form__input" v-model.trim="$v.name.$model"/>
      </div>
      <div class="error" v-if="!$v.name.required"  >name is Required</div>

      <div class="form-group" :class="{ 'form-group--error': $v.price.$error }">
        <label class="form__label" style="color: darkblue">price</label>
        <input class="form__input" v-model.trim="$v.price.$model"/>
      </div>
      <div class="error" v-if="!$v.price.required"  >price is Required</div>

      <div class="form-group" :class="{ 'form-group--error': $v.amount.$error }">
        <label class="form__label" style="color: darkblue">amount</label>
        <input class="form__input" v-model.trim="$v.amount.$model"/>
      </div>
      <div class="error" v-if="!$v.amount.required" >amount is Required</div>

      <div class="form-group" :class="{ 'form-group--error': $v.providerID.$error }">
        <label class="form__label" style="color: darkblue">providerID</label>
        <input class="form__input" v-model.trim="$v.providerID.$model"/>
      </div>
      <div class="error" v-if="!$v.providerID.required" >providerID is Required</div>

      <div class="form-group" :class="{ 'form-group--error': $v.providerName.$error }">
        <label class="form__label" style="color: darkblue">providerName</label>
        <input class="form__input" v-model.trim="$v.providerName.$model"/>
      </div>
      <div class="error" v-if="!$v.providerName.required" >providerName is Required</div>

      <div class="form-group" :class="{ 'form-group--error': $v.providerType.$error }">
        <label class="form__label" style="color: darkblue">providerType</label>
        <input class="form__input" v-model.trim="$v.providerType.$model"/>
      </div>
      <div class="error" v-if="!$v.providerType.required" >providerType is Required</div>



      <p>
        <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Operate</button>
      </p>
      <p class="typo__p" v-if="submitStatus === 'OK'">Operation succeed!</p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Running...</p>

    </form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueForm from 'vueform'
  import Vuelidate from 'vuelidate'
  import VueSweetalert from 'vue-sweetalert'
  import CargoServer from '@/services/cargoservice'
  import { required} from 'vuelidate/lib/validators'

  Vue.use(VueForm, {
    inputClasses: {
      valid: 'form-control-success',
      invalid: 'form-control-danger'
    }
  })

  Vue.use(Vuelidate)
  Vue.use(VueSweetalert)
  export default {
    name: 'addCargo',
    data () {
      return {
        messagetitle: ' Add Cargo ',
        name:'',
        price:0,
        amount: 0,
        providerID:'',
        providerName:'',
        providerType:'',
        cargo: {},
        submitStatus: null
      }
    },
    validations: {
      name: {
        required
      },
      price: {
        required
      },
      amount: {
        required
      },
      providerID: {
        required
      },
      providerName: {
        required
      },
      providerType: {
        required
      }
    },
    methods: {
      submitCargo: function (cargo) {
        CargoServer.postCargo(cargo)
          .then(response => {
            // JSON responses are automatically parsed.
            console.log(response)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      },
      submit () {
        console.log('submit!')
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          // do your submit logic here
          this.submitStatus = 'PENDING'
          setTimeout(() => {
            this.submitStatus = 'OK'
            var cargo = {
              name: this.name,
              price: this.price,
              amount: this.amount,
              providerID: this.providerID,
              providerName: this.providerName,
              providerType: this.providerType
            }
            this.cargo = cargo
            this.submitCargo(this.cargo)
          }, 500)
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
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
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
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
