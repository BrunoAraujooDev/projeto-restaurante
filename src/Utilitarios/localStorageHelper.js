



 export const getUsuario = () => {

    const usuario = localStorage.getItem("usuario") ? JSON.parse( localStorage.getItem("usuario")) : {};

    return usuario;

};

