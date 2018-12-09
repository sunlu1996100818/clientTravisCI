import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cargoes from '@/components/Cargoes'
import AboutUs from '@/components/aboutUs'
import ContactUs from '@/components/contactUs'
import Login from '@/components/Login'
import addCargo from '@/components/addCargo'
import Edit from '@/components/Edit'
import SignUp from '@/components/signUp'
import providers from '@/components/providers'
import firebase from 'firebase'

Vue.use(Router);
const router = new Router({

  routes: [
    /*{
      path: '*',
      redirect:'/login'
    },*/
    {
      path:'/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/addCargo',
      name: 'addCargo',
      component: addCargo

    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/Cargoes',
      name: 'Cargoes',
      component: Cargoes
    },
    {
      path: '/providers',
      name: 'providers',
      component: providers
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
});

router.beforeEach((to,from,next) =>{
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next ('home');
  else next();
});

export default router;

















