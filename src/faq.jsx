import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

const faqs = [
  {
    question: "How can I qualify for the iPhone 17 Pro Max campaign?",
    answer:
      "To qualify, you need to fund your trading account, follow GTCFX on all social media platforms (instagram: @gtcfx_nigeria) (Facebook: @Gtcfx Global Nigeria), and trade up to 100 standard lots within the campaign period.",
  },
  {
    question: "Do I need to complete the 100 lots in one trade?",
    answer:
      "No. The 100 lots can be accumulated across multiple trades during the campaign duration.",
  },
  {
    question: "What is the campaign duration?",
    answer:
      "The campaign runs from 3rd of october to 31st of october . Only trades executed within this period will count toward the target.",
  },
  {
    question: "Is this campaign open to all traders?",
    answer:
      "Yes. The campaign is open to both new and existing clients who meet the funding and trading requirements.",
  },
  {
    question: "When will the winner receive the iPhone 17 Pro Max?",
    answer:
      "The first trader to complete 100 standard lots will be announced as the winner, and delivery/shipping arrangements will be made immediately after verification.",
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
