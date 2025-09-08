import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Globe,
  Users,
  TrendingUp,
  Shield,
  Heart,
  Target,
  Lightbulb,
  Building2,
  CheckCircle,
  Star,
  MapPin,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Stat = {
  number: string;
  label: string;
  icon: LucideIcon;
};

type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
};

type TeamMember = {
  name: string;
  title: string;
  experience: string;
  specialization: string;
  desc: string;
  image: string;
  achievements: string[];
};

const AboutUsPage = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const storyRef = useRef<HTMLElement | null>(null);
  const valuesRef = useRef<HTMLElement | null>(null);
  const teamRef = useRef<HTMLElement | null>(null);
  const achievementsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Hero Animation
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      }
    );

    // Stats Counter Animation
    const statsCards = gsap.utils.toArray<HTMLDivElement>(".stat-card");
    gsap.fromTo(
      statsCards,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      }
    );

    // Story Section Animation
    gsap.fromTo(
      ".story-content",
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 75%",
        },
      }
    );

    // Values Cards Animation
    const valueCards = gsap.utils.toArray<HTMLDivElement>(".value-card");
    gsap.fromTo(
      valueCards,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 70%",
        },
      }
    );

    // Team Cards Hover Effects (typed)
    const teamCards = gsap.utils.toArray<HTMLDivElement>(".team-card");

    const onMouseMove = (card: HTMLDivElement) => (e: MouseEvent) => {
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
    };

    const onMouseLeave = (card: HTMLDivElement) => () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const onMouseEnter = (card: HTMLDivElement) => () => {
      gsap.to(card, {
        scale: 1.03,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    // Attach listeners with cleanup references
    const cleanup: Array<() => void> = [];

    teamCards.forEach((card) => {
      const move = onMouseMove(card);
      const leave = onMouseLeave(card);
      const enter = onMouseEnter(card);

      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      card.addEventListener("mouseenter", enter);

      cleanup.push(() => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
        card.removeEventListener("mouseenter", enter);
      });
    });

    // Achievements Animation
    const achievementItems = gsap.utils.toArray<HTMLDivElement>(".achievement-item");
    gsap.fromTo(
      achievementItems,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: achievementsRef.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      cleanup.forEach((fn) => fn());
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(statsCards);
      gsap.killTweensOf(valueCards);
      gsap.killTweensOf(teamCards);
      gsap.killTweensOf(achievementItems);
    };
  }, []);

  const stats: Stat[] = [
    { number: "30+", label: "Years of Experience", icon: Award },
    { number: "500+", label: "Companies Incorporated", icon: Building2 },
    { number: "15+", label: "Countries Served", icon: Globe },
    { number: "98%", label: "Client Satisfaction", icon: Star },
  ];

  const values: Value[] = [
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty and transparency in all our dealings.",
      icon: Shield,
      color: "#FF8C00",
    },
    {
      title: "Excellence",
      description:
        "We strive for perfection in every service we deliver, exceeding client expectations.",
      icon: Target,
      color: "#FFB400",
    },
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge solutions and creative approaches to complex challenges.",
      icon: Lightbulb,
      color: "#FF8C00",
    },
    {
      title: "Client-Centric",
      description:
        "Our clients' success is our priority, and we tailor solutions to their unique needs.",
      icon: Heart,
      color: "#FFB400",
    },
  ];

  const team: TeamMember[] = [
    {
      name: "CA Piyush Misra",
      title: "Founder & Director",
      experience: "30+ Years",
      specialization: "Audit, Finance & Taxation",
      desc: "A seasoned professional with extensive experience in cross-border taxation, audit, and strategic financial advisory. His leadership has guided numerous multinational corporations through complex regulatory landscapes.",
      image: "/img/CA Piyush Misra.png",
      achievements: ["Chartered Accountant", "International Tax Expert", "Business Strategy Consultant"],
    },
    {
      name: "CA Anuradha Singh",
      title: "Director",
      experience: "15+ Years",
      specialization: "Corporate Finance & Tax Planning",
      desc: "An expert in corporate finance and taxation with a proven track record in helping businesses optimize their financial structures. Her analytical approach ensures compliance while maximizing growth opportunities.",
      image: "/img/CA Anuradha Singh.png",
      achievements: ["Chartered Accountant", "Tax Planning Specialist", "Corporate Advisory Expert"],
    },
  ];

  const achievements: string[] = [
    "Premier consultancy firm in UAE with strong presence in India",
    "Successfully incorporated 500+ companies across multiple jurisdictions",
    "Served clients from 15+ countries worldwide",
    "Maintained 98% client retention rate",
    "Expert in UAE Free Zone, Mainland, and Offshore company formation",
    "Recognized for excellence in AML compliance and regulatory advisory",
    "Strategic partnerships with leading financial institutions",
    "Pioneered innovative tax planning solutions for international businesses",
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-screen w-full flex items-center justify-center text-gray-800 text-center px-6 md:px-20 overflow-hidden fade-in bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%), url('/public/img/about.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-gray-50/80 pointer-events-none z-0" />

        {/* Floating Elements */}
        <div className="absolute w-96 h-96 bg-[#FF8C00]/10 rounded-full blur-3xl top-20 left-10 z-0" />
        <div className="absolute w-72 h-72 bg-[#FFB400]/10 rounded-full blur-3xl bottom-20 right-10 z-0" />

        <div className="hero-content relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-gray-800 leading-tight">
            About <span className="text-[#FF8C00]">CAPMC</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Empowering businesses globally with expert consultancy, strategic insights, and unwavering commitment to excellence since our inception.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-[#FF8C00]/20 border border-[#FF8C00]/30 rounded-full text-[#FF8C00] font-semibold">
              UAE • India • Global
            </span>
            <span className="px-6 py-3 bg-[#FFB400]/20 border border-[#FFB400]/30 rounded-full text-[#FFB400] font-semibold">
              Trusted Since 1990s
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="relative py-20 px-6 md:px-24 bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="stat-card text-center p-8 rounded-2xl bg-white/80 border border-gray-200/60 backdrop-blur-sm shadow-xl"
              >
                <Icon size={40} className="mx-auto mb-4 text-[#FF8C00]" />
                <h3 className="text-4xl md:text-5xl font-extrabold text-[#FFB400] mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="relative py-24 px-6 md:px-24 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-gray-50/60 opacity-90 z-0 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="story-content">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-800">
              Our <span className="text-[#FFB400]">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded with a vision to bridge the gap between ambitious entrepreneurs and complex regulatory landscapes, CAPMC has evolved into a premier consultancy firm trusted by businesses worldwide.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Under the leadership of <strong>CA Piyush Misra</strong>, with over 30 years of expertise in audit, finance, and taxation, we have successfully guided startups, SMEs, and multinational corporations through their most critical business decisions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to excellence, combined with deep market knowledge and innovative solutions, has made us the preferred partner for businesses seeking to establish and grow their operations in the UAE and beyond.
            </p>
          </div>

          <div className="relative">
            <div className="absolute w-80 h-80 rounded-3xl bg-[#FF8C00]/10 blur-3xl z-0" />
            <div className="relative bg-white/60 backdrop-blur-sm border border-[#FF8C00]/30 rounded-3xl p-8 shadow-xl z-10">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-[#FF8C00]" size={24} />
                  <span className="text-gray-800 font-semibold">Dubai, UAE Headquarters</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Globe className="text-[#FFB400]" size={24} />
                  <span className="text-gray-800 font-semibold">Global Operations</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="text-[#FF8C00]" size={24} />
                  <span className="text-gray-800 font-semibold">Expert Team</span>
                </div>
                <div className="flex items-center space-x-4">
                  <TrendingUp className="text-[#FFB400]" size={24} />
                  <span className="text-gray-800 font-semibold">Proven Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="relative py-24 px-6 md:px-24 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800">
          Our <span className="text-[#FF8C00]">Core Values</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="value-card group relative overflow-hidden rounded-2xl border border-gray-200/60 backdrop-blur-sm bg-white/80 p-8 transition-all duration-500 shadow-xl"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-xl transition-transform duration-300"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <Icon size={32} style={{ color: value.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership Team */}
      <section ref={teamRef} className="relative py-24 px-6 md:px-24 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-gray-50/60 opacity-90 z-0 pointer-events-none" />

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#FFB400] relative z-10">
          Leadership Excellence
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="team-card relative group bg-white/80 rounded-3xl border border-gray-200/60 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#FFB400] shadow-lg">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-[#FFB400] mb-2">{member.name}</h3>
                    <p className="text-xl text-gray-800 font-semibold mb-1">{member.title}</p>
                    <p className="text-[#FF8C00] font-medium mb-2">
                      {member.experience} • {member.specialization}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">{member.desc}</p>

                    <div className="space-y-2">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center justify-center md:justify-start space-x-2">
                          <CheckCircle size={16} className="text-[#FF8C00]" />
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="relative py-24 px-6 md:px-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800">
            Our <span className="text-[#FF8C00]">Achievements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="achievement-item flex items-start space-x-4 p-6 rounded-xl bg-white/80 border border-gray-200/60 shadow-lg"
              >
                <CheckCircle size={24} className="text-[#FF8C00] flex-shrink-0 mt-1" />
                <p className="text-gray-600 leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-6 md:px-24 bg-gradient-to-r from-[#FF8C00] to-[#e67e00] text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Ready to Start Your Journey?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Partner with CAPMC and transform your business vision into reality with our expert guidance and comprehensive solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="bg-white text-[#FF8C00] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Get Started Today
          </a>
          <Link
            to="/services"
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#FF8C00] transition duration-300"
          >
            Explore Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;