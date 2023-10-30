<template>
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <div class="d-grid col-10 mx-auto">
            <!--<button class="btn btn-dark" data-bs-toogle="modal" data-bs-target="#modal" @click="$event => openModal(1)">
              <i class="fa-solid fa-circle-plus"></i>
            Add a movie
            </button>-->
        </div>
      </div>
    </div>
    <table class="table">
        <thead>
            <tr>
            <th>Turno fecha y hora</th>
            <th>Estado</th>
            <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="turno in turnos" :key="turno.id">
            <td>{{ turno.fecha_hora }}</td>
            <td>{{ turno.activo ? 'Disponible' : 'No Disponible' }}</td>
            <td> 
              <div class="row">
                <div v-if="turno.activo" class="col-md-4">
                  <button class="btn btn-primary" title="Asignar el turno" @click="asignarTurno(turno.id)"><span><i class="fa-solid fa-square-check"></i></span></button>
                </div>
                <div v-else class="col-md-4">
                  <button class="btn btn-primary" disabled><span><i class="fa-solid fa-square-check"></i></span></button>
                </div>
                <div class="col-md-4">
                  <button class="btn btn-danger" title="Quitar turno" @click="quitarTurno(turno.id)"><span><i class="fa-solid fa-trash-can"></i></span></button>
                </div>
              </div>
            </td>
            </tr>
        </tbody>
    </table>
    <div class="d-grid col-10 mx-auto">
        <button class="btn btn-dark" title="regresar" @click="regresar">Guardar</button>
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
    <div v-if="loading" class="d-flex justify-content-center mt-5">
        <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Cargando...</span>
        </div>
    </div>
</template>
  
  <script>
  import { nextTick } from 'vue';
  import axios from 'axios';
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
        })
        .catch(error => {
          console.error('Error al obtener las películas:', error);
        });
      },
      getTurnos(){
        axios.get('http://127.0.0.1:8000/api/turnos')
        .then(response => {
          this.turnos = response.data;
          this.loading = false;
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
        
        console.log(op);
        setTimeout( () => nextTick (this.nameInput.valueOf.focus()), 600)
        this.operation = op;
        this.id = pelicula;
        if(op == 1){
          console.log("********");
          this.title = 'Agregar película'
        }
        else{
          this.title = 'Editar película'
        }
      },
      async quitarTurno(id){
        console.log('función eliminar uwu');
          try {
                const response = await this.$axios.put("http://127.0.0.1:8000/api/turnos/" + id, {
                    fecha_hora: this.fecha_hora,
                    pelicula_id: null,
                    activo: 1
                });
          } catch (error) {
              
              console.error("Error al eliminar turno:", error);
          }

          window.location.reload();
          
      },
      async asignarTurno(id){
        console.log('función asignar uwu');
          try {
                const response = await this.$axios.put("http://127.0.0.1:8000/api/turnos/" + id, {
                    fecha_hora: this.fecha_hora,
                    pelicula_id: this.$route.params.id,
                    activo: 0
                });
          } catch (error) {
              
              console.error("Error al eliminar turno:", error);
          }

          window.location.reload();
          
      },
      regresar(){
        this.$router.push("/peliculas");
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
  