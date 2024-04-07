import React from "react";
import Whatis from "./whatis";
import Agenda from "./agenda";
import Itinary from "./itinerary";
import FAQ from "./faq";
import Header from "./Header";
import assets from "../assets/assets";

const Home = () => {
  return (
    <div>
      <div className="relative">
        {/* Home Image */}
        <img
          src={assets.homeimg}
          alt=""
          className="w-full object-cover h-screen brightness-25 "
        />
        <img
          src={assets.homelogo}
          alt=""
          className="w-[75%] md:w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 "
        />
      </div>
      <div className="relative bottom-0 left-0 w-full">
        <Whatis />
        <Agenda />
        <Itinary />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
