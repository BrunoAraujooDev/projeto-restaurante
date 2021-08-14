import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { atualizarLista } from "../../../../Store/Slices/cardapioSlice";
import editarProdutoHelper from "../../../../Utilitarios/editarProdutoHelper";
import "./Excluir.css";


const Excluir = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const usuarioLogado = useSelector(state => state.usuario.usuarioLogado);
    const usuarioOnline = useSelector(state => state.usuario.usuarioOnline);
    const lista = useSelector(state => state.cardapio.lista);

    const [produtoExclusao, setProdutoExclusao] = useState(null);



    const excluir = () => {


        // const resultado = editarProdutoHelper();

        // if (resultado) {
        //     dispatch(atualizarLista())
        //     history.push("/tela-cardapio");
        // } else {
        //     alert("Ocorreu um erro! Tente novamente!");
        // }

    }



    return (
        <>
            {usuarioLogado && usuarioOnline.tipo === "1" ?
                <section id="secao-cadastro">

                    <h5>Escolha o produto para excluir</h5>


                    <select id="categoria" name="categoria">
                            <option selected disabled value="-1">Selecione</option>
                            {lista.map(produto =>
                                <option key={produto.id}>
                                    {produto.produto}
                                </option>)}
                        </select>
                    {/* <div className="row">
                        <figure id="ex-carousel">
                            {lista.map((produto) =>
                                <img src={produto.imagem} alt={produto.descricao} className="ex-imagem" />
                            )}
                        </figure>
                    </div> */}



                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => excluir()}>Excluir</button>

                </section>
                :
                <p>Você precisa estar logado para acessar a página!</p>}

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Excluir produto</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Você tem certeza que deseja excluir esse produto?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Sim</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}

export default Excluir;