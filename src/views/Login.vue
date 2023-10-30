<template>
    <div class="row mt-5">
        <div class="col-md-12 offset-md-12">
            <div class="card border border-success">
                <div class="card-header bg-success border-success text-white">
                    Login
                </div>
                <div class="card-body">
                    <form @submit.prevent="login">
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-at"></i>
                            </span>
                            <input autofocus type="text" v-model="email" required placeholder="Email" class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-regular fa-lock"></i>
                            </span>
                            <input autofocus type="password" v-model="password" required placeholder="Password" class="form-control">
                        </div>
                        <div class="d-grid col-10 mx-auto">
                            <button class="btn btn-dark">Login</button>
                        </div>
                        <router-link :to="{ path: 'register'}">Register</router-link>
                    </form>
                </div>
            </div>
            <div v-if="loading" class="d-flex justify-content-center mt-5">
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Cargando...</span>
                </div>
            </div>
            
        </div>
        
    </div>
</template>
    
<script>
export default {
data() {
    return {
    email: "",
    password: "",
    loading: false
    };
},
methods: {
    async login() {
        this.loading = true;
        try {
            const response = await this.$axios.post("http://127.0.0.1:8000/api/auth/login", {
            email: this.email,
            password: this.password
            });

            // Guarda el token en localStorage o en Vuex para usarlo posteriormente
            const token = response.data.access_token;
            // Guarda el token en localStorage
            localStorage.setItem("token", token);

            await this.$store.dispatch('cargarUsuario');

            // Redirige al usuario a la página principal o a donde desees
            this.loading = true;
            this.$router.push("/peliculas");
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    }
}
};
</script>
  
  <style scoped>
 
  </style>