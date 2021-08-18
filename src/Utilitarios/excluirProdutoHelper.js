import getAxios from "../app/axios/axios";




const excluirProdutoHelper = async id => {


    try {

        const resposta = await getAxios().delete(`cardapio/${id}`);

        return {
            resultado: true,
            mensagem: resposta.data
        };

    } catch (e) {

        return {
            sucesso: false,
            mensagem: null
        }
    }
}

export default excluirProdutoHelper;