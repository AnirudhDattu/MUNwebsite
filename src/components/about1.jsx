import React from "react";
import assets from "../assets/assets";
// import assets from '../assets/assets';

const About1 = () => {
  return (
    <div className="lg:pt-24 pt-20">
      <div className="bg-white  relative pt-5 pb-10">
        <div className="text-center text-black text-4xl font-bold">ABOUT</div>
        <div className="text-center text-blue-500 text-4xl font-bold py-5">
          BML MUNJAL UNIVERSITY
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-7 lg:gap-8 mx-6">
          <div class="h-auto col-span-4 text-justify">
            <p class="text-justify lg:mx-28 mx-10 tracking-wide text-xl h-full overflow-y-auto">
              Welcome to BML Munjal University (BMU), where excellence meets
              innovation in higher education. At BMU, we foster a unique
              experiential-learning environment that nurtures curiosity,
              creativity, and problem-solving skills. Our focus extends beyond
              academics and includes sports, research, and industry
              collaborations. Our interdisciplinary approach to education
              ensures that students receive a holistic learning experience,
              preparing them to tackle real-world challenges. Through
              partnerships with leading companies such as KPMG, IBM, Siemens,
              and Hero MotoCorp, students are provided with opportunities for
              practical learning, ensuring they are well-equipped for the
              professional world. With a student-driven campus culture and a
              diverse community representing the breadth of India, BMU is
              dedicated to nurturing leaders equipped to drive initiatives that
              benefit our collective growth and development. With a track record
              of successful events and a student body that embodies drive and
              global readiness, our university is poised to make a difference in
              society through dedication and talent. Join us at BMU, where every
              student is empowered to excel, innovate, and lead towards a
              brighter future. Together, let's shape tomorrow's leaders and
              create a legacy of excellence in education.
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
