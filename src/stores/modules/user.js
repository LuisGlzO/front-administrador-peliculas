const state = {
    usuario: null
  };
  
  const mutations = {
    SET_USUARIO(state, usuario) {
      state.usuario = usuario;
    }
  };
  
  const actions = {
    cargarUsuario({ commit }) {
      // Realiza la solicitud para obtener los datos del usuario usando el token de tipo bearer
      // Llama a la mutación SET_USUARIO para actualizar el estado del usuario
    }
  };
  
  const getters = {
    usuario: state => state.usuario
  };
  
  export default {
    state,
    mutations,
    actions,
    getters
  };
  