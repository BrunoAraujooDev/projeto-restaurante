import React from "react";
import "./Rodape.css";

const Rodape = ( ) => {
    return <>
        <footer id="rdp-rodape" >
            <div className="row">
                <div id="rdp-sobre col col-lg-4 col-xxl-4">
                    <p>Sobre nós</p>
                    <p>Carreira</p>
                    <p>Parguntas frequentes</p>
                </div>
            </div>
            <div className="row">
                <div id="rdp-transparencia col col-lg-4 col-xl-4">
                    <p>Política de privacidade</p>
                    <p>Política de complience</p>
                    <p>Contratos</p>
                </div>
            </div>
            <div className="row">
                <div id="rdp-ouvidoria col col-lg-4 col-xl-4">
                    <p>(XX) XXX-XXXX)</p>
                    <p>teste@teste.com.br</p>
                    <p>Atendimento 24h</p>
                </div>
            </div>
        </footer>

    </>
    
};

export default Rodape;