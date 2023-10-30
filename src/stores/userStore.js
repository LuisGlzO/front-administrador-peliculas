import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    usuario: null
  }),
  actions: {
    async cargarUsuario() {
      try {
        // Hacer la solicitud para obtener los datos del usuario usando el token de tipo bearer
        const response = await axios.get('http://127.0.0.1:8000/api/auth/me');
        this.usuario = response.data; // Suponiendo que la respuesta tiene un objeto de usuario
      } catch (error) {
        console.error('Error al cargar el usuario:', error);
      }
    },
    // Otras acciones relacionadas con el usuario, si las necesitas
  }
});
