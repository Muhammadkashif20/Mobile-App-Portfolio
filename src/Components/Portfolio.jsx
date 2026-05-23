import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-14">
          Portfolio
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-[#111827] rounded-3xl overflow-hidden border border-white/10">
            <img
              src="/project1.png"
              alt="project"
              className="w-full h-[260px] object-cover"
            />

            <div className="p-8">
              <h3 className="text-2xl font-semibold">
                Food Ordering App
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                Modern food ordering interface built using
                React and Tailwind CSS.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;