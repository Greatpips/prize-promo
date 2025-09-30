import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MonitorPlay,
} from "lucide-react";

// 🎨 Gradient constants
const GRADIENT_TEXT_CLASS =
  "bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-lime-500 to-teal-700";
const GRADIENT_BUTTON_CLASS =
  "bg-gradient-to-r from-green-800 via-green-900 to-gray-900 hover:from-green-700 hover:to-gray-800 transition-all duration-300 shadow-lg shadow-green-700/50";

// 📱 Social media options
const SOCIAL_OPTIONS = [
  { id: "facebook", name: "Facebook", icon: Facebook },
  { id: "instagram", name: "Instagram", icon: Instagram },
  { id: "twitter", name: "X (Twitter)", icon: Twitter },
  { id: "linkedin", name: "LinkedIn", icon: Linkedin },
  { id: "tiktok", name: "TikTok", icon: MonitorPlay },
  { id: "other", name: "Other", icon: ChevronDown },
];

// ✅ Google Sheets endpoint
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwC67_Kc7JOtxBSsURzr3iuxkbopFNsYjOS9c3fct1Wo0GvyGK1jOfcq_spZ4kl-gwRTg/exec";

// 📝 Reusable input
const FormInput = ({ label, name, type, value, onChange, Icon, required }) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-[rgb(215,163,106)] mb-1"
    >
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon size={20} className="text-[rgb(215,163,106)]" />
      </div>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-gray-50 text-gray-900 p-3 pl-10 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[rgb(215,163,106)] focus:border-[rgb(215,163,106)] transition placeholder-gray-500"
        placeholder={label}
      />
    </div>
  </div>
);

function RegistrationForm({ isOpen, onClose }) {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    location: "",
    heardFrom: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // 🔄 Reset when modal closes
  const resetForm = () => {
    setFormData(initialFormData);
    setIsSubmitted(false);
    setIsSubmitting(false);
    setDropdownOpen(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      setIsSubmitting(true);
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        setIsSubmitted(true);
      } catch (error) {
        console.error("Submission error:", error);
        alert("Failed to submit form. Check your connection.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isSubmitting]
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleDropdownSelect = useCallback((appId) => {
    setFormData((prev) => ({ ...prev, heardFrom: appId }));
    setDropdownOpen(false);
  }, []);

  const selectedSocial = useMemo(
    () =>
      SOCIAL_OPTIONS.find((opt) => opt.id === formData.heardFrom) || {
        name: "Select Social App",
        icon: ChevronDown,
      },
    [formData.heardFrom]
  );

  const SelectedIcon = selectedSocial.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.div
            onClick={handleClose}
            className="absolute inset-0 bg-black/10 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg mx-auto p-6 md:p-10 rounded-3xl bg-white border border-[rgb(215,163,106)] shadow-2xl shadow-green-500/30"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <X size={28} />
            </button>

            {isSubmitted ? (
              <motion.div
                className="flex flex-col items-center text-center p-6 space-y-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle className="text-[rgb(215,163,106)]" size={64} />
                <h2
                  className={`text-3xl md:text-4xl font-extrabold text-[rgb(215,163,106)]`}
                >
                  Registration Successful!
                </h2>
                <p className="text-gray-700 text-lg">
                  Thank you for showing interest. Your data has been recorded.
                </p>

                {/* ✅ Join the Challenge Button */}
                <a
                  href="https://example.com" // 🔗 replace with your real link
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative inline-block px-8 py-4 font-bold bg-[rgb(215,163,106)] text-white hover:bg-[rgb(2,0,47)] transition-colors duration-200 ease-in-out rounded-xl uppercase text-lg  overflow-hidden group`}
                >
                  <span className="relative z-10">Register Now</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgb(215,163,106)] to-transparent opacity-40 translate-x-[-100%] group-hover:animate-slideGlow"></span>
                </a>
              </motion.div>
            ) : (
              <>
                <h2
                  className={`text-3xl md:text-4xl font-extrabold text-center mb-8 text-[rgb(215,163,106)]`}
                >
                  Register Your Interest
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                      label="Full Name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      Icon={User}
                      required
                    />
                    <FormInput
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      Icon={Mail}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      Icon={Phone}
                      required
                    />
                    <FormInput
                      label="Location (City/Country)"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      Icon={MapPin}
                      required
                    />
                  </div>

                  {/* Dropdown */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      How did you hear about us?
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full flex justify-between items-center bg-gray-50 text-gray-900 p-3 rounded-xl border border-[rgb(215,163,106)] focus:ring-2 focus:ring-[rgb(215,163,106)]"
                      >
                        <div className="flex items-center space-x-2">
                          <SelectedIcon size={20} className="text-[rgb(215,163,106)]" />
                          <span>{selectedSocial.name}</span>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`transform transition-transform ${
                            dropdownOpen ? "rotate-180" : "rotate-0"
                          } text-gray-700`}
                        />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-xl border border-green-700 max-h-60 overflow-y-auto"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {SOCIAL_OPTIONS.map((app) => {
                              const AppIcon = app.icon;
                              return (
                                <button
                                  key={app.id}
                                  type="button"
                                  onClick={() => handleDropdownSelect(app.id)}
                                  className="w-full text-left flex items-center space-x-3 p-3 text-gray-700 hover:bg-green-100 rounded-xl"
                                >
                                  <AppIcon size={20} className="text-[rgb(215,163,106)]" />
                                  <span>{app.name}</span>
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.heardFrom}
                    className={`w-full py-4 mt-6 text-xl font-bold rounded-xl text-white uppercase bg-[rgb(215,163,106)] disabled:opacity-50 flex items-center justify-center`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Registration"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default RegistrationForm;
