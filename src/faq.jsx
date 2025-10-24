import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

const faqs = [
  {
    question: "How Can I Qualify for the gifts?",
    answer:
      "To qualify, all you have to do is to register a free account with Gtcfx and start trading to achieve the needed lots. Once you achieve it you automatically will be contacted to claim your prize ",
  },
  {
    question: "Do I need to complete the required lot in one trade?",
    answer:
      "No. The required lots can be accumulated across multiple trades",
  },
  {
    question: "What is the duration for this promo?",
    answer:
      "From 1st of November 2025 to January 2025",
  },
  {
    question: "Is the promo opened to all traders?",
    answer:
      "Yes. The promo is open to both new and existing clients who meet the funding and trading requirements.",
  },
  {
    question: "When will the winners receive their gifts?",
    answer:
      "once you complete the lots required you will be contacted immediately to claim your prize",
  },
];

function Faq() {
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 text-[rgb(215,163,106)] font-semibold py- px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[rgb(215,163,106)]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-[rgb(5,2,65)] rounded-xl border border-gray-800 shadow-lg"
            >
              {/* Question Row */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-lg md:text-xl font-bold">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[rgb(215,163,106)]" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Answer Section with Slide Down */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 pt-0 text-[rgb(215,163,106)] text-sm font-semibold md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
          <div className=" bg-gray-100 text-center pt-20 pb-10">
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

export default Faq;
