import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const LoveCareCharity = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="loveCareCharity" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0">
              <p>LOVECARE CHARITY</p>
              <h2>
                The Smallest Act of Kindness is Worth <br /> More Than the
                Grandest Intention
              </h2>
              <button className="btn donate">Donate Now!</button>
              <button className="btn becameVol">Become A Volunteer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoveCareCharity;
