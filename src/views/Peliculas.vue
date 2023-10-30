<template>
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <div class="d-grid col-10 mx-auto">
            <!--<button class="btn btn-dark" data-bs-toogle="modal" data-bs-target="#modal" @click="$event => openModal(1)">
              <i class="fa-solid fa-circle-plus"></i>
            Add a movie
            </button>-->
            <router-link class="btn btn-dark" :to="{ path: 'addMovie'}">Add a Movie</router-link>
        </div>
      </div>
    </div>
    <table class="table">
        <thead>
            <tr>
            <th>Nombre</th>
            <th>Fecha de Publicación</th>
            <th>Estado</th>
            <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="pelicula in peliculas" :key="pelicula.id">
            <td>{{ pelicula.nombre }}</td>
            <td>{{ pelicula.fecha_publicacion }}</td>
            <td>{{ pelicula.estado ? 'Disponible' : 'No Disponible' }}</td>
            <td> 
              <div class="row">
                <div class="col-md-4">
                  <router-link class="btn btn-primary" :to="{ path: 'editMovie/' + pelicula.id}"><span><i class="fa-solid fa-pen-to-square"></i></span></router-link>
                </div>
                <div class="col-md-4">
                  <router-link class="btn btn-dark" :to="{ path: 'asignarTurno/'  + pelicula.id}"><span><i class="fa-solid fa-equals"></i></span></router-link>
                </div>
                <div class="col-md-4">
                  <button class="btn btn-danger" @click="deleteMovie(pelicula.id)"><span><i class="fa-solid fa-trash-can"></i></span></button>
                </div>
              </div>
            </td>
            </tr>
        </tbody>
    </table>

    <div v-if="loading" class="d-flex justify-content-center mt-5">
        <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Cargando...</span>
        </div>
    </div>
    <!--<Modal :id="'modal'" :title="title">
      <div class="modal-body">
        <form @submit.prevent="save">
          <div class="input-group mb-3">
            <span class="input-group-text">
              <i class="fa-solid fa-building"></i>
              <input autofocus type="text" v-model="pelicula.nombre" placeholder="Nombre" class="form-control" required ref="nameInput">
            </span>
          </div>
        </form>
      </div>

    </Modal>
    -->
</template>
  
  <script>
  import { nextTick } from 'vue';
  import axios from 'axios';
  import Swal from 'sweetalert2'
  //import Modal from '../components/Modal.vue';
  //import SelecInput from '../components/SelectInput.vue'
  
  export default {
    data() {
      return {
        peliculas: [],
        turnos:[],
        pelicula:{
          nombre:'',
          fecha_publicacion:'',
          estado:true
        },
        title:'',
        nameInput:'',
        operation:'',
        id:'',
        close:[],
        loading: true
      };
    },
    methods:{
      getPeliculas(){
        axios.get('http://127.0.0.1:8000/api/peliculas')
        .then(response => {
          this.peliculas = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error al obtener las películas:', error);
        });
      },
      getTurnos(){
        axios.get('http://127.0.0.1:8000/api/turnos')
        .then(response => {
          this.turnos = response.data;
        })
        .catch(error => {
          console.error('Error al obtener los turnos:', error);
        });
      },
      clear(){
        this.pelicula.nombre = '';
        this.pelicula.fecha_publicacion = '';
        this.pelicula.estado = false;
      },
      openModal(op,nombre,fecha_publicacion,estado, pelicula){
        
        
        setTimeout( () => nextTick (this.nameInput.valueOf.focus()), 600)
        this.operation = op;
        this.id = pelicula;
        if(op == 1){
          
          this.title = 'Agregar película'
        }
        else{
          this.title = 'Editar película'
        }
      },
      async deleteMovie(id){
        
          try {
              const response = await this.$axios.delete("http://127.0.0.1:8000/api/peliculas/" + id, {
              });
              window.location.reload();
          } catch (error) {
              
              console.error("Error al eliminar película:", error);
              //window.alert("La película tiene un turno asignado!");
              Swal.fire({
                  title:"Error", text:"La película se encuentra asignada a un turno!", icon:"warning"
              });
          }
          
      }
    },
    mounted() {
      // Hacer una solicitud al backend para obtener la lista de películas
      this.getPeliculas();
      this.getTurnos();
    }
  };
  </script>
  
  <style scoped>
  </style>
  