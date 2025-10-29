import React, { useEffect, useRef } from "react";

const team = [
  {
    name: "CA Piyush Misra",
    title: "Founder & Director",
    desc: "With 30+ years of experience in audit, finance, and taxation, he brings credibility, strategic clarity, and global business insight.",
    image: "/img/CA Piyush Misra.png",
    linkedin: "https://www.linkedin.com/in/ca-piyush-misra/",
    email: "info@capmc.ae",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    shadowColor: "rgba(255, 140, 0, 0.4)",
    glowColor: "rgba(255, 140, 0, 0.15)",
    bgGradient: "from-orange-50 to-amber-50",
    accentColor: "#FF8C00",
  },
  {
    name: "CA Anuradha Singh",
    title: "Director",
    desc: "Expert in taxation and corporate finance, she offers sharp financial advisory with a client-centric approach.",
    image: "/img/CA Anuradha Singh.png",
    linkedin: "https://www.linkedin.com/in/ca-anuradha-singh/",
    email: "info@capmc.ae",
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    shadowColor: "rgba(139, 92, 246, 0.4)",
    glowColor: "rgba(139, 92, 246, 0.15)",
    bgGradient: "from-purple-50 to-violet-50",
    accentColor: "#8B5CF6",
  },
];

const EnhancedTeamSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".team-card");

    // Enhanced card entrance animation
    cards.forEach((card, index) => {
      // Initial state
      card.style.opacity = '0';
      card.style.transform = 'translateY(80px) scale(0.9)';
      
      // Animate in with stagger
      setTimeout(() => {
        card.style.transition = 'all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, index * 300);
    });

    // Enhanced card interactions with smooth lift effect
    cards.forEach((card, index) => {
      const member = team[index];
      
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });

      card.addEventListener("mouseenter", () => {
        card.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.transform = 'translateY(-12px) scale(1.03)';
        card.style.filter = 'brightness(1.05)';
      });

      card.addEventListener("mouseleave", () => {
        card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.transform = 'translateY(0) scale(1)';
        card.style.filter = 'brightness(1)';
      });
    });

    // Floating animation for background elements
    const floatingOrbs = document.querySelectorAll(".floating-orb");
    floatingOrbs.forEach((orb, index) => {
      const animate = () => {
        const randomX = (Math.random() - 0.5) * 60;
        const randomY = (Math.random() - 0.5) * 80;
        const randomRotation = Math.random() * 360;
        const duration = 5000 + Math.random() * 5000;
        
        orb.style.transition = `transform ${duration}ms ease-in-out`;
        orb.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
        
        setTimeout(animate, duration);
      };
      
      setTimeout(animate, index * 800);
    });

  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-white via-gray-50 to-indigo-50/20 text-gray-800 py-32 px-6 md:px-24 z-10 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb absolute top-32 left-20 w-80 h-80 bg-gradient-to-r from-orange-200/25 to-amber-200/25 rounded-full blur-3xl"></div>
        <div className="floating-orb absolute top-20 right-32 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-violet-200/30 rounded-full blur-2xl"></div>
        <div className="floating-orb absolute bottom-40 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="floating-orb absolute bottom-32 right-20 w-72 h-72 bg-gradient-to-r from-rose-200/25 to-pink-200/25 rounded-full blur-2xl"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF8C00' fill-opacity='0.06'%3E%3Cpath d='M50 50m-20 0a20,20 0 1,1 40,0a20,20 0 1,1 -40,0 M30 30m-10 0a10,10 0 1,1 20,0a10,10 0 1,1 -20,0 M70 70m-8 0a8,8 0 1,1 16,0a8,8 0 1,1 -16,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Title with Enhanced Styling */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent drop-shadow-lg">
            Leadership
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
            Team
          </span>
        </h2>
        <div className="w-32 h-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full mx-auto shadow-lg"></div>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Meet the visionary leaders driving our mission with expertise and innovation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center relative z-10 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className={`team-card group relative overflow-hidden rounded-3xl bg-gradient-to-br ${member.bgGradient} backdrop-blur-xl transition-all duration-500 cursor-pointer border border-white/60 hover:border-white/80`}
            style={{
              background: `
                radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${member.glowColor}, transparent 50%),
                linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)
              `,
              boxShadow: `
                0 30px 60px -12px ${member.shadowColor},
                0 0 0 1px rgba(255,255,255,0.5),
                inset 0 1px 0 rgba(255,255,255,0.9)
              `,
            }}
          >
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(45deg, transparent, ${member.shadowColor}, transparent)`
              }}
            >
              <div className="w-full h-full bg-white/95 rounded-3xl"></div>
            </div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full duration-1200 ease-in-out"></div>
            </div>

            <div className="p-12 relative z-10">
              {/* Profile Image with Enhanced Styling */}
              <div className="w-48 h-48 mx-auto mb-8 relative">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.gradient} p-1`}>
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-44 h-44 object-cover rounded-full shadow-2xl"
                    />
                  </div>
                </div>
                
                {/* Floating ring effect */}
                <div className={`absolute -inset-2 rounded-full bg-gradient-to-r ${member.gradient} opacity-20 blur-md group-hover:opacity-30 transition-opacity duration-500`}></div>
              </div>

              {/* Name with gradient effect */}
              <h3 className="text-3xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                style={{
                  color: member.accentColor,
                  backgroundImage: `linear-gradient(45deg, ${member.gradient.split(' ').slice(1).join(' ')})`
                }}
              >
                {member.name}
              </h3>
              
              <div className={`inline-block px-4 py-2 rounded-xl bg-gradient-to-r ${member.gradient} text-white font-semibold text-lg mb-6 shadow-lg`}>
                {member.title}
              </div>
              
              <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300 max-w-md mx-auto">
                {member.desc}
              </p>

              {/* Decorative bottom accent */}
              <div className={`mt-8 h-1 w-0 group-hover:w-32 bg-gradient-to-r ${member.gradient} rounded-full transition-all duration-700 ease-out shadow-md mx-auto`}></div>

              {/* Social links placeholder */}
              <div className="mt-6 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a 
  href={member.linkedin} 
  target="_blank" 
  rel="noopener noreferrer"
  className={`w-10 h-10 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer`}
>
  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
</a>
                <a 
  href={`mailto:${member.email}`}
  className={`w-10 h-10 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer`}
>
  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
  </svg>
</a>
              </div>
            </div>

            {/* Corner accent */}
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${member.gradient} opacity-10 group-hover:opacity-20 rounded-bl-full transition-opacity duration-300`}></div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default EnhancedTeamSection;