import React from "react";
import Profile from "../../assets/home.jpg"
import {Link} from "react-router-dom";
import { FaArrowRight} from "react-icons/fa";
import "./home.css"

const Home = () => {
  return (
    <section className='home section grid'>
        <img src= {Profile} alt="" className='home__img'/>
        <div className="home__content">
            <div className="home__data">
                <h1 className="home__title">
                    <span>I am Kgaogelo Tshabalala.</span> Full-stack developer
                </h1>
                <p className="home__description">
                    I am a South African based full-stack developer focused on crafting clean & user-friendly experiences. I am passionate
                    about buidling excellent software that adds practical value. 
                </p>
                <Link to ="./about" className = "button">
                    More ABout Me{' '}
                    <span className="button__icon">
                        <FaArrowRight/>
                    </span>
                </Link>
            </div>
        </div>
        <div className="color__block">
        </div>
    </section>
  );
};

export default Home