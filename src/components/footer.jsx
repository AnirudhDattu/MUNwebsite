import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer className=" py-8 bg-transparent relative">
      <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto px-6">
        <div className="md:w-full mb-4 md:mb-0 md:justify-between">
          <img
            src={assets.footerlogo}
            alt=""
            className="lg:h-fit h-[75] w-fit object-cover mb-4"
          />
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            delectus earum, hic totam maxime atque voluptates quam obcaecati
            nesciunt autem quibusdam animi labore molestiae quis aliquam magnam,
            sunt
          </p>
        </div>
        <div className="md:w-full flex justify-start items-end">
          <a
            href="https://www.instagram.com/bmu.mun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="text-white text-xl mr-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/bml-munjal-model-united-nations-b16216301/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="text-white text-xl mr-4" />
          </a>
          <EmailOutlinedIcon className="text-white text-xl" />
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row md:items-center max-w-6xl mx-auto px-6">
        <div className="md:w-2/5 mb-4 md:mb-0 md:justify-between">
          <img
            src={assets.footerlogo}
            alt=""
            className="h-full w-full object-cover mb-4"
          />
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            delectus earum, hic totam maxime atque voluptates quam obcaecati
            nesciunt autem quibusdam animi labore molestiae quis aliquam magnam,
            sunt
          </p>
        </div>
        <div className="md:w-3/5   item-end ml-10">
          <InstagramIcon className="text-white text-xl mr-4" />
          <LinkedInIcon className="text-white text-xl mr-4" />
          <EmailOutlinedIcon className="text-white text-xl" />
        </div>
      </div> */}
      {/* <div class=" ">
        <div class="grid justify-center grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 max-w-2xl">
          <div class="h-32 rounded-lg bg-gray-200"></div>
          <div class="h-32 rounded-lg bg-gray-200"></div>
        </div>
      </div> */}

      <div className="max-w-6xl mx-auto px-6 mt-4 py-6">
        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white text-sm flex items-center justify-center">
          <CopyrightOutlinedIcon className="mr-2" />
          2024 BML MUNJAL UNIVERSITY
        </div>
      </div>
    </footer>
  );
};

export default Footer;
