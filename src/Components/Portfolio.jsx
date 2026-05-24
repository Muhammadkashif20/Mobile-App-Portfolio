import React from "react";
import todoAppImg from "../assets/img/todo-app.png";
import bazaarXImg from "../assets/img/BazaarX-Application.jpeg";
import foodOrderingImg from "../assets/img/Food-Ordering-App.jpeg";  
const projects = [
  {
    title: "Todo App",
    desc: "A simple and efficient task management mobile app built with React Native for daily productivity.",
    img: todoAppImg,
    tag: "React Native (Expo)",
    apk: "/apk/Todo-Application.apk",
  },
  {
    title: "BazaarX App",
    desc: "A modern shopping and marketplace mobile app with smooth UI",
    img: bazaarXImg,
    tag: "React Native (Expo)",
    apk: "/apk/BazaarX-Application.apk",
  },
  {
    title: "Food Ordering App",
    desc: "A fully responsive food delivery mobile app with smooth UI",
    img: foodOrderingImg,
    tag: "React Native (Expo)",
    apk: "/apk/Food-Ordering-App.apk",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6 md:px-10 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-[42px] sm:text-[60px] lg:text-[82px] font-black leading-[0.95] tracking-[-3px]">
            My <span className="text-cyan-400">Work</span>
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

              {/* Image */}
          <div className="h-[210px] bg-[#0B1120] relative overflow-hidden flex items-center justify-center">

  <img
    src={project.img}
    alt={project.title}
    className="w-[85%] h-full object-contain group-hover:scale-105 transition duration-500"
  />

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

                {/* APK Download Button */}
                <a
                  href={project.apk}
                  download
                  className="mt-6 inline-block text-sm text-cyan-400 hover:text-white transition"
                >
                  Download APK →
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Portfolio;