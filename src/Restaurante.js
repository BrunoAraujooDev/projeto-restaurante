import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Cabecalho from "./features/counter/Cabecalho/Cabecalho";
import Rodape from "./features/counter/Rodape/Rodape";
import ConteudoCentral from "./features/counter/ConteudoCentral/ConteudoCentral";
import Login from "./app/axios/Login/Login";

import axios from "./app/axios/axios";
import { salvarCardapio } from "./Store/Slices/cardapioSlice";
import { salvarCategorias } from "./Store/Slices/categoriasSlice";
import "./Restaurante.css";
import ListaCardapio from "./features/counter/ConteudoCentral/ListaCardapio/ListaCardapio";
import Gerenciar from "./features/counter/Gerenciamento/Gerenciar";
import Cadastro from "./features/counter/Gerenciamento/Cadastro/Cadastro";
import Editar from "./features/counter/Gerenciamento/Editar/Editar";
import Excluir from "./features/counter/Gerenciamento/Excluir/Excluir";



const Restaurante = ( ) => {

    const dispatch = useDispatch();

    const atualizarListaCompleta = useSelector( state => state.cardapio.atualizarListaCompleta);

    useEffect( async () => {

        try {
            const resposta = await axios.get("cardapio");
            dispatch( salvarCardapio(resposta.data) );
            dispatch( salvarCategorias(resposta.data) );

        } catch (e) {
            console.log(`Houve um erro na chamada Ajax: ${e}`);
        }


    }, [atualizarListaCompleta]);

    return <>

        <BrowserRouter >

            <Cabecalho /> 

            <Switch>
            
                <Route exact path="/">

                    <div id="container">
                        <ConteudoCentral />
                    </div>

                </Route>


                <Route path="/tela-login" > 

                    <div id="div-login">
                        <Login />
                    </div>

                </Route>


                <Route path="/tela-cardapio" component={ ListaCardapio } />
                <Route path="/tela-geranciar" component={ Gerenciar } />
                <Route path="/tela-cadastro" component={ Cadastro } />
                <Route path="/tela-editar/" component={ Editar } />
                <Route path="/tela-excluir/" component={ Excluir } />

            </Switch>

            <Rodape />

        </BrowserRouter>
    </>
    
};

export default Restaurante;