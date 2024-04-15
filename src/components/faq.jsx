import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="w-full  bg-transparent relative ">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-32 mx-20 py-20">
        <div class="h-60 rounded-lg bg-white bg-opacity-25 border border-white flex justify-center items-center">
          <div class="text-white font-bold text-center text-xl ">
            Participant Brochure
          </div>
        </div>
        <div class="h-60 rounded-lg bg-white bg-opacity-25 border border-white flex justify-center items-center">
          <div class="text-white font-bold text-center text-xl ">
            Code Of Conduct
          </div>
        </div>
        <div class="h-60 rounded-lg bg-white bg-opacity-25 border border-white flex justify-center items-center">
          <div class="text-white font-bold text-center text-xl ">Handbook</div>
        </div>
      </div>
      <div className="p-4 lg:px-20">
        <div className="text-white text-center font-bold text-4xl tracking-wide">
          FAQS
        </div>
        <div className="p-4 ">
          <Accordion
            title="Who can participate in MUN?"
            answer={
              <span>
                School students from <strong>Grade 10</strong> to
                <strong>Grade 12</strong> are eligible, as well as college
                students enrolled in <strong>undergraduate (UG)</strong> to{" "}
                <strong>postgraduate (PG)</strong>
                programs. Students who have completed their final examinations
                but have not enrolled in higher education institutions are also
                encouraged to apply.
              </span>
            }
          />
          <Accordion
            title="How does an MUN work?"
            answer="An MUN works by simulating the United Nations, where students represent countries and discuss global issues, aiming to draft resolutions through negotiation and debate."
          />
          <Accordion
            title="Do I need prior experience to participate?"
            answer="No prior experience is required! Whether you're a beginner or have participated in MUNs before, everyone is welcome to join."
          />
          <Accordion
            title="What will I do as a delegate"
            answer="As a delegate, you will represent a country or a specific committee and work with others to draft resolutions, negotiate, and present your country's stance on various issues."
          />
          <Accordion
            title="When and where will the MUN take place?"
            answer="The MUN will be held on 26th and 27th April 2024 at BML Munjal University. More details regarding the schedule will be shared closer to the event date."
          />
          <Accordion
            title="Is there a fee to participate?"
            answer="Yes, there is a fee of Rs1300 for the first 4 committees and Rs1500 if you register for the 5th committee as well. "
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FAQ;
