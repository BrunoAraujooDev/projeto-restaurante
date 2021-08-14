import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { atualizarLista } from "../../../../Store/Slices/cardapioSlice";
import salvarProdutoHelper from "../../../../Utilitarios/salvarProdutoHelper";


import "./Cadastro.css";


const Cadastro = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const usuarioLogado = useSelector(state => state.usuario.usuarioLogado);
    const usuarioOnline = useSelector(state => state.usuario.usuarioOnline);
    const categorias = useSelector(state => state.categorias.lista);

    const [titulo, setTitulo] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [imagemDestaque, setImagemDestaque] = useState("");

    const enviarCadastro = () => {

        const novoProduto = {
            produto: titulo,
            preco: preco.replace(",", "."),
            descricao: descricao,
            categoria: categoria,
            imagem: imagem,
            imagem_destaque: imagemDestaque
        };

        const resultado = salvarProdutoHelper(novoProduto);

        if(resultado){
            dispatch(atualizarLista())
            history.push("/tela-cardapio");
        } else {
            alert("Ocorreu um erro! Tente novamente!");
        }
            
    }

    return (
        <section id="secao-cadastro">

            {usuarioLogado && usuarioOnline.tipo === "1" ?
                <form onSubmit={ e => e.preventDefault() }>
                    <div>
                        <label htmlFor="produto">
                            Nome do produto:
                        </label>
                        <input id="produto" name="produto" onChange={ e => setTitulo( e.target.value ) }/>
                    </div>
                    <div>
                        <label htmlFor="preco">
                            Preço:
                        </label>
                        <input id="preco" name="preco" onChange={ e => setPreco( e.target.value ) }/>
                    </div>
                    <div>
                        <label htmlFor="descricao">
                            Descrição:
                        </label>
                        <input id="descricao" name="descricao" onChange={ e => setDescricao( e.target.value ) }/>
                    </div>
                    <div>
                        <label htmlFor="categoria">
                            Categoria:
                        </label>
                        <select id="categoria" name="categoria" onChange={ e => setCategoria( e.target.value ) }>
                            <option selected disabled value="-1">Selecione</option>
                            {categorias.map( categoria => 
                                <option value={ categoria } key={categoria}>{categoria === "Infantil" ? categoria : categoria.slice(4) }</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="imagem">
                            Imagem:
                        </label>
                        <input id="imagem" name="imagem" onChange={ e => setImagem( e.target.value ) }/>
                    </div>
                    <div>
                        <label htmlFor="imagemDestaque">
                            Imagem de destaque:
                        </label>
                        <input id="imagemDestaque" name="imagemDestaque" onChange={ e => setImagemDestaque( e.target.value ) }/>
                    </div>
                    <button className="btn btn-primary" onClick={ () => enviarCadastro() }>Salvar</button>
                </form>
                :
                <p>Você precisa estar logado para acessar a página!</p>}


        </section>
    )
}

export default Cadastro;