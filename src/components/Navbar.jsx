import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = ({ refs }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-1440px mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div
          className="flex items-center pl-6 cursor-pointer"
          onClick={() => scrollTo(refs.heroRef)}
        >
          <img src={logo} alt="Logo" className="h-9 w-auto" />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-10 text-sm items-center">
          <li className="text-[#09AF9B] cursor-pointer" onClick={() => scrollTo(refs.heroRef)}>Home</li>
          <li className="text-white/80 hover:text-white cursor-pointer" onClick={() => scrollTo(refs.coursesRef)}>Courses</li>
          <li className="text-white/80 hover:text-white cursor-pointer" onClick={() => scrollTo(refs.aboutRef)}>About</li>
          <li className="text-white/80 hover:text-white cursor-pointer" onClick={() => scrollTo(refs.contactRef)}>Contact</li>

          {/* More Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="text-white/80 hover:text-white flex items-center gap-1"
            >
              More
              <span className={`transition ${open ? "rotate-180" : ""}`}>▾</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => scrollTo(refs.whyChooseRef)}
                  className="block w-full text-left px-4 py-3 text-sm text-white/80 hover:bg-white/10"
                >
                  Why Choose Us
                </button>
                <button
                  onClick={() => scrollTo(refs.testimonialsRef)}
                  className="block w-full text-left px-4 py-3 text-sm text-white/80 hover:bg-white/10"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollTo(refs.foundersRef)}
                  className="block w-full text-left px-4 py-3 text-sm text-white/80 hover:bg-white/10"
                >
                  Founders
                </button>
              </div>
            )}
          </li>

          <li className="text-white/80 cursor-pointer">EN ▾</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
