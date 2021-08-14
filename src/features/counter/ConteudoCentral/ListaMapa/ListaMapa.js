import React from "react";
import "./ListaMapa.css";





const ListaMapa = ( ) => {
    return <>
        <section id="lm-principal">
            <div className="row">
                 <div className="lm-texto-principal col col-lg-12 col-xxl py-5">
                    <h2>Venha nos visitar e saborear um dos nossos pratos!</h2>
                </div>
            </div>
            <div className="row lm-div-mapa">
                <div className="col-12 col-lg-6 col-xxl lm-div-img"> 
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.197807724372!2d-43.17900708448775!3d-22.906073743605585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5fd24e0bdd%3A0x99447fc2607f1de1!2sInstituto%20Infnet%20-%20Faculdade%20de%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1627325306292!5m2!1spt-BR!2sbr" 
                    allowFullScreen="" loading="lazy" id="lm-mapa" title="mapa"></iframe>
                </div>
            </div>
            
            
        </section>
    </>
    
};

export default ListaMapa;

// style={ {border: 0, width:"600", height: "450"} }