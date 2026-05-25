import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const whatsappNumber = "923122701346";

  const whatsappMessage =
    "Hi Kashif 👋 I visited your portfolio and want to connect with you.";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  // ===== SEND EMAIL =====
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // EmailJS Service ID
        "YOUR_TEMPLATE_ID", // EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY" // EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-10 bg-[#050816] overflow-hidden text-white"
    >
      {/* ===== Background ===== */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-cyan-500/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-500/10 rounded-full blur-[140px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ===== Heading ===== */}
        <div className="text-center">
          <p className="text-cyan-400 uppercase tracking-[5px] text-xs mb-5">
            CONTACT
          </p>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95]">
            Let’s Create
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 pb-3">
              Amazing Experiences
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8 text-[15px]">
            Whether it’s a modern mobile app, sleek frontend interface or
            creative idea — feel free to reach out and connect with me.
          </p>
        </div>

        {/* ===== Main Section ===== */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
          {/* ===== LEFT SIDE ===== */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-400/5 blur-3xl rounded-[40px]" />

            <div className="relative bg-white/5 border border-white/10 rounded-[36px] p-8 backdrop-blur-2xl overflow-hidden">
              {/* Top */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-3xl animate-pulse">
                  <FaWhatsapp />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Fast & Friendly Communication
                  </p>

                  <h3 className="text-2xl font-bold mt-1">
                    Let’s Connect
                  </h3>
                </div>
              </div>

              {/* Chat UI */}
              <div className="space-y-5">
                <div className="flex justify-end">
                  <div className="bg-cyan-400 text-black px-5 py-4 rounded-[24px] rounded-br-md max-w-[280px] text-[15px] leading-7 shadow-lg">
                    Hi Kashif 👋
                    <br />
                    I saw your portfolio and really liked your work.
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-[#111827] border border-white/10 px-5 py-4 rounded-[24px] rounded-bl-md max-w-[300px] text-gray-300 text-[15px] leading-7">
                    Thank you! 🚀
                    <br />
                    Feel free to share your idea or project details.
                  </div>
                </div>
              </div>

              <button
                onClick={openWhatsApp}
                className="group mt-10 w-full bg-green-400/20 border border-green-400/30 text-green-400 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-green-400 hover:text-black duration-300"
              >
                Chat on WhatsApp

                <FaWhatsapp className="text-xl group-hover:scale-110 duration-300" />
              </button>
            </div>
          </div>

          {/* ===== RIGHT SIDE ===== */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/5 border border-white/10 rounded-[36px] p-8 sm:p-10 backdrop-blur-2xl"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full bg-[#0B1120] border border-white/10 p-5 rounded-2xl outline-none focus:border-cyan-400 transition"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full bg-[#0B1120] border border-white/10 p-5 rounded-2xl outline-none focus:border-cyan-400 transition"
              />
            </div>

            <input
              type="text"
              name="project"
              placeholder="Project / Idea"
              required
              className="w-full mt-5 bg-[#0B1120] border border-white/10 p-5 rounded-2xl outline-none focus:border-cyan-400 transition"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Tell me about your project..."
              required
              className="w-full mt-5 bg-[#0B1120] border border-white/10 p-5 rounded-2xl outline-none resize-none focus:border-cyan-400 transition"
            ></textarea>

            {/* Send Button */}
            <button
              type="submit"
              className="group mt-7 w-full bg-cyan-400 text-black py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] duration-300 shadow-[0_10px_40px_rgba(34,211,238,0.25)]"
            >
              Send Message

              <FaPaperPlane className="group-hover:translate-x-1 duration-300" />
            </button>

            {/* Bottom */}
            <p className="text-center text-gray-500 text-sm mt-6">
              Or email me directly at
              <span className="text-cyan-400 ml-2">
                unnamed9080@gmail.com
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;