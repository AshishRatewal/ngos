import React from "react";
import Branding from "../Components/Branding";
import CareChildren from "../Components/CareChildren";
import Copyright from "../Components/Copyright";
import Footer from "../Components/Footer";
import TechnicalStatistics from "../Components/TechnicalStatistics";
import Testimonials from "../Components/Testimonials";
import Volunteer from "../Components/Volunteer";
const About = () => {
  return (
    <>
      <div className="aboutUs">
        <Branding />
        <CareChildren />
        <TechnicalStatistics />
        <Volunteer />
        <Testimonials />
        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default About;
