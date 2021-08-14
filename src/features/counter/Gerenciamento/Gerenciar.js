import React from "react";
import { Link } from "react-router-dom";

import "./Gerenciar.css";
import criar from "../../../image/create.png";
import deletar from "../../../image/delete.png";
import modificar from "../../../image/transfer.png";


const Gerenciar = () => {

    return (

        <section className="container gerenciar-secao">
            <div className="row">
                <Link to="/tela-cadastro" className="col-12 col-lg-4 card-gerenciar" id="gerenciar-div-criar">
                    <img src={criar} className="img-fluid gerenciar-imagem" alt="Imagem para criar o produto"/>
                    <h5 className="gerenciar-texto">Cadastrar produto</h5>

                </Link>
                <Link to="/tela-editar" className="col-12 col-lg-4 card-gerenciar" id="gerenciar-div-modificar">
                    <img src={modificar} className="img-fluid gerenciar-imagem" alt="Imagem para modificar o produto"/>
                    <h5 className="gerenciar-texto">Editar produto</h5>

                </Link>
                <Link to="/tela-excluir" className="col-12 col-lg-4 card-gerenciar" id="gerenciar-div-deletar">
                    <img src={deletar} className="img-fluid gerenciar-imagem" alt="Imagem para deletar o produto"/>
                    <h5 className="gerenciar-texto">Deletar produto</h5>

                </Link>
            </div>
        </section>
    )


}

export default Gerenciar;