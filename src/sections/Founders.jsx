import React from "react";
import ekta from "../assets/ekta.png";
import francois from "../assets/francois.png";
import quantum from "../assets/quantum-circle.png";

const Founders = () => {
  return (
    <section className="relative bg-black text-white pt-10 pb-20 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-radial-gradient(circle_at_center,_rgba(0,180,150,0.25),_transparent_60%)" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl tracking-wide mb-16">
          Two Souls. One Mission. Conscious Evolution.
        </h2>

        {/* Founders */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-5">
          
          {/* Ekta */}
          <div className="text-center max-w-xs">
            <img
              src={ekta}
              alt="Ekta Boudelrique"
              className="w-40 h-40 rounded-full object-cover mx-auto border border-white/20"
            />
            <h3 className="mt-6 text-lg font-medium">
              Ekta Boudelrique
            </h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              Heartfulness trainer, eco-leader, quantum visionary. From Indian roots to global
            </p>
          </div>

          {/* Quantum Circle */}
          <div className="hidden md:flex items-center justify-center">
            <img
              src={quantum}
              alt="Quantum Circle"
              className="w-28 h-28 opacity-80 animate-spin-slow"
            />
          </div>

          {/* François */}
          <div className="text-center max-w-xs">
            <img
              src={francois}
              alt="François Boudelrique"
              className="w-40 h-40 rounded-full object-cover mx-auto border border-white/20"
            />
            <h3 className="mt-6 text-lg font-medium">
              François Boudelrique
            </h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              Former top-performing ESA consultant turned conscious economy expert
            </p>
          </div>
        </div>

        {/* Quote */}
        <p className="mt-20 text-white/80 text-sm md:text-base">
          “Time is short. Opportunity is great. It is for all of us to evolve”
        </p>

        {/* Button */}
        <button className="mt-10 inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 rounded-full text-sm font-medium transition">
          Read Our Story
          <span className="w-6 h-6 rounded-full border border-black flex items-center justify-center">
            →
          </span>
        </button>
      </div>
    </section>
  );
};

export default Founders;
