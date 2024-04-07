import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import assets from "../assets/assets";

const About3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in",
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-8 relative items-center z-10 bg-white">
      <div className="">
        <div className="flex  justify-center">
          <h1 className="text-3xl font-bold mb-5 mt-5 text-white ">
            MEET OUR TEAM
          </h1>
        </div>
        <div className="mt-5 mb-1">
          <h1 className="text-white text-center text-2xl  font-medium">
            Team lead's
          </h1>
        </div>
      </div>
      <div className="w-auto h-1/4 overflow-hidden snap-proximity xl:px-8 xl:pb-8 box-border">
        <Slider {...settings}>
          <Testimonial1
            imageSrc={assets.a}
            imageName="Anushka Pandey - Curation and production"
          />
          <Testimonial1
            imageSrc={assets.a}
            imageName="Abhay Ahluwalia - Curation and sponsorship"
          />
          <Testimonial1
            imageSrc={assets.a}
            imageName="Akshat Rawat- Video production "
          />
          <Testimonial1
            imageSrc={assets.a}
            imageName="Syed Mohd Abid  - event management"
          />
          <Testimonial1
            imageSrc={assets.a}
            imageName="Varshith Sai Gali - event management"
          />
          <Testimonial1
            imageSrc={assets.a}
            imageName="Siddhant Sharma - website "
          />
          <Testimonial1
            imageSrc={assets.a}
            imageName="Ananya Jain - communication, editorial and marketing"
          />
          <Testimonial1
            imageSrc={assets.a}
            imageName="Harddit Bedi - communication, editorial and marketing"
          />
          <Testimonial1
            imageSrc={assets.a}
            imageName="Dharmanshu Singh - design"
          />
        </Slider>
      </div>
    </div>
  );
};

const Testimonial1 = ({ imageSrc, imageName }) => {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center p-4 ">
        <img
          className="w-full h-9/12 object-cover rounded"
          src={imageSrc}
          alt="Testimonial"
        />
        <div className="absolute bottom-5 w-full  justify-center">
          <div className="bg-blue-500 rounded">
            <p className="p-2 text-center xl:font-medium text-white">
              {imageName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
