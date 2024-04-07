import React from "react";
import Whatis from "../components/whatis";
import Agenda from "../components/agenda";
import Itinary from "../components/itinerary";
import FAQ from "../components/faq";
import Header from "../components/Header";
import Landing from "../components/landing";
import Footer from "../components/footer";
import assets from "../assets/assets";

const Home = () => {
  return (
    <div className="relative">
      <img
        alt="Party"
        src={assets.bgimg}
        className="absolute inset-0 bg-cover w-full h-full bg-center"
      />
      <Header />
      <Landing />
      <Whatis />
      <Agenda />
      <Itinary />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
