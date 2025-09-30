import DesktopImg from "./img/copy-mobile.png"
import MobileImg from "./img/mobile-view.png"
import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import FadeIn from "./FadeIn";

function Banner() {
      const [open, setOpen] = useState(false);
  return (
   <section className="relative w-full overflow-hidden">
  <div>
    <div className="hidden sm:block h-full">
    <img src={DesktopImg} alt="Desktop Banner"
      className="w-full h-full object-cover" />
  </div>

   <div className="absolute top-2   right-1/4 ">
        <FadeIn>
            <button
          onClick={() => setOpen(true)}
          className="hidden sm:block py-2 px-4 md:px-6 md:py-4 lg:px-16 bg-[rgb(215,163,106)] font-bold text-white rounded-xl shadow-lg hover:bg-[rgb(2,0,47)] transition-color ease-in-out duration-300"
        >
          Register Now
        </button>
        </FadeIn>
      </div>
  </div>
  <div>
    <div className="sm:hidden h-full">
    <img src={MobileImg} alt="Mobile Banner"
      className="w-full h-full object-cover" />
  </div>

   <div className="absolute top-[4%]  left-1/3 ">
        <button
          onClick={() => setOpen(true)}
          className="block sm:hidden py-2 px-2 bg-[rgb(215,163,106)] font-bold text-white rounded-xl shadow-lg hover:bg-[rgb(2,0,47)] transition-color ease-in-out duration-300"
        >
          Register Now
        </button>
      </div>
  </div>
    <RegistrationForm isOpen={open} onClose={() => setOpen(false)} />
</section>
  )
}
export default Banner