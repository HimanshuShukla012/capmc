import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import EnhancedTrustIndicators from "../components/trustindecators";
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
  Phone,
  Mail,
  ArrowRight,
  Zap,
  Clock,
  ExternalLink,
  Play,
  Calendar,
  Briefcase,
  Trophy,
  BookOpen,
  Handshake,
  Eye,
  Compass
} from "lucide-react";

// Enhanced Team Section Component (keeping your existing team section)
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
            Excellence
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

const AboutUsPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeValue, setActiveValue] = useState(0);
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const milestonesRef = useRef(null);

  useEffect(() => {
    // Enhanced entrance animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0) scale(1)';
            }, index * 150);
          });
        }
      });
    }, observerOptions);

    [storyRef, valuesRef, milestonesRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    // Auto-advance values
    const valuesInterval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % 4);
    }, 4000);

    return () => {
      observer.disconnect();
      clearInterval(valuesInterval);
    };
  }, []);

  const stats = [
    { number: "30+", label: "Years of Excellence", icon: Award, color: "#3b82f6" },
    { number: "500+", label: "Companies Formed", icon: Building2, color: "#10b981" },
    { number: "15+", label: "Countries Served", icon: Globe, color: "#f59e0b" },
    { number: "99.9%", label: "Success Rate", icon: Star, color: "#ef4444" },
  ];

  const values = [
    {
      title: "Integrity & Trust",
      description: "We build lasting relationships through unwavering honesty, transparency, and ethical practices in every client interaction.",
      icon: Shield,
      color: "#3b82f6",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      features: ["Ethical Business Practices", "Transparent Communication", "Client Confidentiality", "Regulatory Compliance"]
    },
    {
      title: "Excellence & Innovation",
      description: "We deliver exceptional results through cutting-edge solutions, continuous improvement, and industry-leading expertise.",
      icon: Target,
      color: "#10b981",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      features: ["Premium Service Quality", "Innovative Solutions", "Continuous Learning", "Best Practices"]
    },
    {
      title: "Client Success Focus",
      description: "Your success is our mission. We provide personalized attention, strategic guidance, and comprehensive support.",
      icon: Heart,
      color: "#f59e0b",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      features: ["Dedicated Account Management", "24/7 Support", "Customized Solutions", "Long-term Partnership"]
    },
    {
      title: "Global Expertise",
      description: "Combining international standards with local market knowledge to deliver world-class business solutions.",
      icon: Globe,
      color: "#8b5cf6",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      features: ["International Standards", "Local Market Insights", "Cross-border Expertise", "Global Network"]
    }
  ];

  const milestones = [
    {
      year: "1990s",
      title: "Foundation & Early Growth",
      description: "Established with a vision to provide expert consultancy services in the emerging UAE market",
      icon: Calendar,
      color: "#3b82f6"
    },
    {
      year: "2000s",
      title: "Market Leadership",
      description: "Became a recognized leader in UAE business formation and financial advisory services",
      icon: Trophy,
      color: "#10b981"
    },
    {
      year: "2010s",
      title: "Digital Transformation",
      description: "Embraced technology and expanded services to include comprehensive digital solutions",
      icon: Zap,
      color: "#f59e0b"
    },
    {
      year: "2020s",
      title: "Global Expansion",
      description: "Extended operations across GCC and international markets with enhanced service portfolio",
      icon: Globe,
      color: "#8b5cf6"
    }
  ];

  const achievements = [
    {
      title: "Industry Recognition",
      description: "Awarded 'Best Business Consultancy' by UAE Chamber of Commerce",
      icon: Award,
      metric: "2023"
    },
    {
      title: "Client Satisfaction",
      description: "Maintained 99.9% client satisfaction rate across all service verticals",
      icon: Star,
      metric: "99.9%"
    },
    {
      title: "Success Stories",
      description: "Successfully incorporated 500+ companies with zero compliance issues",
      icon: CheckCircle,
      metric: "500+"
    },
    {
      title: "Market Presence",
      description: "Established strong presence in 15+ countries with local partnerships",
      icon: MapPin,
      metric: "15+"
    },
    {
      title: "Team Expertise",
      description: "Combined team experience of 100+ years in UAE business landscape",
      icon: Users,
      metric: "100+"
    },
    {
      title: "Innovation Leader",
      description: "Pioneered digital-first approach in traditional consultancy services",
      icon: Lightbulb,
      metric: "1st"
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-hidden">
      <NavBar />
      {/* Professional Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[80vh] w-full flex items-center justify-start text-left px-6 md:px-20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* Professional Overlay */}
        

        {/* Content */}
        <div className="z-10 max-w-6xl text-left">
        
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] leading-tight">
            Building Business Success
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Since the 1990s
            </span>
          </h1>
          
          
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-orange-400"
            >
              Our Story →
            </button>
            <button className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-slate-800 transition duration-300 backdrop-blur-sm">
              Meet Our Team
            </button>
          </div>

          {/* Key Metrics Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90 text-sm bg-white/9 backdrop-blur-lg rounded-lg p-3 border border-white/10">
                <stat.icon className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <div>
                  <div className="font-bold text-orange-400">{stat.number}</div>
                  <div className="text-xs text-white/100">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Bottom Line */}
        <div className="absolute bottom-10 w-full text-left  z-10">
          <span className="text-lg font-extrabold text-bold text-white/90 tracking-widest uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            Trusted by 500+ Companies | 15+ Countries
          </span>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        ref={storyRef}
        id="our-story"
        className="relative py-24 px-6 md:px-12 lg:px-24 bg-gray-50"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-green-100/40 to-blue-100/40 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="animate-on-scroll opacity-0 transform translate-y-8" style={{transition: 'all 0.8s ease-out'}}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
                <BookOpen className="w-4 h-4" />
                Our Journey
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
                <span className="block">Three Decades of</span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                  Excellence & Trust
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From humble beginnings to becoming the UAE's premier business consultancy, our story is one of unwavering commitment to client success.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-on-scroll opacity-0 transform translate-y-8" style={{transition: 'all 0.8s ease-out', transitionDelay: '200ms'}}>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Founded in the 1990s with a clear vision to bridge the gap between ambitious entrepreneurs and the complex regulatory landscape of the UAE, CAPMC began as a small consultancy with big dreams.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Under the visionary leadership of <strong className="text-orange-600">CA Piyush Misra</strong>, who brought over three decades of expertise in audit, finance, and taxation, we quickly established ourselves as trusted advisors to businesses of all sizes.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Today, we stand as a testament to the power of expertise, integrity, and unwavering commitment to client success, having helped over 500 companies establish and grow their presence in the UAE and beyond.
                </p>

                <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Our Vision</h4>
                    <p className="text-gray-600 text-sm">To be the Middle East's most trusted business partner, empowering entrepreneurs to build lasting success.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 transform translate-y-8" style={{transition: 'all 0.8s ease-out', transitionDelay: '400ms'}}>
              <div className="relative">
                <div className="absolute w-80 h-80 rounded-3xl bg-orange-200/20 blur-3xl z-0"></div>
                <div className="relative bg-white/70 backdrop-blur-sm border border-orange-200/50 rounded-3xl p-8 shadow-xl z-10">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <span className="text-gray-800 font-semibold">Dubai, UAE Headquarters</span>
                        <p className="text-gray-600 text-sm">Strategic location in the heart of business district</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                        <Globe className="text-white" size={20} />
                      </div>
                      <div>
                        <span className="text-gray-800 font-semibold">Global Operations</span>
                        <p className="text-gray-600 text-sm">Serving clients across 15+ countries</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <Users className="text-white" size={20} />
                      </div>
                      <div>
                        <span className="text-gray-800 font-semibold">Expert Team</span>
                        <p className="text-gray-600 text-sm">100+ years of combined experience</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                        <TrendingUp className="text-white" size={20} />
                      </div>
                      <div>
                        <span className="text-gray-800 font-semibold">Proven Growth</span>
                        <p className="text-gray-600 text-sm">99.9% success rate with all clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Milestones */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey Through Time</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div
                    key={index}
                    className="animate-on-scroll opacity-0 transform translate-y-8 relative p-6 rounded-2xl bg-white/80 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500"
                    style={{
                      transition: 'all 0.8s ease-out',
                      transitionDelay: `${index * 100 + 600}ms`
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${milestone.color}22` }}>
                        <Icon size={24} style={{ color: milestone.color }} />
                      </div>
                      <div className="text-2xl font-bold" style={{ color: milestone.color }}>
                        {milestone.year}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        ref={valuesRef}
        className="relative py-24 px-6 md:px-12 lg:px-24 bg-white"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-32 w-96 h-96 bg-gradient-to-r from-orange-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="animate-on-scroll opacity-0 transform translate-y-8" style={{transition: 'all 0.8s ease-out'}}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full text-sm font-medium text-orange-700 mb-6">
                <Compass className="w-4 h-4" />
                Our Core Values
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
                <span className="block">What Drives</span>
                <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Our Excellence
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The fundamental principles that guide every decision, every interaction, and every solution we deliver
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isActive = activeValue === index;
              
              return (
                <div
                  key={index}
                  className={`animate-on-scroll opacity-0 transform translate-y-8 group relative overflow-hidden rounded-3xl border-2 backdrop-blur-sm p-8 transition-all duration-700 cursor-pointer ${
                    isActive 
                      ? 'bg-white border-gray-300 shadow-2xl scale-105' 
                      : 'bg-white/60 border-gray-200 hover:border-gray-300 hover:bg-white/80'
                  }`}
                  style={{
                    transition: 'all 0.8s ease-out',
                    transitionDelay: `${index * 200}ms`,
                    boxShadow: isActive ? `0 25px 50px rgba(0,0,0,0.15)` : undefined
                  }}
                  onClick={() => setActiveValue(index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start space-x-6 mb-6">
                    <div
                      className={`flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg transition-all duration-300 ${
                        isActive ? 'scale-110' : ''
                      }`}
                      style={{ backgroundColor: `${value.color}15` }}
                    >
                      <Icon size={32} style={{ color: value.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{value.description}</p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className={`grid grid-cols-2 gap-2 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                    {value.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: value.color }}></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ backgroundColor: value.color }}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        ref={milestonesRef}
        className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="animate-on-scroll opacity-0 transform translate-y-8" style={{transition: 'all 0.8s ease-out'}}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full text-sm font-medium text-green-700 mb-6">
                <Trophy className="w-4 h-4" />
                Our Achievements
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
                <span className="block">Recognition &</span>
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Success Metrics
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The numbers and recognition that reflect our commitment to excellence and client success
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 transform translate-y-8 group relative bg-white p-8 rounded-3xl border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500"
                  style={{
                    transition: 'all 0.8s ease-out',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon size={28} className="text-blue-600" />
                    </div>
                    <div className="text-3xl font-black text-blue-600">
                      {achievement.metric}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <EnhancedTeamSection />

      
      <EnhancedTrustIndicators />
      <Footer />
    </div>
  );
};

export default AboutUsPage;