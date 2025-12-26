import heroVisual from "../assets/quantum-circle.png";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-28 overflow-hidden bg-black text-white">

      {/* LEFT RADIAL GLOW */}
      <div className="absolute left-0 top-0 w-600px h-600px bg-[rgba(9,175,155,0.3)] blur-[180px] rounded-full" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-1440px mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className="md:pl-16">
          <h1 className="text-[48px] md:text-[64px] font-light leading-tight">
            Unlock the Power of <br />
            <span className="font-medium">Quantum Healing</span>
          </h1>

          <p className="mt-6 text-white/70 max-w-lg">
            Discover a revolutionary healing path that blends science, spirit & ancient
            wisdom to transform your life
          </p>

          <button className="mt-8 px-6 py-3 bg-[#09AF9B] text-black text-sm font-medium rounded-md hover:opacity-90">
            Start Your Healing Journey
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative hidden md:flex justify-end">
          <img
            src={heroVisual}
            alt="Quantum Visual"
            className="w-325px h-325px opacity-90"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
