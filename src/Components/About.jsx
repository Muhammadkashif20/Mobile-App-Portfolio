import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaMobileAlt, FaCode, FaFire } from "react-icons/fa";

const stats = [
  { num: "3+", label: "Mobile App Projects" },
  { num: "6+", label: "Months Experience" },
  { num: "React Native", label: "Core Stack" },
  { num: "Expo", label: "Mobile Development" },
  { num: "UI/UX", label: "Focus Area" },
  { num: "Fast", label: "Performance First" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-10 bg-[#050816] overflow-hidden text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-cyan-500/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-500/10 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ===== Premium Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="inline-flex items-center gap-3 border border-cyan-400/20 bg-white/5 backdrop-blur-2xl rounded-full px-5 py-2.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-[11px] tracking-[4px] uppercase text-cyan-300">
              About Me
            </p>
          </div>

          <h2 className="text-[42px] sm:text-[60px] lg:text-[82px] font-black leading-[0.95] tracking-[-3px]">
            React Native
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 pb-3">
              Developer
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mt-8 leading-8 text-[15px]">
            I build high-performance mobile applications using React Native & Expo,
            focused on smooth user experience, clean UI systems, and production-ready architecture.
            Alongside mobile, I also craft modern React.js web apps with pixel-perfect design.
          </p>
        </motion.div>

        {/* ===== Cards ===== */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-2xl hover:border-cyan-400/20 duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full" />

            <div className="relative z-10">

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-3xl mb-6">
                <FaMobileAlt />
              </div>

              <h3 className="text-3xl font-bold mb-5">
                Who I Am
              </h3>

              <p className="text-gray-400 leading-8 text-[15px]">
                I’m a React Native focused developer who enjoys building mobile-first applications
                with clean architecture, reusable components, and smooth animations.
                My goal is to create apps that feel native, fast, and visually premium.
              </p>

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-2xl hover:border-cyan-400/20 duration-300 overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">

              <h3 className="text-3xl font-bold mb-8">
                What I Do
              </h3>

              <div className="space-y-5">

                {[
                  {
                    icon: <FaReact />,
                    text: "React Native Mobile App Development",
                  },
                  {
                    icon: <FaMobileAlt />,
                    text: "Expo Based Cross-Platform Apps",
                  },
                  {
                    icon: <FaFire />,
                    text: "Smooth Animations & UI Transitions",
                  },
                  {
                    icon: <FaCode />,
                    text: "Clean Code & Scalable Architecture",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-lg">
                      {item.icon}
                    </div>

                    <p className="text-gray-300">
                      {item.text}
                    </p>

                  </div>
                ))}

              </div>
            </div>
          </motion.div>

        </div>

        {/* ===== Stats ===== */}
        <div className="overflow-hidden mt-20">

          <div className="flex gap-6 w-max animate-[marquee_18s_linear_infinite]">

            {[...stats, ...stats].map((item, i) => (
              <div
                key={i}
                className="min-w-[220px] bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-2xl"
              >
                <h3 className="text-4xl font-black text-cyan-400">
                  {item.num}
                </h3>
                <p className="text-gray-400 mt-3">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </div>

        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>

      </div>
    </section>
  );
};

export default About;