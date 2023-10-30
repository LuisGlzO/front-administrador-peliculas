<template>
    <div class="row mt-5">
        <div class="col-md-12 offset-md-12">
            <div class="card border border-success">
                <div class="card-header bg-success border-success text-white">
                    Register
                </div>
                <div class="card-body">
                    <form @submit.prevent="register">
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-user"></i>
                            </span>
                            <input autofocus type="text" v-model="name" required placeholder="Name" class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-at"></i>
                            </span>
                            <input autofocus type="text" v-model="email" required placeholder="Email" class="form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa-solid fa-key"></i>
                            </span>
                            <input autofocus type="password" v-model="password" required placeholder="Password" class="form-control">
                        </div>
                        <div class="d-grid col-10 mx-auto">
                            <button class="btn btn-dark">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div v-if="loading" class="d-flex justify-content-center mt-5">
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Cargando...</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
    name: "",
    email: "",
    password: "",
    loading: false
    };
},
methods:{
    async register() {
        this.loading = true;
        try {
            const response = await this.$axios.post("http://127.0.0.1:8000/api/auth/register", {
                name: this.name,
                email: this.email,
                password: this.password
            });

            this.$router.push("/login");
        } catch (error) {
            
            console.error("Error al iniciar registar usuarior:", error);
        }
    }
}
};
</script>