import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building2,
  Banknote,
  FileText,
  BriefcaseBusiness,
  ShieldCheck,
  BookOpenCheck,
  BarChart2,
  Lightbulb,
} from "lucide-react";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Business Setup & Company Incorporation",
    description:
      "Complete support for Mainland, Free Zone, and Offshore company formation, licensing, and registration in UAE.",
    icon: Building2,
    number: "01",
    color: "#00BFA6",
  },
  {
    title: "Investment Consultancy",
    description:
      "Strategic advice on safe, compliant, and profitable investment opportunities in the UAE and globally.",
    icon: Banknote,
    number: "02",
    color: "#FFC72C",
  },
  {
    title: "Compliance & Taxation Services",
    description:
      "VAT, Corporate Tax, ESR compliance, and tax planning tailored to UAE regulations and business needs.",
    icon: FileText,
    number: "03",
    color: "#00BFA6",
  },
  {
    title: "Chief Financial Advisor (CFA) Services",
    description:
      "Virtual CFO services for startups and SMEs to drive strategic financial growth and decision-making.",
    icon: BriefcaseBusiness,
    number: "04",
    color: "#FFC72C",
  },
  {
    title: "Anti–Money Laundering (AML) Services",
    description:
      "AML policy development, KYC checks, and full regulatory compliance advisory tailored to UAE laws.",
    icon: ShieldCheck,
    number: "05",
    color: "#00BFA6",
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Reliable bookkeeping, audit-ready reports, and financial record management using trusted software.",
    icon: BookOpenCheck,
    number: "06",
    color: "#FFC72C",
  },
  {
    title: "Market Research",
    description:
      "Feasibility studies, competitor analysis, and market intelligence to support strategic decisions.",
    icon: BarChart2,
    number: "07",
    color: "#00BFA6",
  },
  {
    title: "Corporate Skill Development",
    description:
      "Professional training on UAE corporate laws, compliance, finance, and international business operations.",
    icon: Lightbulb,
    number: "08",
    color: "#FFC72C",
  },
];

const OurServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".service-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
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
      className="relative bg-[#000814] text-white py-28 px-6 md:px-24 z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#001F33] via-[#00121d] to-[#000814] opacity-90 z-0 pointer-events-none" />

      <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-20 relative z-10 tracking-tight">
        Our <span className="text-[#00BFA6]">Professional Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className="service-card group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md bg-[#0B1A24]/50 shadow-xl transition-all duration-500 transform hover:scale-[1.03]"
              style={{
                background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), ${service.color}22, transparent 40%)`,
              }}
            >
              <div className="absolute inset-0 pointer-events-none z-0 transition duration-300 group-hover:opacity-100 opacity-0 bg-[radial-gradient(circle_at_var(--x,var(--y)),rgba(255,255,255,0.05),transparent)]" />

              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 animate-swipe-light" />
              </div>

              <div className="p-8 relative z-10">
                <div
                  className="absolute top-5 right-5 px-3 py-1 text-xs font-semibold border border-white/20 rounded-full"
                  style={{ color: service.color }}
                >
                  {service.number}
                </div>

                <div
                  className="flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-transform duration-300"
                  style={{ backgroundColor: `${service.color}22` }}
                >
                  <Icon size={32} style={{ color: service.color }} />
                </div>

                <h3 className="text-2xl font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-[15px] text-gray-300 leading-relaxed min-h-[90px]">
                  {service.description}
                </p>

                <div className="mt-6">
                  <a
                    href="#"
                    className="text-sm font-semibold inline-block transition duration-300 hover:underline"
                    style={{ color: service.color }}
                  >
                    View More →
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurServicesSection;
