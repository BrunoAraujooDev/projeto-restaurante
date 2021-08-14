import React from "react";
import { useSelector } from "react-redux";

import "./ListaCardapio.css";
import NavCardapio from "./NavCardapio/NavCardapio";





const ListaCardapio = () => {

    const lista = useSelector(state => state.cardapio.lista);



    return <>

        <div id="secao-cardapio">
            
            <NavCardapio />
            <section className="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3  lc-principal">

                {lista.map( item => 
                    <article className="card mb-3  "  key={item.id}>
                    <div className="row g-0">
                        <div className="col-md-4 lc-div-imagem">
                            <img src={item.imagem} className="img-fluid rounded-start card-img" alt={item.produto}/>
                        </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.produto}</h5>
                                    <p className="card-text">{item.descricao}</p>
                                    <p className="card-text"><small className="text-muted">R$ {item.preco}</small></p>
                                </div>
                            </div>
                        </div>
                    </article>) }
            </section>
        </div>
    </>
    
};

export default ListaCardapio;