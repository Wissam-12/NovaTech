import React,  { useState, useEffect } from "react";
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

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [isMobile, setIsMobile] = useState(true)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    
    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <div className='navBar'>
            <div>
                <img src={logo} alt='Logo'/>
                <div className='NomApp'>
                    DZiyara
                </div>
            </div>
            {
                isMobile ?
                (
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                    </div>
                ) : 
                (
                    <></>
                )
            }
            <div className={isMobile ? menu_class : ""}>
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
        </div>
    )
}
export default NavBar;