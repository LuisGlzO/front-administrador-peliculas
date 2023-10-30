<template>
    <div class="row mt-5">
        <div class="col-md-12 offset-md-12">
            <div class="card border border-success">
                <div class="card-header bg-success border-success text-white text-center">
                    Datos película
                </div>
                <div class="card-body">
                    <form @submit.prevent="save">
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-file-video"></i>
                            </span>
                            <input autofocus type="text" v-model="nombre" required placeholder="Nombre película" class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-regular fa-calendar-days"></i>
                            </span>
                            <input autofocus type="date" v-model="fecha_publicacion" required class="form-control">
                        </div>
                        <label>
                            <input type="checkbox" v-model="estado"/> Disponible
                        </label><br />
                        <div class="d-grid col-10 mx-auto">
                            <button class="btn btn-dark">Add</button>
                        </div>
                        <div class="d-grid col-10 mx-auto mt-2">
                            <button class="btn btn-danger" @click="cancel">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
        
    </div>

    <div v-if="loading" class="d-flex justify-content-center mt-5">
        <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Cargando...</span>
        </div>
    </div>
</template>
    
<script>

export default {
    data() {
        return {
        nombre: "",
        fecha_publicacion: "",
        estado: false,
        loading: false
        };
    },
    methods: {
        async save() {
            this.loading = true;
            try {
                const response = await this.$axios.put("http://127.0.0.1:8000/api/peliculas/" + this.$route.params.id, {
                    nombre: this.nombre,
                    fecha_publicacion: this.fecha_publicacion,
                    estado: this.estado
                });

                this.$router.push("/peliculas");
            } catch (error) {
                
                console.error("Error al agregar película:", error);
            }
        },
        cancel(){
            this.$router.push("/peliculas");
        },
        async getPelicula(){
            try {
                const response = await this.$axios.get("http://127.0.0.1:8000/api/peliculas/" + this.$route.params.id, {
                });
                console.log(response);
                this.nombre = response.data.nombre;
                this.fecha_publicacion = response.data.fecha_publicacion;
                this.estado = response.data.estado;
                
            } catch (error) {
                
                console.error("Error al agregar película:", error);
            }
        }
    },
    mounted(){
        this.getPelicula();
    }
};
</script>
  
  <style scoped>
 
  </style>