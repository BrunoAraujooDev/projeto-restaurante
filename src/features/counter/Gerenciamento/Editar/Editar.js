import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { atualizarLista } from "../../../../Store/Slices/cardapioSlice";
import editarProdutoHelper from "../../../../Utilitarios/editarProdutoHelper";
import pegarProdutoHelper from "../../../../Utilitarios/pegarProdutoHelper";


import "./Editar.css";


const Editar = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const usuarioLogado = useSelector(state => state.usuario.usuarioLogado);
    const usuarioOnline = useSelector(state => state.usuario.usuarioOnline);
    const categorias = useSelector(state => state.categorias.lista);
    const produtos = useSelector(state => state.cardapio.listaCompleta);



    const [form, setForm] = useState({});
    const [habilitar, setHabilitar] = useState({});


    const onChangeForm = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }


    const habilitarInput = (fieldName) => {

        setHabilitar({
            ...habilitar,
            [fieldName]: habilitar[fieldName] ? false : true
        })
    }


    const colocarValor = (id) => {


        const item = produtos.find(item => item.id === parseInt(id));

        setForm(item);


    }

    const editar = async () => {


        const produtoEditado = {
            ...form,
            preco: form.preco.replace(",", "."),

        };



        const resultado = await editarProdutoHelper(produtoEditado.id, produtoEditado);

        if (resultado) {
            dispatch(atualizarLista())
            history.push("/tela-cardapio");
        } else {
            alert("Ocorreu um erro! Tente novamente!");
        }

    }


    return (
        <section id="secao-editar">
            {usuarioLogado && usuarioOnline.tipo === "1" ?
                <div className="gerenciar-div-interior">
                    <h2>Escolha o produto e edite</h2>

                    <select id="ed-selecionarProduto" name="categoria" onChange={e => colocarValor(e.target.value)}>
                        <option selected disabled value="-1">Selecione</option>
                        {produtos.map(produto =>
                            <option key={produto.id}
                                value={produto.id}>
                                {produto.produto}
                            </option>)}
                    </select>


                    <form onSubmit={e => e.preventDefault()}>
                        <div className="ed-rotulo-campo">
                            <label className="ed-label" htmlFor="produto">
                                Nome do produto:
                            </label>
                            <input id="produto" className="ed-input" name="produto" onChange={onChangeForm}
                                value={form.produto || ""}
                                disabled={habilitar.produto === false ? false : true} />
                            <div onClick={() => habilitarInput("produto")} ><i className="fas fa-edit" ></i></div>
                        </div>
                        <div className="ed-rotulo-campo">
                            <label className="ed-label" htmlFor="preco">
                                Preço:
                            </label>
                            <input id="preco" className="ed-input" name="preco" onChange={onChangeForm}
                                value={form.preco}
                                disabled={habilitar.preco === false ? false : true} />
                            <div onClick={() => habilitarInput("preco")}><i className="fas fa-edit" ></i></div>
                        </div>
                        <div className="ed-rotulo-campo">
                            <label className="ed-label" htmlFor="descricao">
                                Descrição:
                            </label>
                            <input id="descricao" className="ed-input" name="descricao" onChange={onChangeForm}
                                value={form.descricao}
                                disabled={habilitar.descricao === false ? false : true} />
                            <div onClick={() => habilitarInput("descricao")}><i className="fas fa-edit" ></i></div>
                        </div>
                        <div className="ed-rotulo-campo">
                            <label className="ed-label" htmlFor="categoria">
                                Categoria:
                            </label>
                            <select id="categoria" className="ed-input" name="categoria" value={form.categoria} onChange={onChangeForm}>
                                <option selected disabled value="-1">Selecione</option>
                                {categorias.map(item =>
                                    <option value={item} key={item}
                                        disabled={habilitar.categoria === false ? false : true}
                                        selected={item === form.categoria}>
                                        {item === "Infantil" ? item : item.slice(4)}
                                    </option>)}
                            </select>
                            <div onClick={() => habilitarInput("categoria")}><i className="fas fa-edit" ></i></div>
                        </div>
                        <div className="ed-rotulo-campo">
                            <label className="ed-label" htmlFor="imagem">
                                Imagem:
                            </label>
                            <input id="imagem" className="ed-input" name="imagem" onChange={onChangeForm}
                                value={form.imagem}
                                disabled={habilitar.imagem === false ? false : true} />
                            <div onClick={() => habilitarInput("imagem")}><i className="fas fa-edit" ></i></div>
                        </div>
                        <div className="ed-rotulo-campo">
                            <label className="ed-label" htmlFor="imagem_destaque">
                                Imagem de destaque:
                            </label>
                            <input id="imagem_destaque" className="ed-input" name="imagem_destaque" onChange={onChangeForm}
                                value={form.imagem_destaque}
                                disabled={habilitar.imagemDestaque === false ? false : true} />
                            <div onClick={() => habilitarInput("imagemDestaque")}><i className="fas fa-edit" ></i></div>
                        </div>
                        <div className="ed-div-botao">
                            <button className="btn botao-editar" onClick={() => editar()}>Editar</button>
                        </div>
                    </form>
                </div>
                :
                <p>Você precisa estar logado para acessar a página!</p>}


        </section>
    )
}

export default Editar;