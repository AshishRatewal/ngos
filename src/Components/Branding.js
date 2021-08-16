import React from "react";
import Header from "./Header";
const Branding = () => {
  return (
    <>
      <div className="landingPage">
        <div className="container">
          <Header />
          <div className="row landingPage_content">
            <div className="col-12">
              <p>Rasing Hope</p>
              <h1>
                To the homeless &amp; <br /> Hopeless People
              </h1>
              <button className="btn joinBtn text-light">Join Us</button>
              <button className="btn watchbtn text-light">
                Watch the Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branding;
