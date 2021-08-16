import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import img1 from "./assets/img/slider4.webp";
import img2 from "./assets/img/testimonials.webp";
const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 2000,
    });
  }, []); 
  return (
    <>
      <div className="footer" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="header">
                <h1>
                  LOVE<span className="yellow">CARE</span>
                </h1>
                <p>THAPER THEME</p>
              </div>
              <p className="footer_content">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <div class="footer_social_icon">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
            <div className="col-md-4 footer_middle">
              <h4>Recent Posts</h4>
              <div className="footer_middle_content">
                <div className="row">
                  <div className="col-4">
                    <img src={img1} alt="img1" className="img-fluid rounded" />
                  </div>
                  <div className="col-8">
                    <small>
                      <span> Feb. 22, 2021</span>
                      <span>Admin</span>
                    </small>
                    <p>Ecological System Responsible for Green Energy</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <img src={img2} alt="img1" className="img-fluid rounded" />
                  </div>
                  <div className="col-8">
                    <small>
                      <span> Feb. 22, 2021</span>
                      <span>Admin</span>
                    </small>
                    <p>Ecological System Responsible for Green Energy</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer_right">
              <h4>Have a Question?</h4>
              <address>
                203 Fake St. Mountain View, San Francisco, California, USA
              </address>
              <p>
                <a
                  href="tel:	+2 392 3929 210
"
                >
                  +2 392 3929 210
                </a>
              </p>
              <p>
                <a href="mailto:theleadorigin@gmail.com">info@leadorigin.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
