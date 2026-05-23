import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-5xl font-bold mb-14 text-center">
          Contact Me
        </h2>

        <div className="bg-[#111827] border border-white/10 rounded-3xl p-10">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#1E293B] p-5 rounded-2xl outline-none mb-5"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-[#1E293B] p-5 rounded-2xl outline-none mb-5"
          />

          <textarea
            rows="6"
            placeholder="Message"
            className="w-full bg-[#1E293B] p-5 rounded-2xl outline-none"
          ></textarea>

          <button className="bg-cyan-400 text-black px-10 py-4 rounded-2xl font-semibold mt-6 hover:scale-105 duration-300">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;