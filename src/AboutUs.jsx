import React from "react";
import Header from "./Header";
import About1 from "./components/about1";
import About2 from "./components/about2";
import About3 from "./components/about3";
import assets from "./assets/assets";

const AboutUs = () => {
  return (
    <div>
      {/* Include the Header component */}
      {/* <Header /> */}

      {/* Other content */}
      <div>
        <img
          alt="Party"
          src={assets.bgimg}
          className="absolute inset-0 bg-cover bg-center"
        />
      </div>
      <About1 />
      <About2 />
      <About3 />
    </div>
  );
};

export default AboutUs;
