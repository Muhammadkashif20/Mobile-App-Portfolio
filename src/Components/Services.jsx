import React from "react";
import { FaMobileAlt, FaCode, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    title: "React Native Apps",
    desc: "High-performance mobile apps with native-like smooth UX using Expo & React Native.",
    icon: <FaMobileAlt />,
  },
  {
    title: "React.js Frontend",
    desc: "Modern web apps with clean architecture, fast performance and responsive UI.",
    icon: <FaCode />,
  },
  {
    title: "UI/UX Design",
    desc: "Minimal, modern and conversion-focused interfaces with strong visual hierarchy.",
    icon: <FaPaintBrush />,
  },
];

const Services = () => {
  return (
    <section className="py-28 px-6 md:px-10 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto">

        {/* VIP Heading */}
          <div className="text-center mb-16">

          <h2 className="text-[42px] sm:text-[60px] lg:text-[82px] font-black leading-[0.95] tracking-[-3px]">
            My{" "}
            <span className="text-cyan-400">Services</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-8 leading-8 text-[15px]">
            I help startups and businesses build modern mobile and web apps with React Native and React.js,
            focused on performance and clean user experience.
          </p>

        </div>

        {/* VIP Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((item, index) => (
            <div
              key={index}
              className="relative group"
            >

              {/* Outer glow border effect */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Card */}
              <div className="relative bg-[#0B1120] border border-white/10 rounded-3xl p-8 h-full">

                {/* Icon circle */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 text-cyan-400 text-xl mb-6">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-7 text-sm">
                  {item.desc}
                </p>

                {/* Bottom line animation */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500" />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;