import iphone17 from "./img/iphone-17.png";
import airpod from "./img/airpod.png";
import watch from "./img/watch.png";
import powerBank from "./img/power-bank.png";
import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";

function Prize() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gradient-to-br from-[rgb(2,0,47)] via-[rgb(236,186,132)/20] to-[rgb(215,163,106)/30]">
      <div className="bg-gray-100 min-h-screen py-8 flex flex-col items-center">
        {/* Title */}
        <div className="bg-[rgb(2,0,47)] p-5 mb-8 w-[100%] border-y-4 border-[rgb(215,163,106)]">
          <h1 className="text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[4rem] text-transparent bg-clip-text bg-gradient-to-r from-[rgb(182,135,86)] via-[rgb(236,186,132)] to-[rgb(182,135,86)] leading-tight font-bold text-center">
            PRIZES TO BE WON
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-fit max-w-6xl">
          {/* iPhone (Tier 1 - Yellow, spans 2 cols) */}
          <div className="md:col-span-2 flex flex-col items-center">
            <p className="text-[rgb(215,163,106)] text-[1.5rem] font-bold">100 Lot</p>
            <img src={iphone17} alt="iPhone 17 Pro" className="w-50 md:w-80 animate-constant-glow delay-0" />
            <h3 className="text-[rgb(215,163,106)] text-[1.6rem] font-bold">iPhone 17 Pro Max</h3>
          </div>

          {/* Airpods (Tier 2 - Gray) */}
          <div className="flex flex-col items-center">
            <p className="text-[rgb(215,163,106)] text-[1.5rem] font-bold">75 Lot</p>
            <img src={airpod} alt="AirPods Pro" className="w-50 md:w-80 animate-constant-glow delay-1000" />
            <h3 className="text-[rgb(215,163,106)] text-[1.6rem] font-bold">AirPods Pro</h3>
          </div>

          {/* Watch (Tier 3 - Amber) */}
          <div className="flex flex-col items-center">
            <p className="text-[rgb(215,163,106)] text-[1.5rem] font-bold">50 Lot</p>
            <img src={watch} alt="Smart Watch" className="w-50 md:w-80 animate-constant-glow delay-2000" />
            <h3 className="text-[rgb(215,163,106)] text-[1.6rem] font-bold">Smart Watch</h3>
          </div>

          {/* Power Bank (Tier 4 - Teal, spans 2 cols) */}
          <div className="md:col-span-2 flex flex-col items-center">
            <p className="text-[rgb(215,163,106)] text-[1.5rem] font-bold">25 Lot</p>
            <img src={powerBank} alt="Power Bank Pro" className="w-50 md:w-80 animate-constant-glow delay-3000" />
            <h3 className="text-[rgb(215,163,106)] text-[1.6rem] font-bold">Power Bank Pro</h3>
          </div>
        </div>

        {/* Custom Glow Animation */}
        <style>
          {`
            @keyframes constantGlow {
              0%, 100% {
                transform: scale(1);
                box-shadow: 0 0 10px rgba(215, 163, 106, 0.5);
              }
              50% {
                transform: scale(1.03);
                box-shadow: 0 0 20px rgba(215, 163, 106, 0.7), 0 0 30px rgba(2, 0, 47, 0.3);
              }
            }
            .animate-constant-glow {
              animation: constantGlow 3s ease-in-out infinite;
            }
            .delay-0 { animation-delay: 0ms; }
            .delay-1000 { animation-delay: 1000ms; }
            .delay-2000 { animation-delay: 2000ms; }
            .delay-3000 { animation-delay: 3000ms; }
          `}
        </style>
      </div>
      <div className="bg-gray-100 text-center pt-8 pb-8">
        <button
          onClick={() => setOpen(true)}
          className="py-4 px-16 bg-[rgb(215,163,106)] font-bold text-white rounded-xl shadow-lg hover:bg-[rgb(2,0,47)] transition-color ease-in-out duration-300"
        >
          Register Now
        </button>
      </div>
      <RegistrationForm isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default Prize;