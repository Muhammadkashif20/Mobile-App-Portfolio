import React from "react";

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-5xl font-bold mb-10">
          About Me
        </h2>

        <div className="bg-[#111827] border border-white/10 rounded-3xl p-10">
          <p className="text-gray-400 text-lg leading-9">
            I am a frontend and MERN stack developer with
            strong expertise in React.js, Tailwind CSS,
            Firebase and modern UI development.
            I focus on creating smooth, responsive and
            professional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;