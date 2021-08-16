import React from "react";
import Branding from "../Components/Branding";
import Copyright from "../Components/Copyright";
import Footer from "../Components/Footer";
import OurCauses from "../Components/OurCauses";

const Causes = () => {
  return (
    <>
      <div className="causesPage">
        <Branding />
        <OurCauses />
        <OurCauses />
        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default Causes;
