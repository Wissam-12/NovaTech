import React from "react";
import NavBar from '../../Components/Header/Header.jsx';
import './index.css';
import Home from './home.jsx'
import News from './news.jsx'
import Tendance from "./tendance.jsx";

const LandingPage = () => {
    const events = [
        {
            "name": "Yennayer",
            "description" : "Justo dolor mollis sapien a accumsan enim ipsum, nec neque. Sed et ultrices risus. Aliquam auctor, erat eget vehicula sodales, enim ligula malesuada ipsum.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Berb%C3%A8res_folklore_Algeria.jpg/200px-Berb%C3%A8res_folklore_Algeria.jpg"
        },
        {
            "name": "Janvier",
            "description" : "Justo dolor mollis sapien a accumsan enim ipsum, nec neque. Sed et ultrices risus. Aliquam auctor, erat eget vehicula sodales, enim ligula malesuada ipsum.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Berb%C3%A8res_folklore_Algeria.jpg/200px-Berb%C3%A8res_folklore_Algeria.jpg"
        }
    ]

    const scrollToSection = () => {
        const section = document.getElementById('target-section');
        section.scrollIntoView({ behavior: 'smooth' });
      };

      
    return(
        <div className="Landing">
            <NavBar/>
            <Home/>
            <News eventList={events}/>
            <Tendance eventList={events}/>
        </div>
    )
}

export default LandingPage;