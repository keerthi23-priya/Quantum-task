import "./App.css";
import { useRef } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import WhyChoose from "./sections/WhyChoose";
import Courses from "./sections/Courses";
import Testimonials from "./sections/Testimonials";
import Founders from "./sections/Founders";
import AboutQuantum from "./sections/AboutQuantum";
import Contact from "./sections/Contact";

const App = () => {
  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        refs={{
          heroRef,
          coursesRef,
          aboutRef,
          contactRef,
        }}
      />

      <section ref={heroRef} className="scroll-mt-24">
        <Hero />
      </section>

      <WhyChoose />

      <section ref={coursesRef} className="scroll-mt-24">
        <Courses />
      </section>

      <Testimonials />
      <Founders />

      <section ref={aboutRef} className="scroll-mt-24">
        <AboutQuantum />
      </section>

      <section ref={contactRef} className="scroll-mt-24">
        <Contact />
      </section>

      <Footer />
    </>
  );
};

export default App;
