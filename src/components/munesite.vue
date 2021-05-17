
<template>
  <div>
  <div class="mene_de_site">
      <div class="container">
        <div class="row">
          <div class="col-2">
            <div class="logo"><img src="../assets/image/logo.png"></div>
          </div>
          <div class="col-7">
            <div class="mene_nav">

              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="">
                     <router-link
                        :to="{ path: '/', name: '' }"
                      >Accueil</router-link>
                  
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">A propos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Artisans</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <router-link
                        :to="{ path: '/pageservis', name: 'pageservis' }"
                      >ajoute servise</router-link>
                  
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-3">
            <div class="lesruse">

              <div class="row">
                <div class="col-8"><button>
                  <router-link
                        :to="{ path: '/ajouteUser', name: 'ajouteUser' }"
                      >    S incerire</router-link>
            
                </button></div>
                <div class="col-2">
                  <div class="icon"><img src="../assets/image/user@2x.png"></div>
                </div>
                <div class="col-2">
                  <div class="icon"><img src="../assets/image/icon1.png"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
   
    
  </div>
</template>

<script>


export default {
  name: "Home",
  components: {
      
  },

  props: [],
  created: function () {},
  methods: {},
};
</script>
<style scoped>
</style>