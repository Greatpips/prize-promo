import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

const faqs = [
  {
    question: "Who Should Attend This Seminar",
    answer:
      "Anyone ready to level up their trading game! Whether you're just getting started or looking to sharpen your skills, this seminar is for you. If you're curious, driven, and eager to learn from the pros. Don't miss it",
  },
  {
    question: "What Topic Will Be Covered In This Seminar",
    answer:
      "We're packing a lot into this power hour! Expect expert tips from Seasoned Market Mentors, live market insights, mindset training for discipline and accountability, and ways to stay plugged into a strong trading community",
  },
  {
    question: "How Long Is The Seminar",
    answer:
      "Just one hour. Short, sharp, and full of value. You'll walk away with real insights you can use right away.",
  },
  {
    question: "Is There A Fee To Attend",
    answer:
      "Nope! It's 100% free. All you need is your time and your drive to learn.",
  },
  {
    question: "Gifts You Stand A Chance Of Winning",
    answer:
      "1. Iphones, 2.Airpods, 3. Smart Watches, 4. Power Banks, and so much more!",
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
