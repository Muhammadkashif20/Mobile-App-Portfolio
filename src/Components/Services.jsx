import React from "react";
import { FaMobileAlt, FaCode, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    title: "React Native Development",
    desc: "I build high-performance mobile applications using React Native & Expo with smooth navigation, clean architecture and native-like UI experience.",
    icon: <FaMobileAlt />,
  },
  {
    title: "React.js Frontend",
    desc: "Modern, responsive and scalable web applications using React.js with focus on performance, reusable components and clean UI systems.",
    icon: <FaCode />,
  },
  {
    title: "UI/UX Design Systems",
    desc: "Minimal and user-focused interface designs with strong visual hierarchy, modern layouts and conversion-driven user experience.",
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
            I specialize in building production-ready mobile apps with React Native & Expo,
            and modern web applications using React.js focused on speed, UI quality and scalability.
          </p>

        </div>

        {/* VIP Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((item, index) => (
            <div key={index} className="relative group">

              {/* Glow border */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Card */}
              <div className="relative bg-[#0B1120] border border-white/10 rounded-3xl p-8 h-full">

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 text-cyan-400 text-xl mb-6">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-400 leading-7 text-sm">
                  {item.desc}
                </p>

                {/* Bottom line */}
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