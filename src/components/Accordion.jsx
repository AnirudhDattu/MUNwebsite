import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <div className="flex items-center">
        <button
          className="w-full text-left text-white"
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          {title}
        </button>
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex items-center text-white"
        >
          <svg
            className="fill-white shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden mt-2 text-justify">{answer}</div>
        {/* <div className={`overflow-hidden mt-2  ${window.innerWidth < 768 ? 'max-w-sm' : ''}`}>{answer}</div> */}
      </div>
      <hr className="mt-1" />
    </div>
  );
};

export default Accordion;
