import React,  { useState } from "react";
import './Header.css';
import logo from '../../Assets/LogoDZiyara.png';
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const user = useSelector((state) => state.user.value);
    const navigate = useNavigate();

    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
      };

    return (
        <div className='navBar'>
            <div>
                <img src={logo} alt='Logo'/>
                <div className='NomApp'>
                    DZiyara
                </div>
            </div>
            <ul>
                <li 
                    className={activeItem === 'home' ? 'active' : ''}
                    onClick={() => handleItemClick('home')}>
                        Accueille
                </li>
                <li 
                    className={activeItem === 'news' ? 'active' : ''}
                    onClick={() => handleItemClick('news')}>
                        Actualités
                </li>
                <li 
                    className={activeItem === 'tendance' ? 'active' : ''}
                    onClick={() => handleItemClick('tendance')}>
                        Tendance
                </li>
                <li 
                    className={activeItem === 'about' ? 'active' : ''}
                    onClick={() => handleItemClick('about')}>
                        À propos
                </li>
                <li 
                    className={activeItem === 'footer' ? 'active' : ''}
                    onClick={() => handleItemClick('footer')}>
                        Contact
                </li>
            </ul>
            <div className="buttons">
                <button id = "signin">S'inscrire</button>
                <button >Se connecter</button>
            </div>
        </div>
    )
}
export default NavBar;