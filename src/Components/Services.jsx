import React from "react";

const services = [
  {
    title: "Frontend Development",
    desc: "Modern React.js applications with clean UI."
  },
  {
    title: "Responsive Design",
    desc: "Perfect layouts for mobile, tablet and desktop."
  },
  {
    title: "React Applications",
    desc: "Fast and scalable modern web applications."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-14">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-white/10 rounded-3xl p-8 hover:-translate-y-2 duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;