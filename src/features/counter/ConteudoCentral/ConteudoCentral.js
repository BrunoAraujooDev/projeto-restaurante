import React from "react";

import ListaIntroducao from "./ListaIntroducao/ListaIntroducao";
import ListaMapa from "./ListaMapa/ListaMapa";
import ListaHistoria from "./ListaHistoria/ListaHistoria";

import "./ConteudoCentral.css";



const ConteudoCentral = ( ) => {
    return <>
        <main className="row main-conteudo">
            <ListaIntroducao />
            <ListaHistoria />
            <ListaMapa />
        </main>

    </>
    
};

export default ConteudoCentral;