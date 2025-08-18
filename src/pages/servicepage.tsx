import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import NavBar from "../components/Navbar";
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
  CheckCircle,
  ArrowRight,
  Users,
  Globe,
  TrendingUp,
  Calculator,
  FileCheck,
  Building,
  MapPin,
  Award,
  Zap,
  Target,
  Clock
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);
  const [selectedService, setSelectedService] = useState(0);

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

    // Services Cards Animation
    const serviceCards = gsap.utils.toArray(".service-card");
    gsap.fromTo(
      serviceCards,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%",
        },
      }
    );

    // Process Steps Animation
    const processSteps = gsap.utils.toArray(".process-step");
    gsap.fromTo(
      processSteps,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 75%",
        },
      }
    );

    // Benefits Animation
    const benefitItems = gsap.utils.toArray(".benefit-item");
    gsap.fromTo(
      benefitItems,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
      }
    );

    // Service Cards Hover Effects
    serviceCards.forEach((card) => {
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
          scale: 1.02,
          duration: 0.4,
          ease: "power3.out",
        });
      });
    });
  }, []);

  const services = [
    {
      title: "Business Setup & Company Incorporation",
      shortTitle: "Business Setup",
      description: "Complete support for Mainland, Free Zone, and Offshore company formation, licensing, and registration in UAE.",
      detailedDesc: "Navigate the complexities of UAE business formation with our comprehensive incorporation services. From choosing the right jurisdiction to obtaining necessary licenses, we handle every aspect of your company setup.",
      icon: Building2,
      number: "01",
      color: "#00BFA6",
      features: [
        "Mainland Company Formation",
        "Free Zone Setup",
        "Offshore Company Registration",
        "Business License Processing",
        "Trade License Renewal",
        "Corporate Banking Assistance"
      ],
      benefits: [
        "100% Foreign Ownership Options",
        "Tax-Efficient Structures",
        "Quick Setup Process",
        "Regulatory Compliance"
      ]
    },
    {
      title: "Investment Consultancy",
      shortTitle: "Investment Advisory",
      description: "Strategic advice on safe, compliant, and profitable investment opportunities in the UAE and globally.",
      detailedDesc: "Make informed investment decisions with our expert guidance. We analyze market trends, assess risks, and identify opportunities that align with your financial goals and risk tolerance.",
      icon: Banknote,
      number: "02",
      color: "#FFC72C",
      features: [
        "Investment Portfolio Analysis",
        "Risk Assessment & Management",
        "Market Research & Analysis",
        "Due Diligence Services",
        "Investment Structure Planning",
        "Cross-border Investment Advisory"
      ],
      benefits: [
        "Maximized Returns",
        "Risk Mitigation",
        "Diversified Portfolio",
        "Regulatory Compliance"
      ]
    },
    {
      title: "Compliance & Taxation Services",
      shortTitle: "Tax & Compliance",
      description: "VAT, Corporate Tax, ESR compliance, and tax planning tailored to UAE regulations and business needs.",
      detailedDesc: "Stay compliant with UAE's evolving tax landscape. Our comprehensive taxation services ensure your business meets all regulatory requirements while optimizing your tax position.",
      icon: FileText,
      number: "03",
      color: "#00BFA6",
      features: [
        "VAT Registration & Filing",
        "Corporate Tax Advisory",
        "ESR Compliance",
        "Transfer Pricing Documentation",
        "Tax Planning & Optimization",
        "Regulatory Updates & Training"
      ],
      benefits: [
        "Penalty Avoidance",
        "Tax Optimization",
        "Regulatory Peace of Mind",
        "Expert Guidance"
      ]
    },
    {
      title: "Chief Financial Advisor (CFA) Services",
      shortTitle: "CFO Services",
      description: "Virtual CFO services for startups and SMEs to drive strategic financial growth and decision-making.",
      detailedDesc: "Access C-level financial expertise without the full-time cost. Our virtual CFO services provide strategic financial leadership to accelerate your business growth.",
      icon: BriefcaseBusiness,
      number: "04",
      color: "#FFC72C",
      features: [
        "Financial Strategy Development",
        "Cash Flow Management",
        "Budget Planning & Forecasting",
        "Investment Analysis",
        "Performance Metrics & KPIs",
        "Board Reporting & Presentations"
      ],
      benefits: [
        "Strategic Financial Leadership",
        "Cost-Effective Expertise",
        "Data-Driven Decisions",
        "Growth Acceleration"
      ]
    },
    {
      title: "Anti-Money Laundering (AML) Services",
      shortTitle: "AML Compliance",
      description: "AML policy development, KYC checks, and full regulatory compliance advisory tailored to UAE laws.",
      detailedDesc: "Protect your business with robust AML compliance frameworks. We develop comprehensive policies and procedures to ensure full regulatory compliance and risk mitigation.",
      icon: ShieldCheck,
      number: "05",
      color: "#00BFA6",
      features: [
        "AML Policy Development",
        "KYC Procedures Implementation",
        "Transaction Monitoring Systems",
        "Suspicious Activity Reporting",
        "Staff Training & Awareness",
        "Regulatory Audit Support"
      ],
      benefits: [
        "Regulatory Compliance",
        "Risk Mitigation",
        "Reputation Protection",
        "Operational Security"
      ]
    },
    {
      title: "Accounting & Bookkeeping",
      shortTitle: "Accounting Services",
      description: "Reliable bookkeeping, audit-ready reports, and financial record management using trusted software.",
      detailedDesc: "Maintain accurate financial records with our professional accounting services. From daily bookkeeping to comprehensive financial reporting, we ensure your books are always audit-ready.",
      icon: BookOpenCheck,
      number: "06",
      color: "#FFC72C",
      features: [
        "Daily Bookkeeping",
        "Financial Statement Preparation",
        "Management Reporting",
        "Audit Preparation & Support",
        "Payroll Processing",
        "Cloud-based Accounting Systems"
      ],
      benefits: [
        "Accurate Financial Records",
        "Time & Cost Savings",
        "Audit Readiness",
        "Real-time Reporting"
      ]
    },
    {
      title: "Market Research",
      shortTitle: "Market Intelligence",
      description: "Feasibility studies, competitor analysis, and market intelligence to support strategic decisions.",
      detailedDesc: "Make data-driven business decisions with our comprehensive market research services. We provide insights that help you understand market dynamics, identify opportunities, and mitigate risks.",
      icon: BarChart2,
      number: "07",
      color: "#00BFA6",
      features: [
        "Market Feasibility Studies",
        "Competitor Analysis",
        "Consumer Behavior Research",
        "Industry Trend Analysis",
        "Market Entry Strategies",
        "Custom Research Solutions"
      ],
      benefits: [
        "Informed Decision Making",
        "Competitive Advantage",
        "Risk Reduction",
        "Market Opportunities"
      ]
    },
    {
      title: "Corporate Skill Development",
      shortTitle: "Training & Development",
      description: "Professional training on UAE corporate laws, compliance, finance, and international business operations.",
      detailedDesc: "Empower your team with essential knowledge and skills. Our training programs cover critical areas of UAE business operations, ensuring your staff stays current with regulations and best practices.",
      icon: Lightbulb,
      number: "08",
      color: "#FFC72C",
      features: [
        "UAE Corporate Law Training",
        "Compliance & Regulatory Updates",
        "Financial Management Workshops",
        "International Business Operations",
        "Leadership Development",
        "Custom Training Programs"
      ],
      benefits: [
        "Enhanced Team Capabilities",
        "Regulatory Awareness",
        "Improved Performance",
        "Reduced Compliance Risk"
      ]
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive discussion of your business needs and objectives",
      icon: Users,
      color: "#00BFA6"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Customized solution design tailored to your specific requirements",
      icon: Target,
      color: "#FFC72C"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Efficient execution with regular progress updates and milestones",
      icon: Zap,
      color: "#00BFA6"
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous monitoring and support to ensure long-term success",
      icon: Clock,
      color: "#FFC72C"
    }
  ];

  const benefits = [
    {
      title: "Expert Knowledge",
      description: "30+ years of combined experience in UAE regulations",
      icon: Award,
      color: "#00BFA6"
    },
    {
      title: "Comprehensive Solutions",
      description: "End-to-end services covering all aspects of business needs",
      icon: CheckCircle,
      color: "#FFC72C"
    },
    {
      title: "Global Reach",
      description: "Services across UAE, India, and international markets",
      icon: Globe,
      color: "#00BFA6"
    },
    {
      title: "Proven Results",
      description: "500+ successful company formations and growing",
      icon: TrendingUp,
      color: "#FFC72C"
    },
    {
      title: "Cost Effective",
      description: "Competitive pricing with transparent fee structure",
      icon: Calculator,
      color: "#00BFA6"
    },
    {
      title: "Regulatory Compliance",
      description: "Always up-to-date with latest regulations and requirements",
      icon: FileCheck,
      color: "#FFC72C"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#000D1A] via-[#001F33] to-[#000814] text-white min-h-screen">
        <NavBar />

      {/* Hero Section */}
      
      <section
      className="relative h-screen w-full flex items-center justify-center text-white text-center px-6 md:px-20 overflow-hidden fade-in bg-cover bg-center"
      style={{
        backgroundImage: "url('/public/img/services.jpg')",
      }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F33] via-[#000f1d] to-[#000814] opacity-90 pointer-events-none z-0" />
        
        {/* Floating Elements */}
        <div className="absolute w-96 h-96 bg-[#00BFA6]/10 rounded-full blur-3xl top-20 left-10 z-0" />
        <div className="absolute w-72 h-72 bg-[#FFC72C]/10 rounded-full blur-3xl bottom-20 right-10 z-0" />
        
        <div className="hero-content relative z-10 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white leading-tight">
            Our <span className="text-[#00BFA6]">Professional</span><br />
            <span className="text-[#FFC72C]">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            Comprehensive business solutions designed to accelerate your growth, ensure compliance, and maximize success in the UAE and global markets.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#services"
              className="bg-[#00BFA6] text-white font-bold px-8 py-4 rounded-full hover:bg-[#009982] transition duration-300 shadow-lg flex items-center space-x-2"
            >
              <span>Explore Services</span>
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="border-2 border-[#FFC72C] text-[#FFC72C] font-bold px-8 py-4 rounded-full hover:bg-[#FFC72C] hover:text-black transition duration-300"
            >
              Get Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        ref={servicesRef}
        id="services"
        className="relative py-24 px-6 md:px-24 bg-[#000814]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F33] via-[#00121d] to-[#000814] opacity-90 z-0 pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-20 tracking-tight">
            Complete <span className="text-[#00BFA6]">Business Solutions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="service-card group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md bg-[#0B1A24]/50 shadow-xl transition-all duration-500 cursor-pointer"
                  style={{
                    background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), ${service.color}22, transparent 40%)`,
                  }}
                  onClick={() => setSelectedService(i)}
                >
                  <div className="absolute inset-0 pointer-events-none z-0 transition duration-300 group-hover:opacity-100 opacity-0 bg-[radial-gradient(circle_at_var(--x,var(--y)),rgba(255,255,255,0.05),transparent)]" />

                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 animate-swipe-light" />
                  </div>

                  <div className="p-6 relative z-10">
                    <div
                      className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold border border-white/20 rounded-full"
                      style={{ color: service.color }}
                    >
                      {service.number}
                    </div>

                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-transform duration-300"
                      style={{ backgroundColor: `${service.color}22` }}
                    >
                      <Icon size={28} style={{ color: service.color }} />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-white leading-tight">
                      {service.shortTitle}
                    </h3>

                    <p className="text-sm text-gray-300 leading-relaxed mb-4 min-h-[60px]">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <button
  onClick={() => {
    setSelectedService(i);
    document
      .getElementById("service-detail-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="text-sm font-semibold inline-flex items-center space-x-1 transition duration-300 hover:underline"
  style={{ color: service.color }}
>
  <span>Learn More</span>
  <ArrowRight size={14} />
</button>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Detail Modal/Section */}
      <section 
      id="service-detail-section"
      className="relative py-20 px-6 md:px-24 bg-[#000D1A]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F33] via-[#000f1d] to-[#000814] opacity-90 pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Service Selector */}
            <div className="bg-[#001f33]/50 rounded-2xl border border-white/10 p-6">
              <h4 className="text-2xl font-bold text-white mb-6">All Services</h4>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                      selectedService === idx
                        ? 'border-white/30 bg-white/5'
                        : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                    }`}
                    onClick={() => setSelectedService(idx)}
                  >
                    <div className="flex items-center space-x-3">
                      {React.createElement(service.icon, {
                        size: 20,
                        style: { color: service.color }
                      })}
                      <span className="text-white font-medium text-sm">{service.shortTitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Service Details */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-xl"
                  style={{ backgroundColor: `${services[selectedService].color}22` }}
                >
                  {React.createElement(services[selectedService].icon, {
                    size: 32,
                    style: { color: services[selectedService].color }
                  })}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {services[selectedService].title}
                  </h3>
                  <span
                    className="text-sm font-semibold px-3 py-1 rounded-full border"
                    style={{
                      color: services[selectedService].color,
                      borderColor: `${services[selectedService].color}44`
                    }}
                  >
                    {services[selectedService].number}
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {services[selectedService].detailedDesc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {services[selectedService].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle
                          size={18}
                          className="flex-shrink-0 mt-1"
                          style={{ color: services[selectedService].color }}
                        />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Benefits</h4>
                  <ul className="space-y-3">
                    {services[selectedService].benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <TrendingUp
                          size={18}
                          className="flex-shrink-0 mt-1"
                          style={{ color: services[selectedService].color }}
                        />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        ref={processRef}
        className="relative py-24 px-6 md:px-24 bg-[#000814]"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white">
          Our <span className="text-[#FFC72C]">Process</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="process-step text-center relative"
              >
                <div className="relative mb-6">
                  <div
                    className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                    style={{ backgroundColor: `${step.color}22`, border: `2px solid ${step.color}44` }}
                  >
                    <Icon size={32} style={{ color: step.color }} />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: step.color, color: '#000' }}
                  >
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={benefitsRef}
        className="relative py-24 px-6 md:px-24 bg-[#000D1A]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F33] via-[#00121d] to-[#000814] opacity-90 z-0 pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white">
            Why Choose <span className="text-[#00BFA6]">CAPMC</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="benefit-item text-center p-6 rounded-2xl bg-[#001f33]/30 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div
                    className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${benefit.color}22` }}
                  >
                    <Icon size={28} style={{ color: benefit.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="relative py-20 px-6 md:px-24 bg-gradient-to-r from-[#00BFA6] to-[#009982] text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with CAPMC and experience the difference that expert guidance and comprehensive solutions can make for your business success.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#contact"
              className="bg-white text-[#00BFA6] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight size={20} />
            </a>
            <a
              href="#consultation"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#00BFA6] transition duration-300"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;