import React from "react";

const Itinary = () => {
  return (
    <div className="bg-white pt-4 pb-10 relative">
      <div className="text-black text-center text-6xl font-bold py-10">
        ITINERARY
      </div>
      <div className="h-12 w-40 font-semibold rounded-lg bg-blue-500 flex justify-center items-center mx-auto mb-5">
        <div className="text-white text-center text-3xl">DAY-1</div>
      </div>
      <div>
        <div class="grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-8">
          <div class="h-32  flex justify-center items-center my-2 lg:my-10 ">
            <div className="text-start ">
              <div className="text-blue-500 lg:text-5xl text-4xl font-bold">
                09:00 - 9:45 AM
              </div>
              <div className="text-black lg:text-4xl text-3xl font-medium">
                Registration
              </div>
            </div>
          </div>
          <div class="h-32  flex justify-center items-center my-2 lg:my-10">
            <div className="text-start ">
              <div className="text-blue-500 lg:text-5xl text-4xl font-bold">
                09:45 - 10:00 AM
              </div>
              <div className="text-black lg:text-4xl text-3xl font-medium">
                Breakfast
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div class="h-32  flex justify-center items-center my-2 lg:my-10">
            <div className="text-start ">
              <div className="text-blue-500 lg:text-5xl text-4xl font-bold">
                10:15 - 10:45 AM
              </div>
              <div className="text-black lg:text-4xl text-3xl font-medium">
                Opening Ceremony
              </div>
            </div>
          </div>
          <div class="h-32  flex justify-center items-center my-2 lg:my-10">
            <div className="text-start ">
              <div className="text-blue-500 lg:text-5xl text-4xl font-bold">
                10:45 - 01:30 AM
              </div>
              <div className="text-black lg:text-4xl text-3xl font-medium">
                Session 1
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div class="h-32  flex justify-center items-center my-2 lg:my-10">
            <div className="text-start ">
              <div className="text-blue-500 lg:text-5xl text-4xl font-bold">
                01:30 - 02:30 AM
              </div>
              <div className="text-black lg:text-4xl text-3xl font-medium">
                Lunch
              </div>
            </div>
          </div>
          <div class="h-32  flex justify-center items-center my-2 lg:my-10">
            <div className="text-start ">
              <div className="text-blue-500 lg:text-5xl text-4xl font-bold">
                02:30 - 5:30 AM
              </div>
              <div className="text-black lg:text-4xl text-3xl font-medium">
                Session 2
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div class="h-32  flex justify-center items-center my-2 lg:my-10">
          <div className="text-start ">
            <div className="text-blue-500 lg:text-5xl text-4xl font-bold">
              05:30 - 06:00 AM
            </div>
            <div className="text-black lg:text-4xl text-3xl font-medium">
              Feedback session
            </div>
          </div>
        </div>
        <div class="h-32  flex justify-center items-center my-2 lg:my-10">
          <div className="text-start ">
            <div className="text-blue-500 lg:text-5xl text-4xl font-bold">
              06:00 onwards
            </div>
            <div className="text-black lg:text-4xl text-3xl font-medium">
              Socializing and networking
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------DAY - 2-------------------------------------------------------------- */}
      <div className="h-12 w-40 rounded-lg bg-blue-500 flex justify-center items-center mx-auto mt-8 mb-5">
        <div className="text-white text-center font-semibold text-3xl">
          DAY-2
        </div>
      </div>
      <div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div class="h-32  flex justify-center items-center my-2 lg:my-10">
            <div className="text-start ">
              <div className="text-blue-500 lg:text-5xl text-4xl font-bold">
                09:00 - 09:45 AM
              </div>
              <div className="text-black lg:text-4xl text-3xl font-medium">
                Breakfast
              </div>
            </div>
          </div>
          <div class="h-32  flex justify-center items-center my-2 lg:my-10">
            <div className="text-start ">
              <div className="text-blue-500 lg:text-5xl text-4xl font-bold">
                09:45 - 01:00 AM
              </div>
              <div className="text-black lg:text-4xl text-3xl font-medium">
                Session 3
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div class="h-32  flex justify-center items-center my-2 lg:my-10">
            <div className="text-start ">
              <div className="text-blue-500 lg:text-5xl text-4xl font-bold">
                01:00 - 02:00 AM
              </div>
              <div className="text-black lg:text-4xl text-3xl font-medium">
                Lunch
              </div>
            </div>
          </div>
          <div class="h-32  flex justify-center items-center my-2 lg:my-10">
            <div className="text-start ">
              <div className="text-blue-500 lg:text-5xl text-4xl font-bold">
                02:00 - 05:30 AM
              </div>
              <div className="text-black lg:text-4xl text-3xl font-medium">
                Session 4
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div class="h-32  flex justify-center items-center my-2 lg:my-10">
            <div className="text-start ">
              <div className="text-blue-500 lg:text-5xl text-4xl font-bold">
                05:30 - 06:00 AM
              </div>
              <div className="text-black lg:text-4xl text-3xl font-medium">
                Feedback session
              </div>
            </div>
          </div>
          <div class="h-32  flex justify-center items-center my-2 lg:my-10">
            <div className="text-start ">
              <div className="text-blue-500 lg:text-5xl text-4xl font-bold">
                6:00 onwards
              </div>
              <div className="text-black lg:text-4xl text-3xl font-medium">
                Closing ceremony
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinary;
