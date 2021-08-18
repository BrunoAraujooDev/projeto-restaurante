import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { atualizarLista } from "../../../../Store/Slices/cardapioSlice";
import excluirProdutoHelper from "../../../../Utilitarios/excluirProdutoHelper";
import "./Excluir.css";


const Excluir = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const usuarioLogado = useSelector(state => state.usuario.usuarioLogado);
    const usuarioOnline = useSelector(state => state.usuario.usuarioOnline);
    const lista = useSelector(state => state.cardapio.listaCompleta);

    const [produtoExclusao, setProdutoExclusao] = useState({});




    const excluir = async () => {

        const resultado = await excluirProdutoHelper(produtoExclusao.id);

        if (resultado) {
            dispatch(atualizarLista())
            history.push("/tela-cardapio");
        } else {
            alert("Ocorreu um erro! Tente novamente!");
        }

    }



    return (
        <>

            <section id="secao-excluir">
                {usuarioLogado && usuarioOnline.tipo === "1" ?
                    <div id="excluir-div-interior">

                        <h5>Escolha o produto para excluir</h5>

                        <div className="row">

                            {lista.map((produto) =>
                                <div id="ex-carousel" className="col-md-3 col-lg-4 col-xxl-3" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    onClick={() => setProdutoExclusao(produto)} key={produto.id}>
                                    <h2 className="ex-h2">{produto.produto}</h2>
                                    <div className="ex-fundo"></div>
                                    <figure className=" ex-figurinhas">
                                        <img src={produto.imagem} alt={produto.descricao} className="img-fluid ex-imagem" />
                                    </figure>
                                </div>
                            )}

                        </div>

                    </div>

                    :
                    <div className="gerenciar-div-interior">
                        <p>Você precisa estar logado para acessar a página!</p>
                    </div>
                }
            </section>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Excluir produto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Você tem certeza que deseja excluir <b>{produtoExclusao.produto}</b>?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => excluir()}>Sim</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}

export default Excluir;