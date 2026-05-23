import React from "react";

const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mb-12 leading-7">
          Passionate developer focused on building modern, fast and scalable web & mobile experiences.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-[1.02] transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Who I Am
            </h3>

            <p className="text-gray-400 leading-8">
              I am a frontend and MERN stack developer who loves building
              clean UI, smooth animations and modern web applications.
              I enjoy turning ideas into real, interactive products.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-[1.02] transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              What I Do
            </h3>

            <ul className="space-y-4 text-gray-400">
              {[
                "Build responsive web apps (React.js)",
                "Mobile apps with React Native & Expo",
                "Modern UI/UX with Tailwind CSS",
                "Backend integration (Firebase / Node)",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ================= MARQUEE STATS (ANIMATED) ================= */}
        <div className="overflow-hidden mt-16 border-t border-white/10 pt-10">

          <div className="flex gap-10 w-max animate-[scroll_15s_linear_infinite]">

            {[
              { num: "10+", label: "Projects" },
              { num: "1+", label: "Years Experience" },
              { num: "React", label: "Speciality" },
              { num: "Freelance", label: "Available" },
              { num: "Fast", label: "Performance" },
              { num: "UI/UX", label: "Focus" },
            ].map((item, i) => (
              <div
                key={i}
                className="min-w-[200px] bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-xl"
              >
                <h3 className="text-3xl font-bold text-cyan-400">
                  {item.num}
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* animation keyframes */}
        <style>
          {`
            @keyframes scroll {
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