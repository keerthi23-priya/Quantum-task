import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";

import CourseCard from "../components/CourseCard";


const courses = [
  {
    title: "Quantum Healing Foundation Course",
    desc: "Heal from within & become a source of transformation for others.",
    days: "6 Days",
    tag: "Available online",
    price: "500",
  },
  {
    title: "Quantum Advanced Therapy Course",
    desc: "Master deep healing methods using quantum biology, morphic fields & energy resonance.",
    days: "12 Days",
    tag: "Practitioner Level",
    price: "850",
  },
  {
    title: "Quantum Mapping with François",
    desc: "Reprogram your life for health, wealth & harmony by mapping goals from the heart.",
    days: "1-on-1 Session",
    tag: "By Appointment",
    price: "500",
  },

  //  EXTRA CARDS
  {
    title: "Advanced Energy Alignment",
    desc: "Deepen your energetic balance and personal alignment.",
    days: "8 Days",
    tag: "Online + Live",
    price: "650",
  },
  {
    title: "Quantum Consciousness Program",
    desc: "Explore higher states of awareness and transformation.",
    days: "10 Days",
    tag: "Master Level",
    price: "950",
  },
];

const Courses = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative pt-16 pb-32  bg-black text-white overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-1440px mx-auto px-8 flex justify-between items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-medium">
          Our Signature Courses Built for Transformation
        </h2>

        <button className="text-sm px-4 py-2 bg-[#09AF9B]/10 text-[#09AF9B] rounded-md">
          View All
        </button>
      </div>

      {/* SLIDER WRAPPER */}
      <div className="relative max-w-1440px mx-auto px-16">
        
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
          spaceBetween={20}
          slidesPerView={3}
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
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard {...course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Courses;
