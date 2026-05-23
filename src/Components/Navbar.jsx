import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1220]/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
          Kashif<span className="text-white">.dev</span>
        </h1>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-gray-300 text-sm">

          {["home", "about", "services", "portfolio", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group hover:text-cyan-400 transition duration-300"
            >
              <span className="capitalize">{item}</span>

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Button */}
        <button className="hidden md:block px-5 py-2 rounded-xl bg-cyan-400 text-black font-medium hover:scale-105 transition">
          Hire Me
        </button>

      </div>
    </nav>
  );
};

export default Navbar;