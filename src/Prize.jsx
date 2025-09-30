import iphone17 from "./img/iphone-17.png";
import airpod from "./img/airpod.png";
import watch from "./img/watch.png";
import powerBank from "./img/power-bank.png";
import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";

function Prize() {
  const [open, setOpen] = useState(false);
  return (
    <div>
    <div className="bg-gray-100 min-h-screen px-4 py-8 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl md:text-[3.5rem] text-[rgb(215,163,106)] font-bold text-center mb-8 ">
        Prizes To Be Won
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
        {/* iPhone (Tier 1 - Yellow, spans 2 cols) */}
        <div className="md:col-span-2 animate-constant-glow border-6 bg-[rgb(5,2,65)] border-[rgb(215,163,106)] rounded-xl p-4 flex flex-col items-center">
          <p className="text-[rgb(215,163,106)] text-[1.5rem] font-bold ">100 Lot</p>
          <img src={iphone17} alt="iPhone 17 Pro" className="w-32 md:w-44" />
          <h3 className="text-[rgb(215,163,106)] text-[1.6rem] font-bold">iPhone 17 Pro</h3>
        </div>

        {/* Airpods (Tier 2 - Gray) */}
        <div className="animate-constant-glow  border-6 bg-[rgb(5,2,65)] border-[rgb(215,163,106)]  rounded-xl p-4 flex flex-col items-center">
          <p className="text-[rgb(215,163,106)] text-[1.5rem] font-bold">75 Lot</p>
          <img src={airpod} alt="AirPods Pro" className="w-24 md:w-32" />
          <h3 className="text-[rgb(215,163,106)] text-[1.6rem] font-bold">AirPods Pro</h3>
        </div>

        {/* Watch (Tier 3 - Amber) */}
        <div className="animate-constant-glow border-6 bg-[rgb(5,2,65)] border-[rgb(215,163,106)]  rounded-xl p-4 flex flex-col items-center">
          <p className="text-[rgb(215,163,106)] text-[1.5rem] font-bold">50 Lot</p>
          <img src={watch} alt="Smart Watch" className="w-24 md:w-32" />
          <h3 className="text-[rgb(215,163,106)] text-[1.6rem] font-bold">Smart Watch</h3>
        </div>

        {/* Power Bank (Tier 4 - Teal, spans 2 cols) */}
        <div className="md:col-span-2 animate-constant-glow border-6 bg-[rgb(5,2,65)] border-[rgb(215,163,106)]  rounded-xl p-4 flex flex-col items-center">
          <p className="text-[rgb(215,163,106)] text-[1.5rem] font-bold">25 Lot</p>
          <img src={powerBank} alt="Power Bank Pro" className="w-28 md:w-40" />
          <h3 className="text-[rgb(215,163,106)] text-[1.6rem] font-bold">Power Bank Pro</h3>
        </div>
      </div>

      {/* Custom Glow Animation */}
      <style>
        {`
          @keyframes constantGlow {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
            }
            50% {
              transform: scale(1.02);
              box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
            }
          }
          .animate-constant-glow {
            animation: constantGlow 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
        <div className=" bg-gray-100 text-center pt-8">
        <button
          onClick={() => setOpen(true)}
          className=" py-4 px-16 bg-[rgb(215,163,106)] font-bold text-white rounded-xl shadow-lg hover:bg-[rgb(2,0,47)] transition-color ease-in-out duration-300"
        >
          Register Now
        </button>
      </div>
      <RegistrationForm isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default Prize;
