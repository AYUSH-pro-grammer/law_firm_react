import React, { useEffect } from "react";
import "./advs.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Advs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <h1 className="adv_main_heading">Our Team:</h1>
      <div className="adv_cont">
        <section className="adv_cont_1 adv_cont_solo" data-aos="zoom-in">
          <div className="adv_body">
            <div className="adv_image"></div>
            <h2 className="adv_heading">Advocate 1</h2>
            <p className="adv_para">
              About Advocate: Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Et officia consectetur incidunt!
            </p>
            <button className="adv_btn">Call Now</button>
          </div>
        </section>
        <section className="adv_cont_2 adv_cont_solo" data-aos="zoom-in">
          <div className="adv_body">
            <div className="adv_image"></div>
            <h2 className="adv_heading">Advocate 1</h2>
            <p className="adv_para">
              About Advocate: Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Et officia consectetur incidunt!
            </p>
            <button className="adv_btn">Call Now</button>
          </div>
        </section>
        <section className="adv_cont_3 adv_cont_solo" data-aos="zoom-in">
          <div className="adv_body">
            <div className="adv_image"></div>
            <h2 className="adv_heading">Advocate 1</h2>
            <p className="adv_para">
              About Advocate: Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Et officia consectetur incidunt!
            </p>
            <button className="adv_btn">Call Now</button>
          </div>
        </section>
      </div>

      <section >
        <h1 className="adv_main_heading" >Location</h1>
        <iframe className="location"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7006.47628576766!2d77.34554477484824!3d28.592631785892674!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714581783435!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Advs;
