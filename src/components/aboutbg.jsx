import React from "react";
import About1 from "./about1";
import About2 from "./about2";
import About3 from "./about3";
import assets from "../assets/assets";


const Aboutbg = () => {
  return (
    <div>
      <div>
        <img
          alt="Party"
          src={assets.bgimg}
          className="absolute inset-0 bg-cover bg-center"
        />
      </div>
      <About1 />
      <About2/>
      <About3/>
    </div>
  );
};

export default Aboutbg;
