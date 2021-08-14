import axios from "../app/axios/axios";


const excluirProdutoHelper = async (id) => {
    

    try {


        const resposta = await axios.put(`cardapio/${id}`);

        return true;

    } catch (e) {

        return false;

}
}

export default excluirProdutoHelper;