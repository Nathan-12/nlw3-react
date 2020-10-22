import React from 'react';
import '../styles/pages/create-orphanage-success.css';
import { Link } from 'react-router-dom';

export default function CreateOrphanageSuccess(){
    return(
        <div id="success-page">
            <div className="content-success">
            <main>
                <h1>Ebaaa!!</h1>
                <p>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar</p>
                <Link to="/app" className="back-mapp">
                    Voltar ao mapa
                </Link>
            </main>
            </div>
            
        </div>
    );
}