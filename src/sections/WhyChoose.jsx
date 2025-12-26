import quantumCircle from "../assets/quantum-circle.png";
import decoSymbol from "../assets/group-2.png"; 

const WhyChoose = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden pt-24 pb-16">

      {/* SUBTLE BACKGROUND GLOW */}
      <div className="absolute right-0 top-0 w-500px h-500px bg-[rgba(9,175,155,0.2)] blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-1440px mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT VISUAL */}
        <div className="hidden md:flex justify-center">
          <img
            src={quantumCircle}
            alt="Quantum Energy"
            className="w-360px h-360px"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-[28px] md:text-[32px] font-medium mb-10 leading-snug">
            Why Choose Quantum <br />
            (R) Evolution?
          </h2>

          <ul className="space-y-6 text-sm text-white/80">
            {[
              "Scientifically Rooted, Spiritually Empowered",
              "Heal Yourself & Others Onsite or at a Distance",
              "Real-Life Transformation from Anxiety & Chronic Fatigue",
              "Courses Tailored for Busy Modern Lives",
              "Globally Certified Quantum Healing Instructors",
              "Immediate Integration into Your Lifestyle",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="mt-1 flex items-center justify-center w-6 h-6 rounded-full border border-white/40 text-white/60">
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-10 px-6 py-3 bg-[#09AF9B] text-black text-sm rounded-md hover:opacity-90">
            Book a discovery call
          </button>
        </div>
      </div>

      {/* DECORATIVE SYMBOL (BOTTOM RIGHT IMAGE) */}
      <img
        src={decoSymbol}
        alt=""
        className="
          absolute
          bottom-20
          right-32
          w-120px
          opacity-70
          pointer-events-none
          hidden md:block
        "
      />
    </section>
  );
};

export default WhyChoose;
