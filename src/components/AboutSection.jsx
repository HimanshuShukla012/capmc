import React, { useEffect, useRef } from "react";
import { Award, Users, Globe2, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Content animation
    const contentElements = document.querySelectorAll('.about-animate');
    contentElements.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(40px)';
      
      setTimeout(() => {
        element.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, index * 200 + 300);
    });

    // Stats animation
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px) scale(0.95)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, index * 150 + 600);

      // Hover effects
      card.addEventListener("mouseenter", () => {
        card.style.transition = 'all 0.3s ease';
        card.style.transform = 'translateY(-5px) scale(1.02)';
      });

      card.addEventListener("mouseleave", () => {
        card.style.transition = 'all 0.3s ease';
        card.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Logo box hover
    const logoBox = document.querySelector('.logo-box');
    if (logoBox) {
      logoBox.addEventListener("mouseenter", () => {
        logoBox.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        logoBox.style.transform = 'scale(1.05) rotateY(5deg)';
      });

      logoBox.addEventListener("mouseleave", () => {
        logoBox.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        logoBox.style.transform = 'scale(1) rotateY(0deg)';
      });
    }

  }, []);

  const stats = [
    { icon: Award, value: "30+", label: "Years Experience", color: "from-amber-500 to-orange-500" },
    { icon: Users, value: "500+", label: "Clients Served", color: "from-blue-500 to-indigo-500" },
    { icon: Globe2, value: "2", label: "Countries", color: "from-emerald-500 to-teal-500" },
    { icon: TrendingUp, value: "100%", label: "Success Rate", color: "from-purple-500 to-violet-500" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 text-gray-800 py-20 px-6 md:px-24 overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-amber-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
      </div>

      {/* Connecting line from hero */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-blue-300 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="about-animate">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium mb-6 border border-blue-200/50">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Premier Dubai-based Consultancy
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                About{" "}
                <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent">
                  CAPMC Corporate
                </span>
                <br />
                <span className="text-gray-700">Consultancy Services</span>
              </h2>
            </div>

            <div className="about-animate space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Led by <span className="font-semibold text-gray-900">CA Piyush Misra</span>, CAPMC is a premier 
                Dubai-based consultancy firm delivering tailored solutions in business incorporation, 
                taxation, compliance, and strategic finance.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                With a strong presence in both UAE and India, we enable startups, SMEs, corporates, 
                and global investors to navigate regulatory challenges with confidence and clarity. 
                Our comprehensive approach ensures seamless business operations across jurisdictions.
              </p>
            </div>

            <div className="about-animate">
              <a
            href="/services"
            className="inline-block bg-[#FF8C00] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:bg-[#e67e00] transition duration-300 hover:shadow-2xl transform hover:scale-105"
          >
            Explore Our Services →
          </a>
            </div>
          </div>

          {/* Logo Section */}
          <div className="about-animate flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl blur-2xl"></div>
              
              {/* Main logo container */}
              <div className="logo-box relative w-80 h-80 bg-gradient-to-br from-white via-gray-50 to-blue-50/50 backdrop-blur-sm border border-white/60 rounded-3xl overflow-hidden shadow-2xl">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/30 rounded-3xl"></div>
                
                {/* Logo */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                  <img
                    src="/img/logo dark.png"
                    alt="CAPMC Corporate Consultancy Services"
                    className="object-contain w-full h-full filter drop-shadow-lg"
                  />
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-400/20 to-transparent rounded-bl-2xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-tr-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="stat-card group text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg cursor-pointer"
                style={{
                  background: `
                    linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)
                  `,
                  boxShadow: `
                    0 10px 25px -5px rgba(0,0,0,0.1),
                    0 0 0 1px rgba(255,255,255,0.5)
                  `,
                }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg mb-3 group-hover:shadow-xl transition-shadow duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>
                
                <div className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">
                  {stat.value}
                </div>
                
                <div className="text-sm text-gray-600 font-medium group-hover:text-gray-700 transition-colors">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Connecting line to next section */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-blue-300"></div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-50/30 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default AboutSection;