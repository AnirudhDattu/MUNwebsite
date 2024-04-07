import React from "react";
import assets from "../assets/assets";
// import assets from '../assets/assets';

const About1 = () => {
  return (
    <div className="lg:pt-24 pt-28">
      <div className="bg-white  relative pt-5 pb-10">
        <div className="text-center text-black text-4xl font-bold">ABOUT</div>
        <div className="text-center text-blue-500 text-4xl font-bold py-5">
          BML MUNJAL UNIVERSITY
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-7 lg:gap-8 mx-6">
          <div class="h-auto col-span-4 text-justify">
            <p class="mx-4 lg:mx-10 h-full overflow-y-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              delectus ad vero autem harum impedit cupiditate labore beatae! Eum
              placeat quos pariatur. Velit reiciendis error aperiam provident
              ut, cumque doloremque! Dolorum, eligendi? Reiciendis modi
              eligendi, aperiam, nam totam nulla itaque esse similique,
              reprehenderit facilis soluta accusamus quisquam necessitatibus
              dolores expedita cum deleniti? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam delectus ad vero autem
              harum impedit cupiditate labore beatae! Eum placeat quos pariatur.
              Velit reiciendis error aperiam provident ut, cumque doloremque!
              Dolorum, eligendi? Reiciendis modi eligendi, aperiam, nam totam
              nulla itaque esse similique, reprehenderit facilis soluta Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              delectus ad vero autem harum impedit cupiditate labore beatae! Eum
              placeat quos pariatur. Velit reiciendis error aperiam provident
              ut, cumque doloremque! Dolorum, eligendi? Reiciendis modi
              eligendi, aperiam, nam totam nulla itaque esse similique,
              reprehenderit facilis soluta accusamus quisquam necessitatibus
              dolores expedita cum deleniti? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam delectus ad vero autem
              harum impedit cupiditate labore beatae! Eum placeat quos pariatur.
              Velit reiciendis error aperiam provident ut
            </p>
          </div>
          <div className="col-span-3">
            <div class="container mx-auto ">
              <div class="md:flex hidden flex-wrap">
                <div class="flex flex-wrap content-start">
                  <div class="h-2/6 w-full  p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src={assets.about1}
                    />
                  </div>
                  <div class="w-1/2 h-2/5 p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src={assets.about2}
                    />
                  </div>
                  <div class="w-1/2 h-2/5 p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src={assets.about3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
