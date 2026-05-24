import React from "react";

const projects = [
  {
    title: "Food Delivery App (React Native)",
    desc: "A modern food ordering mobile app built with React Native & Expo featuring cart system, smooth navigation and clean UI experience.",
    img: "/project1.png",
    tag: "React Native",
  },
  {
    title: "E-Commerce Mobile App",
    desc: "Cross-platform shopping app with product listings, filters, cart flow and optimized performance using Expo.",
    img: "/project2.png",
    tag: "Expo",
  },
  {
    title: "Developer Portfolio Website",
    desc: "Modern responsive portfolio built with React.js and Tailwind CSS with focus on animations and clean UI structure.",
    img: "/project3.png",
    tag: "React.js",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6 md:px-10 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto">

        {/* VIP Heading */}
        <div className="mb-16 text-center">

          <h2 className="text-[42px] sm:text-[60px] lg:text-[82px] font-black leading-[0.95] tracking-[-3px]">
            My{" "}
            <span className="text-cyan-400">Work</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-8 leading-8 text-[15px]">
            A selection of React Native & React.js projects focused on mobile-first development,
            smooth UI interactions and production-ready architecture.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl"
            >

              {/* Image placeholder */}
              <div className="h-[210px] bg-[#0B1120] relative overflow-hidden">

                {/* tag */}
                <span className="absolute top-4 left-4 text-xs bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 px-3 py-1 rounded-full backdrop-blur-xl">
                  {project.tag}
                </span>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-6">
                  {project.desc}
                </p>

                <button className="mt-6 text-sm text-cyan-400 hover:text-white transition">
                  View Project →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Portfolio;