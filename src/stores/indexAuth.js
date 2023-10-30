import { createStore } from 'vuex';
import Axios from 'axios';

const store = createStore({
  state: {
    usuario: null
  },
  mutations: {
    SET_USUARIO(state, usuario) {
      state.usuario = usuario;
    }
  },
  actions: {
    async cargarUsuario({ commit }) {
      try {
        // Hacer la solicitud para obtener los datos del usuario usando el token de tipo bearer
        const token = localStorage.getItem('token');
        console.log(token);

        // Configura una instancia de Axios con el token de autorización
        const axiosInstance = Axios.create({
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

        const response = await axiosInstance.post('http://127.0.0.1:8000/api/auth/me');
        const usuario = response.data; // Suponiendo que la respuesta tiene un objeto de usuario
        console.log(usuario);
        commit('SET_USUARIO', usuario);
      } catch (error) {
        console.error('Error al cargar el usuario:', error);
      }
    }
  },
  getters: {
    usuario: state => state.usuario
  }
});

export default store;
