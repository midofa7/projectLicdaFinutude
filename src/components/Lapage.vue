
<template>
  <div>
  <div class="">
    
    <div class=""><bloc1/></div>
    <div class=""><bloc2/></div>
    <div class=""><bloc3/></div>
    <div class=""><bloc4/></div>
    <div class=""><bloc5/></div>

  </div>
    
  </div>
</template>

<script>


import bloc1 from "./bloc1";
import bloc2 from "./bloc2";
import bloc3 from "./bloc3";
import bloc4 from "./bloc4";
import bloc5 from "./bloc5";
export default {
  name: "ome",
  components: {
      bloc1,bloc2,bloc3,bloc4,bloc5
  },

  props: [],
  created: function () {},
  methods: {},
};
</script>
<style scoped>
</style>