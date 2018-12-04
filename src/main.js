// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueForm from 'vueform'

//import VueSweetalert1 from 'vue-sweetalert'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
});


//Vue.use(VueSweetalert1);
Vue.use(VueSweetalert2);



Vue.config.productionTip = false;
let app = '';

firebase.initializeApp({
  apiKey: "AIzaSyAb0jxL-nD7i8dj-ZkkZHOhJZVwY2gPilg",
  authDomain: "assignment02-e7740.firebaseapp.com",
  databaseURL: "https://assignment02-e7740.firebaseio.com",
  projectId: "assignment02-e7740",
  storageBucket: "assignment02-e7740.appspot.com",
  messagingSenderId: "160942025254"
});

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      render : h => h(App)
    }).$mount('#app')
  }

  }

);


Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
