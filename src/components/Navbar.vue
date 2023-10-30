<template>
  <!--<div class="row">
    <div class="navbar bg-success">
      <div class="navbar-right">
        <span>{{ usuario ? `Bienvenido, ${usuario.name}` : 'Bienvenido' }}</span>
      </div>
      <div class="navbar-left">
        <router-link class="text-white" :to="{ path: 'peliculas'}">Películas</router-link>
        <router-link class="text-white" :to="{ path: 'turnos'}">Turnos</router-link>
        <router-link class="text-white" :to="{ path: 'turnos'}">Perfil</router-link>
      </div>
    </div>
  </div>-->

  <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <p class="navbar-brand text-white" href="#">{{ usuario ? `Bienvenido, ${usuario.name}` : 'Bienvenido(a)' }}</p>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link text-white" :to="{ path: 'peliculas'}">Películas</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" :to="{ path: 'turnos'}">Turnos</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link class="nav-link text-white" :to="{ path: 'turnos'}">Perfil</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    

  <!--<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Características</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Precios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Deshabilitado</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>-->
  </template>
  
  <script>
  
  export default {
    computed: {
      usuario() {
        return this.$store.state.usuario;
      }
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
  
  .navbar-left {
    flex: 1;
    text-align: left;
  }
  
  .navbar-right {
    flex: 1;
    text-align: right;
  }
  </style>