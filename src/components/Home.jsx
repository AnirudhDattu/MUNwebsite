import React from "react";
import Whatis from "./whatis";
import Agenda from "./agenda";
import Itinary from "./itinerary";
import FAQ from "./faq";
import Header from "./Header";
import assets from "../assets/assets";

const Home = () => {
  return (
    <div className="relative">
      <div className="relative">
        {/* Home Image */}
        <img
          src={assets.homeimg}
          alt=""
          className="w-full h-screen brightness-25 "
        />

        {/* Header */}
        {/* <div className="absolute top-0 left-0 w-full bg-transparent">
          <Header />
        </div> */}

        {/* Home Logo */}
        <img
          src={assets.homelogo}
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 z-10 "
        />
      </div>

      {/* Other Components */}
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
