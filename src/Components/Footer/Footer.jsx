import React from "react";
import './Footer.css';
import logo from "../../Assets/LogoDZiyara.png";
import ministre from "../../Assets/ministre.png";
import nova from "../../Assets/novaTech.png";
import { FaGlobe, FaHeart, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    
    return (
        <div className="footer">
            <div className="logos">
                <img src={logo} alt="LogoDZiyara"/>
                <img src={ministre} alt="Ministre de l'artisanat"/>
            </div>
            <div className="madeWith">
                <h3>Made with</h3>
                <FaHeart size="33" color="#D03737"/>
                <h3>by</h3>
                <img src={nova} alt="Novatech"/>
            </div>
            <h1>Contactez nous</h1>
            <p>Contactez-nous par email contact@dziyara.dz ou sur nos réseaux sociaux</p>
            <div className="contacts">
                <FaGlobe size="40"/>
                <FaFacebook size="40"/>
                <FaLinkedin size="40"/>
                <FaTwitter size="40"/>
            </div>
        </div>
    )
}
export default Footer;