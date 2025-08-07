import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, ShieldCheck, Briefcase, Scale } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    title: "Global Connectivity",
    description:
      "Strategic location bridging East and West with world-class infrastructure.",
    icon: Globe,
    
    color: "#00BFA6",
  },
  {
    title: "Business-Friendly Policies",
    description:
      "100% foreign ownership and zero income tax in many jurisdictions.",
    icon: ShieldCheck,
    
    color: "#FFC72C",
  },
  {
    title: "Diverse Economy",
    description:
      "Opportunities across tech, trade, finance, logistics, and tourism.",
    icon: Briefcase,
    
    color: "#00BFA6",
  },
  {
    title: "Stable Legal Framework",
    description:
      "Transparent laws and strong regulatory framework to support enterprises.",
    icon: Scale,
    
    color: "#FFC72C",
  },
];

const WhyUaeSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".uae-card");

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
          start: "top 80%",
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
      className="relative bg-[#000D1A] text-gray-100 py-24 px-6 md:px-24 z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#001F33] via-[#00121d] to-[#000814] opacity-90 z-0 pointer-events-none" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight text-white relative z-10">
        Why <span className="text-[#00BFA6]">Setup a Business</span> in UAE
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {reasons.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="uae-card group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md bg-[#0B1A24]/50 shadow-xl transition-all duration-500 transform hover:scale-[1.03]"
              style={{
                background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), ${item.color}22, transparent 40%)`,
              }}
            >
              <div className="absolute -top-4 -left-4 font-bold px-3 py-1 rounded-full text-sm shadow-md z-10" style={{ backgroundColor: item.color, color: "#000D1A" }}>
                {item.number}
              </div>

              <div className="absolute inset-0 pointer-events-none z-0 transition duration-300 group-hover:opacity-100 opacity-0 bg-[radial-gradient(circle_at_var(--x,var(--y)),rgba(255,255,255,0.05),transparent)]" />

              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 animate-swipe-light" />
              </div>

              <div className="p-8 relative z-10">
                <div className="mb-4">
                  <Icon size={40} style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm min-h-[60px]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUaeSection;