import React from 'react';
import './Contact.css';
import Navbar from '../../Nav/Navbar';
import Fotter from '../../fotter/Fotter'


const Contact = () => {
  return (

    <div>
        <Navbar />
      <h2 className="form_heading">Contact Form</h2>

      <form className="contact_form" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="fbaa2d31-882d-460d-9671-40b12bc86aba" />
        
        <label htmlFor="first_name">First Name:</label><br />
        <input className="inputs" type="text" id="first_name" name="first_name" required /><br /><br />
        
        <label htmlFor="last_name">Last Name:</label><br />
        <input className="inputs" type="text" id="last_name" name="last_name" required /><br /><br />
        
        <label htmlFor="phone_number">Phone Number:</label><br />
        <input className="inputs" type="tel" id="phone_number" name="phone_number" required /><br /><br />
        
        <label htmlFor="email">Email(Optional):</label><br />
        <input className="inputs" type="email" id="email" name="email" /><br /><br />
        
        <label htmlFor="subject">Subject (Optional):</label><br />
        <input className="inputs" type="text" id="subject" name="subject" /><br /><br />
        
        <label htmlFor="description">Description (Optional):</label><br />
        <textarea style={{ height: '100px' }} className="inputs" id="description" name="description" /><br /><br />
        
        <div className="h-captcha" data-captcha="true"></div>

        <input className="submit_form_btn" type="submit" value="Submit" />
      </form>
      <Fotter />
    </div>
  );
};

export default Contact;
