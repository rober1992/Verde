import React from "react";
import './Footer.css'
import verde from '../../Img/verde.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return(
        <footer className="pie-pagina">
        <div className="grupo-1">
            <div className="box icon">
                <figure>
                        <img src={verde} alt="Logo de SLee Dw"></img>
                </figure>
            </div>
            <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Somos una empresa familiar que desde 2020 estamos junto a ustedes llevando alegría a sus casas, tratando de dar lo mejor de nosotros y disfrutando de cada momento.</p>
                <p>Nuestro amor por la naturaleza y la decoración nos llevó a seguir innovando y por el amor de ustedes pudimos seguir creciendo.</p>
            </div>
            <div className="box">
                <h2>SEGUINOS</h2>
                <div className="red-social">
                    <a href="https://www.instagram.com/"><InstagramIcon /></a>
                    <a href="https://www.facebook.com/"><FacebookIcon /></a>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2021 <a className="author" href="https://www.linkedin.com/in/roberto-villordo-942940199/"><b>Roberto Villordo</b></a> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
    )
}


export default Footer