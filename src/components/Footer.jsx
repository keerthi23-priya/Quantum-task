import {FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram,} from "react-icons/fa";
import footerBg from "../assets/footer.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "1000px",
          opacity: 0.9,
        }}
      />

      {/* DARK TINT */}
      <div className="absolute inset-0 bg-black/40" />

      {/* FOOTER CONTENT (FULL WIDTH, NO OUTER GAP) */}
      <div
        className="
          relative
          z-10
          w-full
          backdrop-blur-16px
          bg-black/40
          border-t border-white/10
          px-160px
          py-6
        "
      >
        {/* TOP */}
        <div className="grid grid-cols-3 items-start text-white text-sm max-w-1440px mx-auto">

          {/* LOGO */}
          <div className="flex items-center">
            <img src={logo} alt="Quantum Evolution" className="h-9 w-auto" />
          </div>

          {/* LEFT LINKS */}
          <div className="space-y-1 text-white/90">
            <p>Home</p>
            <p>Courses</p>
            <p>About</p>
            <p>Contact Us</p>
          </div>

          {/* RIGHT LINKS + SOCIAL */}
          <div className="flex flex-col items-end gap-3">
            <div className="space-y-1 text-right text-white/90">
              <p>Program list</p>
              <p>Groups</p>
              <p>Members</p>
              <p>Events</p>
            </div>

            <div className="flex gap-4 text-white">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-[#09AF9B]/60 my-4" />

        {/* COPYRIGHT */}
        <p className="text-center text-xs text-white/80">
          © 2025 Quantum (R) Evolution. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
