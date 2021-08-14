import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {  salvarPesquisa, SEM_CATEGORIA, filtrarCardapioPorMaiorPreco, filtrarCardapioPorCategoria, filtrarCardapioPorPesquisa, filtrarCardapioPorMenorPreco } from "../../../../../Store/Slices/cardapioSlice";
import { salvarCategorias } from "../../../../../Store/Slices/categoriasSlice";



import "./NavCardapio.css";


const NavCardapio = () => {

    const lista = useSelector(state => state.categorias.lista);
    const categoriaSelecionada = useSelector( state => state.cardapio.categoriaSelecionada);
    const produto = useSelector( state => state.cardapio.lista );

    const dispatch = useDispatch();

    return <>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient" id="navBar-principal">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </span>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                {lista.map( categoria =>  
                                    <li key={categoria}>
                                        <a className="dropdown-item" 
                                        onClick={ () => dispatch( filtrarCardapioPorCategoria(categoria) )}
                                        >{categoria === "Infantil" ? categoria : categoria.slice(4) }</a>
                                    </li>
                                )}
                                <li key={SEM_CATEGORIA}>
                                        <a className="dropdown-item" 
                                        onClick={ () => dispatch( filtrarCardapioPorCategoria(categoriaSelecionada) )}
                                        >Todas</a>
                                    </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ordenar
                            </span>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><span className="dropdown-item" onClick={ () => dispatch( filtrarCardapioPorMenorPreco(produto) )}>Menor valor</span></li>
                                <li><span className="dropdown-item" onClick={ () => dispatch( filtrarCardapioPorMaiorPreco(produto) )}>Maior valor</span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <form className="d-flex" onSubmit={ e => e.preventDefault()}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e => dispatch( salvarPesquisa( e.target.value) )}/>
                    <button className="btn btn-dark lc-nav-botao" type="submit" onClick={ () => dispatch( filtrarCardapioPorPesquisa() ) }>Procurar</button>
                </form>
            </div>
        </nav>
    </>
}

export default NavCardapio;