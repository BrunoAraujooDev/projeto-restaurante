import axios from "../app/axios/axios";

const pegarProdutoHelper = async id => {

    try{ 

       const resposta =  await axios.get(`cardapio/${id}`);

       return {
           sucesso: true,
           produto: resposta.data
       }

    } catch (e) {
        return {
            sucesso: false,
            produto: null
        }
    }

}

export default pegarProdutoHelper;