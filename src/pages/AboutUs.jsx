import React from "react";
import Header from "../components/Header";
import About1 from "../components/about1";
import About2 from "../components/about2";
import About3 from "../components/about3";
import assets from "../assets/assets";

const AboutUs = () => {
  return (
    <div className="relative">
      {/* Include the Header component */}
      <Header />
      {/* Other content */}
      <img
        alt="Party"
        src={assets.bgimg}
        className="absolute inset-0 bg-cover w-full h-full bg-center"
      />
      <div></div>

      <About1 />
      <About2 />
      <About3 />
    </div>
  );
};

export default AboutUs;
