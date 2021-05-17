
<template>
  <div class="moisite">
     <div class="munedesite"><munesite/></div>
     <div class="">
      
    <router-view/>
  </div>
     <div class="foer"><Ffooter/></div>
  </div>
</template>

<script>


import munesite from "./components/munesite";
import Ffooter from "./components/Ffooter";
export default {
  name: "Home",
  components: {
    munesite,Ffooter,
  },

  props: [],
  created: function () {},
  methods: {},
};
</script>
<style scoped>
</style>