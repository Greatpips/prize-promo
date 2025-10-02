import { UserPlus, Wallet, BarChart3, FileText } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";

function Steps() {
  const [open, setOpen] = useState(false);
  const steps = [
    {
      id: 1,
      title: "Open A Live Trading Account With GTCFX",
      icon: <UserPlus className="w-12 h-12 text-[rgb(215,163,106)]" />,
      extraText: "Get started with a secure account today!",
    },
    {
      id: 2,
      title: "Fund And Start Trading",
      icon: <Wallet className="w-12 h-12 text-[rgb(215,163,106)]" />,
      extraText: "Deposit funds and dive into the market!",
    },
    {
      id: 3,
      title: "Follow Us On Our Social Media",
      icon: <BarChart3 className="w-12 h-12 text-[rgb(215,163,106)]" />,
      extraText: "Stay updated with the latest news and tips.",
    },
  ];

  return (
    <div className="bg-gray-100 text-[rgb(215,163,106)] pb-16 perspective-1000">
      {/* Title */}
      <div className="bg-[rgb(2,0,47)] p-5 mb-8 w-[100%] border-y-4 border-[rgb(215,163,106)]">
        <h1 className="text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[4rem] text-transparent bg-clip-text bg-gradient-to-r from-[rgb(182,135,86)] via-[rgb(236,186,132)] to-[rgb(182,135,86)] leading-tight font-bold text-center">
          STEPS NEEDED TO BE QUALIFIED
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {steps.map((step, index) => (
  <motion.div
    key={step.id}
    className={`bg-[rgb(5,2,65)] border-4 border-[rgb(215,163,106)] rounded-2xl p-10 flex flex-col items-center text-center shadow-lg preserve-3d 
      ${index === steps.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      duration: 0.6,
      delay: index * 0.3,
      ease: "easeOut",
    }}
    style={{ transformStyle: "preserve-3d" }}
    animate={{
      rotateY: [0, 90, 0],
      transition: {
        rotateY: {
          duration: 1.2,
          delay: 0.6 + index * 1.5,
          ease: "easeInOut",
        },
      },
    }}
  >
    <div className="mb-6 origin-center">{step.icon}</div>
    <h2 className="text-xl md:text-2xl font-semibold leading-snug">
      {step.id}. {step.title}
    </h2>
    <motion.p
      className="text-sm md:text-base text-gray-300 font-semibold mt-4 opacity-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1.8 + index * 1.5,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {step.extraText}
    </motion.p>
  </motion.div>
))}

      </div>
      <div className="bg-gray-100 text-center pt-16">
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

export default Steps;