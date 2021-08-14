import axios from "../app/axios/axios";


const editarProdutoHelper = async (id, produtoEditado) => {
    

    try {

        delete produtoEditado.id

        const resposta = await axios.put(`cardapio/${id}`, produtoEditado);

        return true;

    } catch (e) {

        return false;

}
}

export default editarProdutoHelper;