import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="w-full  bg-gradient-to-r from-blue-600 to-blue-900 ">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-32 mx-20 py-20">
        <div class="h-60 rounded-lg bg-white bg-opacity-25 border border-white flex justify-center items-center">
          <div class="text-white font-bold text-center text-xl ">
            Participant Brochure
          </div>
        </div>
        <div class="h-60 rounded-lg bg-white bg-opacity-25 border border-white flex justify-center items-center">
          <div class="text-white font-bold text-center text-xl ">
            code Of Conduct
          </div>
        </div>
        <div class="h-60 rounded-lg bg-white bg-opacity-25 border border-white flex justify-center items-center">
          <div class="text-white font-bold text-center text-xl ">
          Handbook
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="text-white text-center font-bold text-4xl tracking-wide">
          FAQS
        </div>
        <div className="p-4 ">
          <Accordion
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam delectus ad vero autem harum
            impedit cupiditate labore beatae! Eum placeat"
          />
          <Accordion
            title="Do you prefer writing CSS or Tailwind?"
            answer="I like to use Tailwind"
          />
          <Accordion
            title="Firebase or Supabase?"
            answer="I am using Supabase!"
          />
          <Accordion
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam delectus ad vero autem harum
            impedit cupiditate labore beatae! Eum placeat"
          />
          <Accordion
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam delectus ad vero autem harum
            impedit cupiditate labore beatae! Eum placeat"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
