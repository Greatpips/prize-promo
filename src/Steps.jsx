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
      extraText: "Get started with a secure account today!",
    },
    {
      id: 2,
      title: "Make a deposit of at least 10 Lot",
      icon: <Wallet className="w-12 h-12 text-[rgb(215,163,106)]" />,
      extraText: "Minimum deposit unlocks your eligibility.",
    },
    {
      id: 3,
      title: "Trade at least 100 Lots",
      icon: <BarChart3 className="w-12 h-12 text-[rgb(215,163,106)]" />,
      extraText: "Boost your chances with active trading!",
    },
    {
      id: 4,
      title: "Fill out the registration form",
      icon: <FileText className="w-12 h-12 text-[rgb(215,163,106)]" />,
      extraText: "Complete your entry in just a few steps.",
    },
  ];

  return (
    <div className="bg-gray-100 text-[rgb(215,163,106)] py-16 perspective-1000">
      {/* Title */}
      <div className="bg-[rgb(2,0,47)] p-5 mb-8 w-[100%] border-y-4 border-[rgb(215,163,106)]">
        <h1 className="text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[4rem] text-transparent bg-clip-text bg-gradient-to-r from-[rgb(182,135,86)] via-[rgb(236,186,132)] to-[rgb(182,135,86)] leading-tight font-bold text-center">
          STEPS NEEDED TO BE QUALIFIED
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="bg-[rgb(5,2,65)] border-4 border-[rgb(215,163,106)] rounded-2xl p-10 flex flex-col items-center text-center shadow-lg preserve-3d"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} // Run once when 30% in view
            transition={{
              duration: 0.6,
              delay: index * 0.3, // stagger fade-in
              ease: "easeOut",
            }}
            style={{ transformStyle: "preserve-3d" }} // Enable 3D space
            // 3D turn animation, runs once
            animate={{
              rotateY: [0, 90, 0], // Turn 90 degrees and back
              transition: {
                rotateY: {
                  duration: 1.2,
                  delay: 0.6 + index * 1.5, // 0.6s after fade-in + 1.5s stagger per item
                  ease: "easeInOut",
                },
              },
            }}
          >
            <div className="mb-6 origin-center">{step.icon}</div>
            <h2 className="text-xl md:text-2xl font-semibold leading-snug">
              {step.id}. {step.title}
            </h2>
            {/* Extra text revealed after turn */}
            <motion.p
              className="text-sm md:text-base text-gray-300 mt-4 opacity-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.8 + index * 1.5, // Reveal after turn (1.8s + longer stagger)
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