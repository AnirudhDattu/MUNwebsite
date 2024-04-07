import React from "react";
import Header from "../components/Header";
import assets from "../assets/assets";
import Footer from "../components/footer";

const Sponsors = () => {
  return (
    <div className="relative z-0">
      <img
        alt="Party"
        src={assets.bgimg}
        className="absolute inset-0 bg-cover w-full h-full bg-center"
      />

      <div className=" relative z-10 px-16 py-10">
        <Header />
        <div className="pb-10 pt-32 text-justify text-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            delectus ad vero autem harum impedit cupiditate labore beatae! Eum
            placeat quos pariatur. Velit reiciendis error aperiam provident ut,
            cumque doloremque! Dolorum, eligendi? Reiciendis modi eligendi,
            aperiam, nam totam nulla itaque esse similique, reprehenderit
            facilis soluta accusamus quisquam necessitatibus dolores expedita
            cum deleniti? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam delectus ad vero autem harum impedit cupiditate
            labore beatae! Eum placeat quos pariatur. Velit reiciendis error
            aperiam provident ut, cumque doloremque! Dolorum, eligendi?
            Reiciendis modi eligendi, aperiam, nam totam nulla itaque esse
            similique, reprehenderit facilis
          </p>
        </div>
        <div className="py-12">
          <h1 className="pb-16 text-4xl font-bold text-white text-center">
            PRESENTED BY
          </h1>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 pb-8">
            <div className="h-40 rounded-lg bg-gray-200"></div>
            <div className="h-40 rounded-lg bg-gray-200"></div>
            <div className="h-40 rounded-lg bg-gray-200"></div>
          </div>
        </div>

        <div className="py-12">
          <h1 className="pb-16 text-center text-4xl font-bold text-white ">
            POWERED BY
          </h1>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 pb-8">
            <div className="h-40 rounded-lg bg-gray-200"></div>
            <div className="h-40 rounded-lg bg-gray-200"></div>
            <div className="h-40 rounded-lg bg-gray-200"></div>
          </div>
        </div>

        <div className="py-12">
          <h1 className="pb-16 text-center text-4xl font-bold text-white ">
            ASSOCIATE TITLE
          </h1>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 pb-8">
            <div className="h-40 rounded-lg bg-gray-200"></div>
            <div className="h-40 rounded-lg bg-gray-200"></div>
            <div className="h-40 rounded-lg bg-gray-200"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sponsors;
