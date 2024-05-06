import React, { useEffect } from 'react';
import Navbar from '../../Nav/Navbar';
import './About.css'
import Fotter from '../../fotter/Fotter'

import AOS from 'aos'
import 'aos/dist/aos.css'

function ScrollAnimination(){
  useEffect(() => {
    AOS.init({duration:2000});
  })
}


const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="about_us_heading">
          ABOUT US
        </div>
        <div className="about_us_body">
          <div className="about_us_images">
            <img className="adv_img" id="adv_img_1" src="https://i.ibb.co/KwmrDKn/advocate-manju-prajapati-pic-1.jpg" alt="" />
            <img className="adv_img" id="adv_img_2" src="img/advocate_manju_prajapati_image_2.jpeg" alt="" />
          </div>
          <div className="about_us_content">
            <span>
              <span>
                Welcome to our website, your trusted advocate with over three years of professional experience in the legal field. We are dedicated to providing expert legal guidance and support to individuals, businesses, and organizations in need of skilled advocacy.
              </span>
              <br />
              <br />
              <br />
              <span>
                We understand that legal matters can be complex and overwhelming. That’s why we are here to guide you through every step of the process, ensuring that your rights are protected and your voice is heard. With our extensive knowledge and expertise, we strive to achieve the best possible outcomes for our clients.
              </span>
              <br />
              <br />
              <br />
              <span>Our approach is rooted in integrity, empathy, and a deep commitment to serving the needs of our clients. We believe in building strong relationships based on trust and open communication. By taking the time to understand your unique circumstances and goals, we can develop personalized strategies tailored to your specific legal needs.</span>
              <br />
              <br />
              <br />
              <span>Throughout our career, we have successfully handled a wide range of cases, including but not limited to criminal defense, family law, personal injury, contract disputes, and more. Our experience has equipped us with the necessary skills to navigate the intricacies of the legal system effectively.
              </span>
              <br />
              <br />
              <br />
              <span>
                As your advocate, we will vigorously fight for your rights and interests, using our expertise to craft compelling arguments and negotiate favorable outcomes. We are dedicated to ensuring that justice is served and that you receive the legal representation you deserve.
              </span>
              <br />
              <br />
              <br />
              <span>
                Beyond our legal expertise, we are committed to staying updated with the latest developments in the legal field. We actively engage in continuing education and professional development to enhance our skills and provide you with the highest quality of service.</span>
              <br />
              <br />
              <br />
              <span>
                We understand that legal matters can be emotionally challenging, and we are here to provide you with not only legal support but also emotional support. Our compassionate approach ensures that you feel heard, understood, and supported throughout the entire process.
              </span>
              <br />
              <br />
              <br />
              <span>
                If you are seeking a dedicated advocate with a proven track record of success, look no further than . Contact us today to schedule a consultation and take the first step towards resolving your legal issues. We are here to fight for your rights and bring about a positive resolution to your case.
              </span>
            </span>
          </div>
        </div>
      </div>

      <Fotter />
    </div>
  );
};

export default About;
