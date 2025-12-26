import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";

import TestimonialCard from "../components/TestimonialCard";

/* DATA */
const testimonials = [
  {
    name: "Padmini",
    location: "Gorakhpur",
    text:
      "I suffered from ALS. After one quantum session, my pain reduced and I’ve been sleeping better. I feel calm.",
  },
  {
    name: "Jayesh",
    location: "Allahabad",
    text:
      "After one healing with my father, he slept peacefully for 7 hours for the first time in years.",
  },
  {
    name: "Anonymous",
    location: "Chennai",
    text:
      "Bala’s session felt like being recharged at a soul level.",
  },
  {
    name: "Meera",
    location: "Delhi",
    text:
      "The experience was deeply calming and transformative. Highly recommended.",
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative pt-10 pb-32 bg-black text-white overflow-hidden">


      {/* HEADER */}
      <div className="max-w-1440px mx-auto px-8 flex justify-between items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-medium">
          Real People. Real Transformations.
        </h2>

        <button className="text-sm px-4 py-2 bg-[#09AF9B]/10 text-[#09AF9B] rounded-md">
          View All
        </button>
      </div>

      {/* SLIDER WRAPPER */}
      <div className="relative max-w-1440px mx-auto px-12">


        {/* LEFT ARROW */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-[#09AF9B]"
        >
          ←
        </button>

        {/* RIGHT ARROW */}
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-[#09AF9B]"
        >
          →
        </button>

        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={20}
          speed={600}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
