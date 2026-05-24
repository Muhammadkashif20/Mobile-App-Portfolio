import React from "react";

const projects = [
  {
    title: "Food Delivery App",
    desc: "React Native Expo app with modern UI, cart system and smooth navigation.",
    img: "/project1.png",
  },
  {
    title: "E-Commerce App",
    desc: "Cross-platform mobile app with product listing, filters and checkout flow.",
    img: "/project2.png",
  },
  {
    title: "Portfolio Website",
    desc: "Personal developer portfolio built with React.js and Tailwind CSS.",
    img: "/project3.png",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-6 md:px-10 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto">

        {/* VIP Heading */}
        <div className="mb-16 text-center">

          <h2 className="text-[42px] sm:text-[60px] lg:text-[82px] font-black leading-[0.95] tracking-[-3px]">
            My{" "}
            <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-8 leading-8 text-[15px]">
            A collection of mobile apps and web projects built with React Native, Expo and React.js.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:-translate-y-2 transition duration-300"
            >

              {/* Image */}
              <div className="h-[200px] bg-[#0B1120] flex items-center justify-center text-gray-500">
                Project Preview
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-6">
                  {project.desc}
                </p>

                {/* Button */}
                <button className="mt-5 text-sm text-cyan-400 hover:text-white transition">
                  View Details →
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