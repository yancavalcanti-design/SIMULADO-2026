import React from "react";
import Imgs from './../../../public/Imgs/solchuva.svg'
import './header.css'

function header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={Imgs} alt="Logo Sol e Chuva" />
            </div>
            <div className="titulo">
                <h2>Sol Chuva</h2>
                <p>Tempo certo, onde você estiver.</p>
            </div>
        </div>
    )
}

export default header