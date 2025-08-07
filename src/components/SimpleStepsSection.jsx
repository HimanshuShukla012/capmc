import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FolderKanban, FileText, BadgeCheck, Banknote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Select Jurisdiction & Choose Business Activity",
    description:
      "Collect all necessary documents and ensure they're accurate and up-to-date.",
    icon: FolderKanban,
    number: "01",
    color: "#00BFA6",
  },
  {
    title: "Document Preparation & Trade License",
    description:
      "Obtain your license based on the legal structure and jurisdiction selected.",
    icon: FileText,
    number: "02",
    color: "#FFC72C",
  },
  {
    title: "Visa Process",
    description:
      "Initiate visa applications for you and your employees or partners.",
    icon: BadgeCheck,
    number: "03",
    color: "#00BFA6",
  },
  {
    title: "Corporate Bank Account",
    description:
      "Establish a business bank account to enable smooth operations and compliance.",
    icon: Banknote,
    number: "04",
    color: "#FFC72C",
  },
];

const SimpleStepsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".step-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

        const moveX = (x - rect.width / 2) / 20;
        const moveY = (y - rect.height / 2) / 20;
        gsap.to(card, {
          rotationY: moveX,
          rotationX: -moveY,
          transformPerspective: 1000,
          transformOrigin: "center",
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      });

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.03,
          duration: 0.4,
          ease: "power3.out",
        });
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#001F33] text-white py-24 px-6 md:px-24 z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#001F33] via-[#000F1D] to-[#000814] opacity-90 z-0 pointer-events-none" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 relative z-10">
        <span className="text-[#00BFA6]">4 Simple Steps</span> to Start a Business in Dubai
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={i}
              className="step-card group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md bg-[#0B1A24]/50 shadow-xl transition-all duration-500 transform hover:scale-[1.03]"
              style={{
                background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), ${step.color}22, transparent 40%)`,
              }}
            >
              <div className="absolute inset-0 pointer-events-none z-0 transition duration-300 group-hover:opacity-100 opacity-0 bg-[radial-gradient(circle_at_var(--x,var(--y)),rgba(255,255,255,0.05),transparent)]" />

              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 animate-swipe-light" />
              </div>

              <div className="p-8 relative z-10">
                <div
                  className="absolute top-5 right-5 px-3 py-1 text-xs font-semibold border border-white/20 rounded-full"
                  style={{ color: step.color }}
                >
                  {step.number}
                </div>

                <div
                  className="flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-transform duration-300"
                  style={{ backgroundColor: `${step.color}22` }}
                >
                  <Icon size={32} style={{ color: step.color }} />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed min-h-[90px]">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SimpleStepsSection;
