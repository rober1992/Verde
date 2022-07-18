import React from "react";
import missing from '../../Img/404.png';
import { Link } from "react-router-dom";
import './Page404.css'

const MissingPage = () => {
    return(
            <div className="div404">
                <img className="imgMissing" src={missing} alt=""></img>
                <div className="rowMissing">
                    <h1 className="textMissing">Estamos verdes de la verguenza</h1>
                    <p className="planted">No encontramos la pagina que estas buscando, parece que el servidor nos dejo plantado.</p>
                    <Link to={'/'}><button className="backToHome">Volver a la pagina principal</button></Link>
                </div>
            </div>

    )
}

export default MissingPage;