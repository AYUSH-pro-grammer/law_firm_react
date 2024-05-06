import React from 'react';
import './Fotter.css'; // Assuming Fotter.css contains your custom styles

const Fotter = () => {
  return (
    <div>
      <footer className="footer">
        <div className="fotter_container">
          <div className="row">
            <div className="footer-col">
              <h4>Quick Links:</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">about us</a></li>
                <li><a href="#">contact us</a></li>
                <li><a href="#">our team</a></li>
                <li><a href="#">questions</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="#" style={{ fontSize: '18px' }}>Phone Number:</a></li>
                <li><a href="tel:9643827511">+91-9643827511</a></li>
                <li><a href="tel:9643827511">+91-7428476457</a></li>
                <li><a href="#"></a></li>
                <li><a href="#" style={{ fontSize: '18px' }}>email:</a></li>
                <li><a href="mailto:manjuprajapati560@gmail.com">manjuprajapati560@gmail.com</a></li>
                <li><a href="#" style={{ fontSize: '18px' }}>Main office:</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Fotter;
