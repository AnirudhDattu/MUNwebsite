import Header from "./Header";
import assets from "../assets/assets";

const Landing = () => {
  return (
    <div className="relative">
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
  );
};

export default Landing;
