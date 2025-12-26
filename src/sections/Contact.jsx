const ContactCard = () => {
  return (
    <section className="relative flex justify-center items-center pt-10 pb-24 bg-black">
      {/* subtle glow */}
      <div className="absolute inset-0 bg-radial-gradient(circle_at_top,_rgba(9,175,155,0.25),_transparent_45%)" />

      <div className="relative">
        <h2 className="text-center text-2xl text-white mb-6">
          Contact Us
        </h2>

        {/* CARD */}
        <div
          className="
            w-[300.39px]
            bg-white/10
            backdrop-blur-xl
            border border-white/10
            rounded-[8.04px]
            p-6
            shadow-2xl
          "
        >
          <p className="text-center text-white/80 mb-6 text-sm">
            Transform Your Life. Let’s Begin.
          </p>

          <div className="space-y-4">
            <input
              placeholder="Enter name"
              className="
                w-full
                h-[51.09px]
                px-[24.11px]
                py-[10.05px]
                rounded-[8.04px]
                bg-black/40
                border border-[#09AF9B]/40
                text-white text-sm
                placeholder-white/50
                focus:outline-none
                focus:border-[#09AF9B]
              "
            />

            <input
              placeholder="Enter email id"
              className="
                w-full
                h-[51.09px]
                px-[24.11px]
                py-[10.05px]
                rounded-[8.04px]
                bg-black/40
                border border-[#09AF9B]/40
                text-white text-sm
                placeholder-white/50
                focus:outline-none
                focus:border-[#09AF9B]
              "
            />

            <textarea
              placeholder="Enter message"
              rows={2}
              className="
                w-full
                px-[24.11px]
                py-[10.05px]
                rounded-[8.04px]
                bg-black/40
                border border-[#09AF9B]/40
                text-white text-sm
                placeholder-white/50
                focus:outline-none
                focus:border-[#09AF9B]
              "
            />
          </div>

          {/* BUTTON */}
          <button
            className="
              mt-6
              w-full
              h-[51.09px]
              px-[24.11px]
              py-[10.05px]
              rounded-[8.04px]
              bg-[#09AF9B]
              text-black
              text-sm
              font-medium
              hover:brightness-110
              transition
            "
          >
            Book now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
