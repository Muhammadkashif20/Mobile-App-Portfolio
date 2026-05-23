import React from "react";
import { FaMobileAlt, FaCode, FaPaintBrush, FaRocket } from "react-icons/fa";

const services = [
  {
    title: "React Native Apps",
    desc: "High-performance mobile applications using React Native & Expo with smooth UI and native-like experience.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Frontend (React.js)",
    desc: "Modern web interfaces with React.js, Tailwind CSS and responsive design systems.",
    icon: <FaCode />,
  },
  {
    title: "UI/UX Design",
    desc: "Clean, minimal and user-friendly mobile & web interfaces focused on user experience.",
    icon: <FaPaintBrush />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 px-6 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          My <span className="text-cyan-400">Expertise</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mb-14 leading-7">
          I specialize in building modern mobile applications using React Native & Expo,
          along with responsive web apps using React.js.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 hover:border-cyan-400/40 transition duration-300"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-400/5 blur-xl rounded-3xl transition" />

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 text-2xl mb-6 group-hover:scale-110 transition">
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

            </div>
          ))}

        </div>

        {/* Bottom highlight line */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          Specialized in <span className="text-cyan-400">React Native • Expo • React.js</span>
        </div>

      </div>
    </section>
  );
};

export default Services;