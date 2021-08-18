import getAxios from "../app/axios/axios";


const salvarProdutoHelper = async (novoProduto) => {
    

    try {


        const resposta = await getAxios().post("cardapio", novoProduto);

        return true;

    } catch (e) {

        return false;

}
}

export default salvarProdutoHelper;