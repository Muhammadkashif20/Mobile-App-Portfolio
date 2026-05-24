import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 bg-[#050816] text-white">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          Have a project in mind? Let’s build something amazing together.
        </p>

        {/* Form Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-lg">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#0B1120] border border-white/10 p-5 rounded-2xl outline-none text-white focus:border-cyan-400 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#0B1120] border border-white/10 p-5 rounded-2xl outline-none text-white focus:border-cyan-400 transition"
            />

          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full mt-6 bg-[#0B1120] border border-white/10 p-5 rounded-2xl outline-none text-white focus:border-cyan-400 transition"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full mt-6 bg-[#0B1120] border border-white/10 p-5 rounded-2xl outline-none text-white focus:border-cyan-400 transition resize-none"
          ></textarea>

          {/* Button */}
          <button className="mt-8 w-full sm:w-auto bg-cyan-400 text-black px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-[0_10px_40px_rgba(34,211,238,0.25)]">
            Send Message →
          </button>

        </div>

        {/* Bottom info */}
        <div className="text-center mt-10 text-gray-500 text-sm">
          Or email me directly at{" "}
          <span className="text-cyan-400">unnamed9080@gmail.com</span>
        </div>

      </div>
    </section>
  );
};

export default Contact;