import React, {useEffect} from "react";
import Card from "../../Cards/Card";
import "./Home.css";
import Fotter from "../../fotter/Fotter";
import Theme from "../../assets/night_light_mode/Theme";


import Advs from "../../assets/advocate_cards_loction/Advs";





const Home = () => {
  return (
    <div>
      <div className="upper_body">
        <h1 className="heading" data-aos="zoom-in">
          Receive Expert Legal Help
          <br />
          From&nbsp;Top&nbsp;Rated&nbsp;Lawyers
        </h1>
        <div className="btn_cont">
          <a href="tel:+919643827511" className="btn_1" >
            TALK TO LAWYER
          </a>
          <a href="https://wa.me/919643827511" className="btn_2">
            ASK A FREE QUESTION
          </a>
        </div>
      </div>
      <Card />
      <Fotter />
      <Theme />
    </div>
  );
};

export default Home;
