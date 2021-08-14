import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./MenuPrincipal.css";
import logo from "../../../../image/logo.png";
import { salvarUsuario, realizarLogout } from "../../../../Store/Slices/usuarioSlice";
import { useSelector } from "react-redux";




const MenuPrincipal = () => {

    const usuarioLogado = useSelector(state => state.usuario.usuarioLogado);
    const usuarioOnline = useSelector(state => state.usuario.usuarioOnline);

    const dispatch = useDispatch();
    const history = useHistory();

    const [sair, setSair] = useState(false);

    const logout = () => {

        // retirar a info do localStorage
        localStorage.removeItem("usuario");

        // remover o usuário
        dispatch(realizarLogout())

        // retornar pra página principal
        history.push("/");


        setSair(false);
    }


    return <>
        <nav id="mp-container-nav" className="navbar navbar-expand-lg  fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><img src={logo} alt="Logo do restaurante"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/tela-cardapio" className="nav-link">Cardápio</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Localização</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Nossa História</a>
                        </li>

                        {usuarioLogado && usuarioOnline.tipo === "1" ?
                            <li className="nav-item mp-div-login">
                                <Link to="/tela-geranciar" className="menu-restrito">Gerenciar</Link>
                            </li>
                            : null}

                        {usuarioLogado ?

                            <>
                                <li className="nav-item mp-div-login">
                                    <Link to="/tela-mesa" className="menu-restrito">Mesa</Link>
                                </li>
                                <li className="nav-item mp-div-login">
                                    Bem vindo,
                                    <span id="mp-nome-usuario"> {usuarioOnline.nome}</span>
                                </li>
                                <li>
                                    <button id="mp-login" className="btn" role="button" onClick={() => setSair(true)}>
                                        <i id="mp-icon" className="fas fa-sign-in-alt"></i>
                                        Sair
                                    </button>
                                </li>
                            </>
                            :

                            <li>
                                <Link to="/tela-login" id="mp-login" className="btn" role="button">
                                    <i id="mp-icon" className="fas fa-sign-in-alt"></i>
                                    Login
                                </Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
        {sair ?
            <div id="logout-toast">
                <h5 id="logout-frase">Você tem certeza? </h5>
                <div id="mp-logout-div-botao">
                    <button className="btn toast-botao" onClick={() => logout()}>Sim</button>
                    <button className="btn toast-botao" onClick={() => setSair(false)}>Não</button>
                </div>
            </div>
            : null}
    </>

};

export default MenuPrincipal;