<template>
    <div class="row mt-5">
        <div class="col-md-12 offset-md-12">
            <div class="card border border-success">
                <div class="card-header bg-success border-success text-white text-center">
                    Datos del turno
                </div>
                <div class="card-body">
                    <form @submit.prevent="save">
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-regular fa-calendar-days"></i>
                            </span>
                            <input autofocus type="datetime-local" v-model="fecha_hora" required class="form-control">
                        </div>
                        <label>
                            <input type="checkbox" v-model="activo"/> Disponible
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
    fecha_hora: "",
    activo: false,
    loading: false
    };
},
methods: {
    async save() {
        this.loading = true;
        try {
            const response = await this.$axios.post("http://127.0.0.1:8000/api/turnos", {
                fecha_hora: this.fecha_hora,
                activo: this.activo,
            });

            this.$router.push("/turnos");
        } catch (error) {
            
            console.error("Error al agregar turno:", error);
        }
    },
    cancel(){
        this.$router.push("/turnos");
    }
}
};
</script>
  
  <style scoped>
 
  </style>