import React from "react";
import quantumCircle from "../assets/quantum-circle.png";
import quantumHuman from "../assets/quantum-human.jpg";

const QuantumAbout = () => {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Page background glow */}
      <div className="absolute inset-0 bg-radial-gradient(circle_at_center,_rgba(0,180,150,0.25),_transparent_65%)" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">
            What is Quantum Healing?
          </h2>
          <p className="mt-3 text-sm text-white/60">
            Where ancient wisdom meets modern physics.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12">
          
          {/* Left Text */}
          <div className="text-sm text-white/70 leading-relaxed space-y-4">
            <p>
              Quantum Healing is a holistic method that uses energy,
              consciousness, and principles of quantum physics to promote
              deep healing of the mind, body, and spirit.
            </p>
            <p>
              It helps release blockages, restore balance, and activate the
              body’s natural healing abilities.
            </p>
          </div>

          {/* Center Visual */}
          <div className="relative flex justify-center items-center">
            {/* Rotating quantum circle */}
            <img
              src={quantumCircle}
              alt="Quantum Circle"
              className="absolute w-420px opacity-80 animate-spin-slower"
            />

            {/* Glow behind human */}
            <div className="absolute w-72 h-72 rounded-full bg-radial-gradient(circle,_rgba(120,220,255,0.6),_transparent_65%) blur-2xl" />

            {/* Circular human image */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden z-10 shadow-[0_0_40px_rgba(120,220,255,0.6)]">
              <img
                src={quantumHuman}
                alt="Quantum Meditation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Points */}
          <div className="text-sm text-white/70 space-y-6">
            {[
              "Inspired by Heisenberg, Schrödinger",
              "Backed by Vedantic Teachings",
              "Rooted in Consciousness",
              "Connected through Morphic Fields",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full border border-emerald-400 flex items-center justify-center text-emerald-400 text-xs">
                   →
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <p className="mt-20 text-center text-white/60 Poppins text-sm">
          “All happenings are played out in one universal consciousness”
          <br />
          <span className="text-xs mt-2 block">— Erwin Schrödinger</span>
        </p>
      </div>
    </section>
  );
};

export default QuantumAbout;
