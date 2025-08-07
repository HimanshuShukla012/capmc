import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "CA Piyush Misra",
    title: "Founder & Director",
    desc:
      "With 30+ years of experience in audit, finance, and taxation, he brings credibility, strategic clarity, and global business insight.",
    image: "/img/CA Piyush Misra.png",
  },
  {
    name: "CA Anuradha Singh",
    title: "Director",
    desc:
      "Expert in taxation and corporate finance, she offers sharp financial advisory with a client-centric approach.",
    image: "/img/CA Anuradha Singh.png",
  },
];

const TeamSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".team-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.2,
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
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#000D1A] text-white py-24 px-6 md:px-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#001F33] via-[#00121d] to-[#000814] opacity-90 z-0 pointer-events-none" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#FFC72C] relative z-10">
        Leadership Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center relative z-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="team-card relative group bg-[#001f33] p-10 rounded-3xl border border-white/10 shadow-[0_0_20px_rgba(255,199,44,0.05)] hover:shadow-[0_0_30px_rgba(255,199,44,0.15)] transition-all duration-500"
            style={{
              background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), #FFC72C11, transparent 40%)`,
            }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 animate-swipe-light" />
            </div>

            <div className="w-40 h-40 mx-auto mb-6 relative z-10">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-full border-4 border-[#FFC72C] shadow-md"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#FFC72C] relative z-10">{member.name}</h3>
            <p className="text-gray-300 font-medium relative z-10">{member.title}</p>
            <p className="mt-3 text-sm text-gray-400 max-w-md mx-auto relative z-10">
              {member.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;