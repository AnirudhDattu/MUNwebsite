import React from "react";

const Agenda = () => {
  return (
    <div className="w-screen bg-gradient-to-r from-blue-600 to-blue-900 py-10">    
      <div className="text-white font-bold text-4xl text-center mb-20">
        AGENDAS
      </div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-32 mx-20">
        <div class="h-60 rounded-lg bg-white bg-opacity-20 flex flex-col gap-2 border border-white">
          <div class="text-white font-bold text-center mt-9 text-xl lg:basis-1/4 basis-1/5 ">
            UNSC
          </div>
          <div class="text-white font-medium text-justify text-lg mx-3">
            Discussions Around the Quest for a Two-State Solution in the
            Israeli-Palestinian Conflict
          </div>
        </div>
        <div class="h-60 rounded-lg bg-white bg-opacity-20 flex flex-col gap-2 border border-white">
          <div class="text-white font-bold text-center mt-9 text-xl lg:basis-1/4 basis-1/5 ">
            UNSC
          </div>
          <div class="text-white font-medium text-justify text-lg mx-3">
            Discussions Around the Quest for a Two-State Solution in the
            Israeli-Palestinian Conflict
          </div>
        </div>
        <div class="h-60 rounded-lg bg-white bg-opacity-20 flex flex-col gap-2 border border-white">
          <div class="text-white font-bold text-center mt-9 text-xl lg:basis-1/4 basis-1/5 ">
            UNSC
          </div>
          <div class="text-white font-medium text-justify text-lg mx-3">
            Discussions Around the Quest for a Two-State Solution in the
            Israeli-Palestinian Conflict
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-32 lg:mx-80 lg:mt-10 mt-5 mx-20 ">
        <div class="h-60 rounded-lg bg-white bg-opacity-20 flex flex-col gap-2 border border-white">
          <div class="text-white font-bold text-center mt-9 text-xl lg:basis-1/4 basis-1/5 ">
            UNSC
          </div>
          <div class="text-white font-medium text-justify text-lg mx-3 ">
            Discussions Around the Quest for a Two-State Solution in the
            Israeli-Palestinian Conflict
          </div>
        </div>
        <div class="h-60 rounded-lg bg-white bg-opacity-20 flex flex-col gap-2 border border-white mb-10">
          <div class="text-white font-bold text-center mt-9 text-xl lg:basis-1/4 basis-1/5 ">
            UNSC
          </div>
          <div class="text-white font-medium text-justify text-lg mx-3 ">
            Discussions Around the Quest for a Two-State Solution in the
            Israeli-Palestinian Conflict
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
