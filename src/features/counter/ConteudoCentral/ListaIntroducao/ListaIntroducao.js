import React from "react";
import "./ListaIntroducao.css";
import carne from "../../../../image/carne.jpg"
import sobremesa from "../../../../image/sobremesa.jpg"
import massa from "../../../../image/massa.jpg"


const ListaIntroducao = () => {

    return <> 
            <section id="li-principal">
                <div id="carouselExampleFade " className=" carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner li-carrosel">
                        <div className="carousel-item li-div active">
                            <img src={carne} className="d-block w-100 li-imagem-carrosel img-fluid" alt="Imagem de uma carne"/>
                            <div className="carousel-caption d-none d-md-block li-texto-principal">
                                <h2 className="display-5">CARNES</h2>
                                <p className="li-paragrafo">Os melhores cortes estão aqui.</p>
                            </div>
                        </div>
                        <div className="carousel-item li-div">
                            <img src={massa} className="d-block w-100 li-imagem-carrosel img-fluid" alt="Imagem de um macarrão"/>
                            <div className="carousel-caption d-none d-md-block li-texto-principal">
                                <h2 className="display-5">MASSAS</h2>
                                <p className="li-paragrafo">Massas artesanais com toque exclusivo do molho da casa.</p>
                            </div>
                        </div>
                        <div className="carousel-item li-div">
                            <img src={sobremesa} className="d-block w-100 li-imagem-carrosel img-fluid" alt="Sobremesa gelada"/>
                            <div className="carousel-caption d-none d-md-block li-texto-principal">
                                <h2 className="display-5">SOBREMESAS</h2>
                                <p className="li-paragrafo">Delicadas, leves e com texturas consistentes.</p>
                            </div>
                        </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Próximo</span>
                    </button> */}
                </div>
            </section>
        </>     
    
};

export default ListaIntroducao;


