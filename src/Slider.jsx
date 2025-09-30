import React, { useState, useEffect } from "react";
import { Scale, Award, Users } from "lucide-react";

// Data for the carousel items
const sliderItems = [
  {
    title: "Multi-Regulated",
    icon: Scale,
    description:
      "Operates under strict financial guidelines across multiple jurisdictions.",
    color: "text-blue-900",
  },
  {
    title: "Multi-Awarded",
    icon: Award,
    description:
      "Recipient of numerous prestigious industry awards for service excellence.",
    color: "text-amber-400",
  },
  {
    title: "Trusted by millions of traders",
    icon: Users,
    description:
      "Serving a global community with reliable and secure trading platforms.",
    color: "text-green-400",
  },
];

// Duplicate the items once for seamless infinite loop on desktop
const fullSliderContent = [...sliderItems, ...sliderItems];

// Define the custom CSS for the desktop infinite slide animation
const customStyles = `
  @keyframes slide {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
`;

function Slider() {
  const [mobileIndex, setMobileIndex] = useState(0);

  // Animation duration (longer list = slower scroll)
  const animationDuration = `${sliderItems.length * 6}s`;

  // Mobile autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-100 pt-5 pb-5 overflow-hidden font-sans border-t-8  border-[rgb(2,0,47)]">
      <style>{customStyles}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-[2.5rem] font-bold text-center mb-5 text-[rgb(215,163,106)]">
          Why Choose Us?
        </h1>
      </div>

      {/* Desktop infinite glide */}
      <div className="hidden sm:block relative w-full overflow-hidden">
        <div
          className="flex items-stretch"
          style={{
            width: "200%",
            animation: `slide ${animationDuration} linear infinite`,
          }}
        >
          {fullSliderContent.map((item, index) => (
            <div key={index} className="w-1/6 flex-shrink-0 p-4">
              <div className="bg-[rgb(2,0,47)] p-8 rounded-xl h-full flex flex-col justify-center items-center transform transition duration-300 border-4 border-[rgb(215,163,106)] ">
                <item.icon
                  className={`w-12 h-12 mb-3 text-[rgb(215,163,106)]`}
                  strokeWidth={1.5}
                />
                <h2 className="text-2xl font-bold text-[rgb(215,163,106)] text-center mb-2 leading-snug">
                  {item.title}
                </h2>
                <p className="text-[rgb(215,163,106)] text-center text-sm font-semibold mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="sm:hidden relative w-full h-[320px] px-4">
        {sliderItems.map((item, index) => {
          const isActive = index === mobileIndex;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out px-4 pt-2 ${
                isActive
                  ? "opacity-100 translate-x-0 z-10"
                  : "opacity-0 translate-x-full z-0"
              }`}
            >
              <div className="bg-gray-800 p-6 rounded-xl shadow-2xl h-full flex flex-col justify-center items-center border border-gray-700">
                <item.icon
                  className={`w-10 h-10 mb-3 ${item.color}`}
                  strokeWidth={1.5}
                />
                <h2 className="text-xl font-bold text-white text-center mb-2 leading-snug">
                  {item.title}
                </h2>
                <p className="text-gray-400 text-center text-sm mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}

        {/* Navigation Dots */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 pt-10 z-20">
          {sliderItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setMobileIndex(index)}
              className={`mx-1 h-2 w-2 rounded-full transition-all duration-300 ${
                index === mobileIndex ? "bg-blue-400 w-5" : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
