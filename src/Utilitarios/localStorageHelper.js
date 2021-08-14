

const usuario = localStorage.getItem("usuario") ? JSON.parse( localStorage.getItem("usuario")) : {};

export default usuario;