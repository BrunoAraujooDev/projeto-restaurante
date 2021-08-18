import getAxios from "../app/axios/axios";

const loginHelper =  async (usuario, senha) => {

    try {

        const dados = { usuario: usuario, senha: senha };

        const resultado = await getAxios().post("auth", dados);


        localStorage.setItem("usuario", JSON.stringify( resultado.data ));


        return { 
            sucesso: true,
            usuario: resultado.data.usuario,
        }

    } catch (e) {
        
        return { 
            sucesso: false,
            usuario: null
        };
    }

};

export default loginHelper;