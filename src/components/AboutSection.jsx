import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#000D1A] text-white py-28 px-6 md:px-24 z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#001F33] via-[#000f1d] to-[#000814] opacity-90 pointer-events-none z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            About{" "}
            <span className="text-[#00BFA6]">
              CAPMC Corporate Consultancy Services
            </span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Led by <strong>CA Piyush Misra</strong>, CAPMC is a premier
            Dubai-based consultancy firm delivering tailored solutions in
            business incorporation, taxation, compliance, and strategic finance.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            With strong presence in both UAE and India, we enable startups,
            SMEs, corporates, and global investors to navigate regulatory
            challenges with confidence and clarity.
          </p>
          <a
            href="#services"
            className="inline-block mt-8 bg-[#00BFA6] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#009982] transition duration-300 shadow-lg"
          >
            Explore Our Services
          </a>
        </div>

        {/* Image Box */}
        <div className="flex justify-center relative">
          {/* Glowing ring behind */}
          <div className="absolute w-72 h-72 rounded-3xl bg-[#00BFA6]/10 blur-3xl z-0" />
          <div className="relative w-96 h-96 bg-black/10 backdrop-blur-xl border border-[#00BFA6]/30 rounded-[2rem] overflow-hidden shadow-[0_0_60px_rgba(0,191,166,0.15)] z-10 transition-transform duration-500 hover:scale-105">
            <img
              src="/img/logo.png"
              alt="CAPMC Corporate consultancy Services"
              className="object-contain w-full h-full p-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
