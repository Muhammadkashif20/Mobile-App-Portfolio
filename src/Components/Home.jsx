import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaArrowRight } from "react-icons/fa";
import TypewriterText from "./TypeWriter";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#050816] overflow-hidden text-white"
    >
      {/* Background */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-cyan-500/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-180px] right-[-100px] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[160px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="min-h-screen flex items-center">
          <div className="w-full grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-24 text-[52px] sm:text-[72px] lg:text-[100px] font-black leading-[0.9] tracking-[-4px]"
              >
                Hi, I'm
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                  Muhammad
                </span>
                Kashif
              </motion.h1>

              {/* ROLE (UPDATED FOR RN FOCUS) */}
              <TypewriterText
                texts={[
                  "React Native Developer",
                  "Expo Mobile App Developer",
                  "Frontend Developer (React.js)",
                ]}
              />

              {/* Sub text (UPDATED) */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-xl mt-8 text-gray-400 leading-8"
              >
                I build modern cross-platform mobile apps using React Native & Expo,
                along with responsive web interfaces using React.js.
                Focused on performance, smooth UX and clean UI systems.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-5 mt-10"
              >
                {/* View Projects */}
                <a
                  href="#portfolio"
                  className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:scale-105 duration-300"
                >
                  View Work <FaArrowRight />
                </a>

                {/* Contact */}
                <a
                  href="#contact"
                  className="border border-white/10 bg-white/5 px-8 py-4 rounded-2xl hover:bg-white/10"
                >
                  Contact Me
                </a>
              </motion.div>

              {/* Social */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="flex gap-5 mt-12"
              >
                <a target="_blank" href="https://github.com/Muhammadkashif20" className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-cyan-400 hover:text-black transition">
                  <FaGithub />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/muhammad-kashif-85053b305/" className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-cyan-400 hover:text-black transition">
                  <FaLinkedinIn />
                </a>
              </motion.div>
            </div>

            {/* RIGHT (UNCHANGED) */}
            <div className="relative hidden lg:flex justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-[120px]"
              />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="relative w-[220px] h-[420px] rounded-[40px] bg-[#0B1120] border border-white/10 shadow-2xl p-4"
              >
                <div className="w-20 h-2 bg-white/20 rounded-full mx-auto" />

                <div className="mt-6 h-28 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />

                <div className="mt-6 space-y-3">
                  <div className="h-3 w-full bg-white/10 rounded-full" />
                  <div className="h-3 w-3/4 bg-white/10 rounded-full" />
                  <div className="h-16 bg-white/5 rounded-2xl" />
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute top-10 right-10 w-10 h-10 bg-cyan-400/20 rounded-xl"
              />

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute bottom-10 left-10 w-6 h-6 bg-blue-400/30 rounded-full"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;