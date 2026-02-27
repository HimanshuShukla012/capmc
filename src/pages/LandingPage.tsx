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
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".fade-in").forEach((section) => {
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
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800 scroll-smooth">
      <Helmet>
  <title>CAPMC LLC FZ | Business Setup Dubai & UAE Company Formation</title>
  <meta name="description" content="CAPMC LLC FZ — Dubai's trusted CA firm for UAE company formation, business setup, VAT compliance, Virtual CFO & AML services. 500+ companies. Free consultation." />
  <link rel="canonical" href="https://capmc.ae/" />
  <meta property="og:title" content="CAPMC LLC FZ | Business Setup Dubai" />
  <meta property="og:url" content="https://capmc.ae/" />
</Helmet>
      <Navbar />

      <section
        className="relative h-screen w-full flex items-center justify-start text-left px-6 md:px-20 overflow-hidden fade-in bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/Hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* Content - Directly on image without box */}
        <div className="z-10 max-w-2xl text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] leading-tight">
            Strategizing Success for Global Business Dreams
          </h1>
          <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            At CAPMC, we specialize in cross-border business setup, taxation, and financial advisory with a commitment to excellence and trust across UAE & beyond.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#FF8C00] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:bg-[#e67e00] transition duration-300 hover:shadow-2xl transform hover:scale-105"
          >
            Get Expert Advice →
          </a>
        </div>

        {/* Decorative Bottom Line */}
        <div className="absolute bottom-10 w-full text-left pl-6 md:pl-20 z-10">
          <span className="text-sm text-white tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
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