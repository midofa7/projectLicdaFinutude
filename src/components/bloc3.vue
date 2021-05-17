
<template>
  <div>
     
    <div class="block-3">

      <div class="container">
        <div class="caselee">
          <div class="crodeeee">
          <carousel items="3" loop="true">
           <itemlBlock/>
               <itemlBlock/>
                  <itemlBlock/> <itemlBlock/>
               <itemlBlock/>
                  <itemlBlock/> <itemlBlock/>
               <itemlBlock/>
                  <itemlBlock/> <itemlBlock/>
               <itemlBlock/>
                  <itemlBlock/>
                </carousel>
           
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>


import itemlBlock from "./itemlBlock3";
import carousel from 'vue-owl-carousel'
export default {
  name: "ome",
  components: { 
    itemlBlock,carousel
  },

  props: [],
  created: function () {},
  methods: {},
};
</script>
<style scoped>
</style>