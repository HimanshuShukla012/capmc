import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import SimpleStepsSection from "../components/SimpleStepsSection";
import OurServicesSection from "../components/OurServicesSection";
import WhyUaeSection from "../components/WhyUaeSection";
import TeamSection from "../components/TeamSection";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useGSAP(() => {
    gsap.utils.toArray(".fade-in").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#000D1A] via-[#001F33] to-[#000814] text-gray-100 scroll-smooth">
      <Navbar />

       <section
      className="relative h-screen w-full flex items-center justify-start text-white text-left px-6 md:px-20 overflow-hidden fade-in bg-cover bg-center"
      style={{
        backgroundImage: "url('/public/img/Hero.png')",
      }}
    >
      {/* Gradient Overlay */}

      

      {/* Blurred Glow Element */}
      <div className="absolute w-[600px] h-[600px] bg-[#FFB400]/10 rounded-full blur-[120px] left-[25%] top-1/2 -translate-y-1/2 z-0" />

      {/* Content */}
      <div className="z-10 max-w-2xl text-left p-6 md:p-14 rounded-[2rem]">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#FFB400] drop-shadow-[0_0_30px_rgba(255,180,0,0.4)]">
          Strategizing Success for Global Business Dreams
        </h1>
        <p className="text-lg md:text-xl text-gray-100 font-medium leading-relaxed">
          At CAPMC, we specialize in cross-border business setup, taxation, and financial advisory with a commitment to excellence and trust across UAE & beyond.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block bg-[#FFB400] text-black font-bold px-6 py-3 rounded-full shadow-lg hover:bg-[#e6a700] transition duration-300"
        >
          Get Expert Advice →
        </a>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-10 w-full text-left pl-6 md:pl-20 z-10">
        <span className="text-sm text-white/50 tracking-widest uppercase">
          Trusted by Visionaries | Driven by Excellence
        </span>
      </div>
    </section>

      <div className="space-y-24 md:space-y-32 pt-20">
        <AboutSection />
        <WhyUaeSection />
        <SimpleStepsSection />
        <OurServicesSection />
        <TeamSection />
        <FaqSection />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
