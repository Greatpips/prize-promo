import { UserPlus, Wallet, BarChart3, FileText } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";

function Steps() {
  const [open, setOpen] = useState(false);
  const steps = [
    {
      id: 1,
      title: "Open a live trading account with GTCFX",
      icon: <UserPlus className="w-12 h-12 text-[rgb(215,163,106)]" />,
    },
    {
      id: 2,
      title: "Make a deposit of at least 10 Lot",
      icon: <Wallet className="w-12 h-12 text-[rgb(215,163,106)]" />,
    },
    {
      id: 3,
      title: "Trade at least 100 Lots",
      icon: <BarChart3 className="w-12 h-12 text-[rgb(215,163,106)]" />,
    },
    {
      id: 4,
      title: "Fill out the registration form",
      icon: <FileText className="w-12 h-12 text-[rgb(215,163,106)]" />,
    },
  ];

  return (
    <div className="bg-gray-100 text-[rgb(215,163,106)] py-16 px-6">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-14 text[rgb(215,163,106)]">
        Steps Needed to be Qualified
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="bg-[rgb(5,2,65)] border-4 border-[rgb(215,163,106)] rounded-2xl p-10 flex flex-col items-center text-center shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }} // animate every time in view
            transition={{
              duration: 0.6,
              delay: index * 0.27, // stagger delay
              ease: "easeOut",
            }}
          >
            <div className="mb-6">{step.icon}</div>
            <h2 className="text-xl md:text-2xl font-semibold leading-snug">
              {step.id}. {step.title}
            </h2>
          </motion.div>
        ))}
      </div>
          <div className=" bg-gray-100 text-center pt-16">
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

export default Steps;
