import axios from "../app/axios/axios";

const loginHelper =  async (usuario, senha) => {

    try {

        const dados = { usuario: usuario, senha: senha };

        const resultado = await axios.post("auth", dados);

        const token = resultado.data.token

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