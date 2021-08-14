import axios from "../app/axios/axios";


const salvarProdutoHelper = async (novoProduto) => {
    

    try {


        const resposta = await axios.post("cardapio", novoProduto);

        return true;

    } catch (e) {

        return false;

}
}

export default salvarProdutoHelper;