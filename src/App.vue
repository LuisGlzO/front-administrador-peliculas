<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

</script>

<template>
  <!--<div class="row">
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3" style="border: solid 1px red;">
        <Sidebar></Sidebar>
      </div>
      <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9" style="background-color:blue;">
        <Peliculas></Peliculas>
      </div>
  </div>-->
  <div class="container">
    <div class="row"><Navbar></Navbar></div>
    <div class="container-fluid mt-3">
      <RouterView />
    </div>
  </div>
  
</template>

<style scoped>
</style>
