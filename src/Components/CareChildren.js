import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "./assets/img/careChildren.png";
const CareChildren = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="careChildren" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={img1} alt="Img" className="img-fluid" />
            </div>
            <div className="col-md-6 careChildren-right">
              <div className="header">
                <p>WELCOME TO LOVECARE NON-PROFIT CHARITY</p>
                <h1>
                  Do You Care Our <br /> Children?
                </h1>
              </div>
              <div className="content-careChildren">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <button className="btn voluenteer">Be A Volunteer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareChildren;
