import Vue from "vue";
import VueRouter from "vue-router";

import pageservis from "../views/pageservis.vue";
import ajouteUser from "../views/ajouteUser.vue";

import comundepage from "../components/Lapage.vue";
Vue.use(VueRouter);


const routes = [
  {
    path: '/ajouteUser',
    name: 'ajouteUser',
    component: ajouteUser,  
  }, {
    path: '/',
    name: '',
    component: comundepage,  
  },  {
    path: '/pageservis',
    name: 'pageservis',
    component: pageservis,  
  },
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
