import React, { useEffect, useRef } from "react";
import { Globe, ShieldCheck, Briefcase, Scale } from "lucide-react";

const reasons = [
  {
    title: "Global Connectivity",
    description:
      "Strategic location bridging East and West with world-class infrastructure and seamless international business access.",
    icon: Globe,
    gradient: "from-blue-600 via-blue-500 to-blue-700",
    shadowColor: "rgba(37, 99, 235, 0.3)",
    glowColor: "rgba(37, 99, 235, 0.12)",
    bgPattern: "radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)",
    accentColor: "#2563eb",
  },
  {
    title: "Business-Friendly Policies",
    description:
      "100% foreign ownership, zero income tax in many jurisdictions, and streamlined regulatory processes.",
    icon: ShieldCheck,
    gradient: "from-amber-600 via-yellow-500 to-amber-700",
    shadowColor: "rgba(217, 119, 6, 0.3)",
    glowColor: "rgba(217, 119, 6, 0.12)",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(217, 119, 6, 0.1) 0%, transparent 50%)",
    accentColor: "#d97706",
  },
  {
    title: "Diverse Economy",
    description:
      "Thriving opportunities across technology, international trade, finance, logistics, and professional services.",
    icon: Briefcase,
    gradient: "from-blue-700 via-indigo-600 to-blue-800",
    shadowColor: "rgba(29, 78, 216, 0.3)",
    glowColor: "rgba(29, 78, 216, 0.12)",
    bgPattern: "radial-gradient(circle at 20% 20%, rgba(29, 78, 216, 0.1) 0%, transparent 50%)",
    accentColor: "#1d4ed8",
  },
  {
    title: "Stable Legal Framework",
    description:
      "Transparent legal system, robust regulatory framework, and strong intellectual property protection.",
    icon: Scale,
    gradient: "from-yellow-600 via-amber-500 to-yellow-700",
    shadowColor: "rgba(202, 138, 4, 0.3)",
    glowColor: "rgba(202, 138, 4, 0.12)",
    bgPattern: "radial-gradient(circle at 80% 80%, rgba(202, 138, 4, 0.1) 0%, transparent 50%)",
    accentColor: "#ca8a04",
  },
];

const WhyUaeSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".uae-card");

    // Dynamic entrance animation
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(60px) scale(0.9)';
      
      setTimeout(() => {
        card.style.transition = 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, index * 200 + 300);
    });

    // Enhanced hover interactions
    cards.forEach((card, index) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });

      card.addEventListener("mouseenter", () => {
        card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.transform = 'translateY(-12px) scale(1.03)';
        card.style.filter = 'brightness(1.05)';
      });

      card.addEventListener("mouseleave", () => {
        card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.transform = 'translateY(0) scale(1)';
        card.style.filter = 'brightness(1)';
      });
    });

    // Dynamic floating animation
    const floatingOrbs = document.querySelectorAll(".floating-orb");
    floatingOrbs.forEach((orb, index) => {
      const animate = () => {
        const randomX = (Math.random() - 0.5) * 80;
        const randomY = (Math.random() - 0.5) * 60;
        const randomRotation = Math.random() * 180;
        const duration = 6000 + Math.random() * 4000;
        
        orb.style.transition = `transform ${duration}ms ease-in-out`;
        orb.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
        
        setTimeout(animate, duration);
      };
      
      setTimeout(animate, index * 1000);
    });

  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-32 px-6 md:px-24 overflow-hidden"
    >
      {/* Dubai-themed Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="floating-orb absolute top-40 right-16 w-64 h-64 bg-gradient-to-r from-blue-400/25 to-cyan-400/25 rounded-full blur-3xl"></div>
        <div className="floating-orb absolute bottom-32 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/15 to-orange-400/15 rounded-full blur-2xl"></div>
        <div className="floating-orb absolute bottom-20 right-1/3 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Dubai-inspired Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.2'%3E%3Cpath d='M40 40l20-20v40l-20-20zm0 0l-20 20v-40l20 20z M20 60l20-20h-40l20 20zm40 0l-20-20h40l-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Elegant Title Section */}
      <div className="relative z-10 text-center mb-24">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-200 rounded-full text-sm font-medium shadow-lg">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            Business Excellence in the Heart of the UAE
          </div>
        </div>
        
        <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="text-white drop-shadow-lg">
            Why Choose
          </span>
          <br />
          <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
            Dubai UAE?
          </span>
        </h2>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
          <div className="w-3 h-3 bg-amber-400 rounded-full shadow-lg"></div>
          <div className="h-px w-32 bg-gradient-to-r from-amber-400 to-blue-400"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg"></div>
          <div className="h-px w-16 bg-gradient-to-r from-blue-400 to-transparent"></div>
        </div>
        
        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Dubai is a strategic global business destination offering world-class infrastructure, a strategic location connecting major markets, tax-friendly policies, political stability, and a diverse, innovative economy.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 max-w-7xl mx-auto">
        {reasons.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="uae-card group relative overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-500 cursor-pointer border border-white/20 hover:border-white/40"
              style={{
                background: `
                  radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${item.glowColor}, transparent 60%),
                  ${item.bgPattern},
                  linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)
                `,
                boxShadow: `
                  0 25px 50px -12px ${item.shadowColor},
                  0 0 0 1px rgba(255,255,255,0.1),
                  inset 0 1px 0 rgba(255,255,255,0.2)
                `,
              }}
            >
              {/* Dynamic border effect */}
              <div className="absolute inset-0 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `conic-gradient(from 0deg at 50% 50%, ${item.shadowColor}, transparent, ${item.shadowColor})`
                }}
              >
                <div className="w-full h-full bg-slate-800/90 rounded-3xl"></div>
              </div>

              {/* Enhanced shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full duration-1200 ease-in-out"></div>
              </div>

              <div className="p-8 relative z-10">
                {/* Dubai-inspired icon styling */}
                <div className="mb-8 relative">
                  <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-2xl group-hover:shadow-3xl transition-all duration-300`}>
                    <Icon size={32} className="text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-2xl"></div>
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-br ${item.gradient} opacity-30 blur-lg rounded-2xl group-hover:opacity-50 transition-opacity duration-300`}></div>
                  
                  {/* Floating accent dots */}
                  <div className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r ${item.gradient} rounded-full opacity-70 group-hover:scale-125 transition-transform duration-300`}></div>
                </div>

                <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${item.gradient.split(' ').slice(1).join(' ')})`
                  }}
                >
                  {item.title}
                </h3>
                
                <p className="text-blue-100 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>

                {/* Dubai-themed accent line */}
                <div className="mt-8 flex items-center gap-2">
                  <div className={`h-1 w-0 group-hover:w-8 bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-500 ease-out`}></div>
                  <div className={`w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300`}
                    style={{ background: item.accentColor }}
                  ></div>
                  <div className={`h-px w-0 group-hover:w-16 bg-gradient-to-r ${item.gradient} opacity-50 rounded-full transition-all duration-700 delay-500`}></div>
                </div>
              </div>

              {/* Corner geometric accent */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <div className={`w-full h-full bg-gradient-to-bl ${item.gradient} rounded-bl-2xl`}></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-amber-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dubai-themed CTA */}
      <div className="text-center mt-24 relative z-10">
        <div className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-900 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer">
          <span>Begin Your Dubai Success Story</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-slate-800 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-slate-800 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-slate-800 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
        <p className="mt-6 text-blue-200 text-lg">
          Partner with Dubai's leading chartered accountancy experts
        </p>
      </div>

      {/* Bottom accent wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-400/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default WhyUaeSection;