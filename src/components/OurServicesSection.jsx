import React, { useEffect, useRef, useState } from "react";
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
  Star,
  FileCheck,
  Phone,
  Mail,
  X,
} from "lucide-react";

const services = [
  {
    title: "Business Setup & Company Incorporation",
    description:
      "Complete support for Mainland, Free Zone, and Offshore company formation, licensing, and registration in UAE.",
    icon: Building2,
    number: "01",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    shadowColor: "rgba(59, 130, 246, 0.4)",
    glowColor: "rgba(59, 130, 246, 0.15)",
    bgGradient: "from-blue-50 to-indigo-50",
    textColor: "text-blue-600",
    timeline: "7-14 Days",
    price: "Starting from AED 15,000",
    detailedDesc: "Navigate the complexities of UAE business formation with our comprehensive incorporation services. From choosing the right jurisdiction to obtaining necessary licenses, we handle every aspect of your company setup with meticulous attention to regulatory compliance.",
    features: [
      "Mainland Company Formation with 100% ownership",
      "Free Zone Setup with tax benefits",
      "Offshore Company Registration",
      "Business License Processing & Renewal",
      "Corporate Banking Assistance",
      "Visa & Immigration Support"
    ],
    benefits: [
      "100% Foreign Ownership Options",
      "Tax-Efficient Business Structures",
      "Quick 14-Day Setup Process",
      "Full Regulatory Compliance",
      "Ongoing Support & Maintenance"
    ],
    deliverables: [
      "Company Registration Certificate",
      "Trade License",
      "Memorandum of Association",
      "Bank Account Opening",
      "Visa Processing"
    ]
  },
  {
    title: "Investment Consultancy",
    description:
      "Strategic advice on safe, compliant, and profitable investment opportunities in the UAE and globally.",
    icon: Banknote,
    number: "02",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    shadowColor: "rgba(16, 185, 129, 0.4)",
    glowColor: "rgba(16, 185, 129, 0.15)",
    bgGradient: "from-emerald-50 to-teal-50",
    textColor: "text-emerald-600",
    timeline: "Ongoing",
    price: "Custom Packages Available",
    detailedDesc: "Make informed investment decisions with our expert guidance backed by 30+ years of market experience. We analyze market trends, assess risks, and identify opportunities that align with your financial goals and risk tolerance.",
    features: [
      "Investment Portfolio Analysis & Optimization",
      "Comprehensive Risk Assessment",
      "Market Research & Trend Analysis",
      "Due Diligence Services",
      "Investment Structure Planning",
      "Cross-border Investment Advisory"
    ],
    benefits: [
      "Maximized Investment Returns",
      "Professional Risk Mitigation",
      "Diversified Portfolio Management",
      "Regulatory Compliance Assurance",
      "Real-time Market Updates"
    ],
    deliverables: [
      "Investment Strategy Report",
      "Risk Assessment Analysis",
      "Portfolio Recommendations",
      "Market Intelligence Reports",
      "Ongoing Advisory Support"
    ]
  },
  {
    title: "Compliance & Taxation Services",
    description:
      "VAT, Corporate Tax, ESR compliance, and tax planning tailored to UAE regulations and business needs.",
    icon: FileText,
    number: "03",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    shadowColor: "rgba(245, 158, 11, 0.4)",
    glowColor: "rgba(245, 158, 11, 0.15)",
    bgGradient: "from-orange-50 to-amber-50",
    textColor: "text-orange-600",
    timeline: "Monthly/Quarterly",
    price: "From AED 2,500/month",
    detailedDesc: "Stay ahead of UAE's evolving tax landscape with our comprehensive taxation services. We ensure your business meets all regulatory requirements while optimizing your tax position and maintaining full compliance.",
    features: [
      "VAT Registration & Monthly Filing",
      "Corporate Tax Advisory & Compliance",
      "ESR (Economic Substance Regulations)",
      "Transfer Pricing Documentation",
      "Strategic Tax Planning & Optimization",
      "Regular Updates & Training"
    ],
    benefits: [
      "Zero Penalty Risk",
      "Optimized Tax Efficiency",
      "Complete Peace of Mind",
      "Expert Regulatory Guidance",
      "Proactive Compliance Management"
    ],
    deliverables: [
      "VAT Returns & Filings",
      "Corporate Tax Returns",
      "ESR Compliance Reports",
      "Tax Planning Strategies",
      "Compliance Certificates"
    ]
  },
  {
    title: "Chief Financial Advisor (CFA) Services",
    description:
      "Virtual CFO services for startups and SMEs to drive strategic financial growth and decision-making.",
    icon: BriefcaseBusiness,
    number: "04",
    gradient: "from-red-500 via-rose-500 to-pink-500",
    shadowColor: "rgba(239, 68, 68, 0.4)",
    glowColor: "rgba(239, 68, 68, 0.15)",
    bgGradient: "from-red-50 to-rose-50",
    textColor: "text-red-600",
    timeline: "Monthly Retainer",
    price: "From AED 8,000/month",
    detailedDesc: "Access C-level financial expertise without the full-time cost. Our virtual CFO services provide strategic financial leadership, advanced analytics, and growth-focused financial management.",
    features: [
      "Strategic Financial Planning & Forecasting",
      "Advanced Cash Flow Management",
      "Budget Planning & Variance Analysis",
      "Investment Analysis & ROI Tracking",
      "KPI Development & Performance Metrics",
      "Board Reporting & Investor Relations"
    ],
    benefits: [
      "Strategic Financial Leadership",
      "Cost-Effective C-Level Expertise",
      "Data-Driven Decision Making",
      "Accelerated Business Growth",
      "Enhanced Investor Confidence"
    ],
    deliverables: [
      "Monthly Financial Reports",
      "Strategic Planning Documents",
      "Cash Flow Forecasts",
      "Board Presentation Materials",
      "KPI Dashboards"
    ]
  },
  {
    title: "Anti–Money Laundering (AML) Services",
    description:
      "AML policy development, KYC checks, and full regulatory compliance advisory tailored to UAE laws.",
    icon: ShieldCheck,
    number: "05",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    shadowColor: "rgba(139, 92, 246, 0.4)",
    glowColor: "rgba(139, 92, 246, 0.15)",
    bgGradient: "from-violet-50 to-purple-50",
    textColor: "text-violet-600",
    timeline: "One-time + Ongoing",
    price: "From AED 25,000",
    detailedDesc: "Protect your business with robust AML compliance frameworks. We develop comprehensive policies, implement monitoring systems, and ensure full regulatory compliance while mitigating operational risks.",
    features: [
      "AML Policy Development & Implementation",
      "KYC Procedures & Documentation",
      "Transaction Monitoring Systems",
      "Suspicious Activity Reporting (SAR)",
      "Staff Training & Awareness Programs",
      "Regulatory Audit Support"
    ],
    benefits: [
      "Full Regulatory Compliance",
      "Risk Mitigation & Protection",
      "Enhanced Business Reputation",
      "Operational Security",
      "Regulatory Audit Readiness"
    ],
    deliverables: [
      "AML Policy Manual",
      "KYC Procedures",
      "Training Materials",
      "Monitoring Systems",
      "Compliance Certificates"
    ]
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Accounting & Bookkeeping, audit-ready reports, and financial record management using trusted software.",
    icon: BookOpenCheck,
    number: "06",
    gradient: "from-slate-500 via-gray-500 to-zinc-500",
    shadowColor: "rgba(100, 116, 139, 0.4)",
    glowColor: "rgba(100, 116, 139, 0.15)",
    bgGradient: "from-slate-50 to-gray-50",
    textColor: "text-slate-600",
    timeline: "Monthly",
    price: "From AED 1,500/month",
    detailedDesc: "Maintain accurate financial records with our professional accounting services. From daily bookkeeping to comprehensive financial reporting, we ensure your books are always audit-ready and compliant.",
    features: [
      "Daily Bookkeeping & Transaction Recording",
      "Financial Statement Preparation",
      "Management Reporting & Analysis",
      "Audit Preparation & Support",
      "Payroll Processing & Management",
      "Cloud-based Accounting Systems"
    ],
    benefits: [
      "100% Accurate Financial Records",
      "Time & Cost Savings",
      "Always Audit-Ready",
      "Real-time Financial Reporting",
      "Regulatory Compliance"
    ],
    deliverables: [
      "Monthly Financial Statements",
      "Management Reports",
      "Audit Files",
      "Payroll Reports",
      "Tax-Ready Records"
    ]
  },
  {
    title: "Market Research",
    description:
      "Feasibility studies, competitor analysis, and market intelligence to support strategic decisions.",
    icon: BarChart2,
    number: "07",
    gradient: "from-lime-500 via-green-500 to-emerald-500",
    shadowColor: "rgba(132, 204, 22, 0.4)",
    glowColor: "rgba(132, 204, 22, 0.15)",
    bgGradient: "from-lime-50 to-green-50",
    textColor: "text-green-600",
    timeline: "4-6 Weeks",
    price: "From AED 15,000",
    detailedDesc: "Make data-driven business decisions with our comprehensive market research services. We provide deep market insights, competitive analysis, and strategic recommendations to maximize your business success.",
    features: [
      "Market Feasibility Studies",
      "Comprehensive Competitor Analysis",
      "Consumer Behavior Research",
      "Industry Trend Analysis",
      "Market Entry Strategy Development",
      "Custom Research Solutions"
    ],
    benefits: [
      "Informed Strategic Decisions",
      "Competitive Market Advantage",
      "Risk Reduction & Mitigation",
      "Market Opportunity Identification",
      "ROI Optimization"
    ],
    deliverables: [
      "Market Analysis Report",
      "Competitive Intelligence",
      "Feasibility Study",
      "Strategic Recommendations",
      "Market Entry Plan"
    ]
  },
  {
    title: "Corporate Skill Development",
    description:
      "Professional training on UAE corporate laws, compliance, finance, and international business operations.",
    icon: Lightbulb,
    number: "08",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    shadowColor: "rgba(234, 179, 8, 0.4)",
    glowColor: "rgba(234, 179, 8, 0.15)",
    bgGradient: "from-yellow-50 to-orange-50",
    textColor: "text-yellow-600",
    timeline: "1-2 Days",
    price: "From AED 5,000/session",
    detailedDesc: "Empower your team with essential knowledge and skills through our comprehensive training programs. We cover critical areas of UAE business operations, ensuring your staff stays current with regulations and best practices.",
    features: [
      "UAE Corporate Law Training",
      "Compliance & Regulatory Updates",
      "Financial Management Workshops",
      "International Business Operations",
      "Leadership Development Programs",
      "Customized Training Solutions"
    ],
    benefits: [
      "Enhanced Team Capabilities",
      "Improved Regulatory Awareness",
      "Increased Performance & Productivity",
      "Reduced Compliance Risk",
      "Professional Certification"
    ],
    deliverables: [
      "Training Materials",
      "Certification Courses",
      "Workshop Sessions",
      "Assessment Reports",
      "Ongoing Support"
    ]
  },
];

const EnhancedOurServicesSection = () => {
  const sectionRef = useRef(null);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedService, setSelectedService] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    // Enhanced card entrance animation
    cards.forEach((card, index) => {
      // Initial state
      card.style.opacity = '0';
      card.style.transform = 'translateY(60px) scale(0.9)';
      
      // Animate in with stagger
      setTimeout(() => {
        card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, index * 100);
    });

    // Enhanced card lift interactions (removing tilt)
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease';
        card.style.transform = 'translateY(-20px) scale(1.02)';
      });

      card.addEventListener("mouseleave", () => {
        card.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease';
        card.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Floating animation for background elements
    const floatingOrbs = document.querySelectorAll(".floating-orb");
    floatingOrbs.forEach((orb, index) => {
      const animate = () => {
        const randomX = (Math.random() - 0.5) * 40;
        const randomY = (Math.random() - 0.5) * 50;
        const randomRotation = Math.random() * 360;
        const duration = 4000 + Math.random() * 4000;
        
        orb.style.transition = `transform ${duration}ms ease-in-out`;
        orb.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
        
        setTimeout(animate, duration);
      };
      
      setTimeout(animate, index * 600);
    });

  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-32 px-6 md:px-24 z-10 overflow-hidden"
    >
      {/* Professional Background Graphic */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Corporate geometric pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="corporate-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
              </pattern>
              <pattern id="hexagons" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,10 60,25 60,55 40,70 20,55 20,25" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#corporate-grid)"/>
            <rect width="100%" height="100%" fill="url(#hexagons)"/>
          </svg>
        </div>

        {/* Abstract corporate shapes */}
        <div className="absolute top-20 left-20 w-96 h-96 opacity-5">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path d="M200,50 L350,150 L300,300 L100,300 L50,150 Z" fill="currentColor" className="animate-pulse"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 right-20 w-80 h-80 opacity-5">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="4" className="animate-spin" style={{animationDuration: '30s'}}/>
            <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin" style={{animationDuration: '20s'}}/>
            <circle cx="200" cy="200" r="50" fill="currentColor" className="animate-pulse"/>
          </svg>
        </div>

        {/* Corporate building silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 opacity-5">
          <svg width="100%" height="200" viewBox="0 0 1200 200" className="w-full">
            <rect x="50" y="80" width="60" height="120" fill="currentColor"/>
            <rect x="130" y="60" width="40" height="140" fill="currentColor"/>
            <rect x="190" y="100" width="80" height="100" fill="currentColor"/>
            <rect x="290" y="40" width="50" height="160" fill="currentColor"/>
            <rect x="360" y="90" width="70" height="110" fill="currentColor"/>
            <rect x="450" y="70" width="45" height="130" fill="currentColor"/>
            <rect x="520" y="50" width="90" height="150" fill="currentColor"/>
            <rect x="630" y="85" width="55" height="115" fill="currentColor"/>
            <rect x="710" y="65" width="75" height="135" fill="currentColor"/>
            <rect x="810" y="95" width="60" height="105" fill="currentColor"/>
            <rect x="890" y="75" width="80" height="125" fill="currentColor"/>
            <rect x="990" y="55" width="50" height="145" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb absolute top-20 left-16 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl"></div>
        <div className="floating-orb absolute top-60 right-20 w-56 h-56 bg-gradient-to-r from-emerald-400/25 to-teal-400/25 rounded-full blur-xl"></div>
        <div className="floating-orb absolute bottom-32 left-1/3 w-96 h-96 bg-gradient-to-r from-orange-400/15 to-amber-400/15 rounded-full blur-3xl"></div>
        <div className="floating-orb absolute bottom-20 right-16 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-violet-400/20 rounded-full blur-xl"></div>
        <div className="floating-orb absolute top-1/2 left-10 w-48 h-48 bg-gradient-to-r from-rose-400/30 to-pink-400/30 rounded-full blur-lg"></div>
      </div>

      {/* Title with Enhanced Styling */}
      <div className="relative z-10 text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent drop-shadow-lg">
            Our
          </span>{" "}
          <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
            Professional
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
            Services
          </span>
        </h2>
        <div className="w-40 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-full mx-auto shadow-lg"></div>
        <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Comprehensive business solutions tailored for success in the UAE market
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className={`service-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-xl transition-all duration-500 transform cursor-pointer border border-white/60 hover:border-white/80 hover:shadow-2xl`}
              style={{
                boxShadow: `
                  0 10px 30px -5px rgba(0,0,0,0.3),
                  0 0 0 1px rgba(255,255,255,0.5),
                  inset 0 1px 0 rgba(255,255,255,0.9)
                `,
              }}
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, transparent, ${service.shadowColor}, transparent)`
                }}
              >
                <div className="w-full h-full bg-white/95 rounded-3xl"></div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full duration-1000 ease-in-out"></div>
              </div>

              <div className="p-8 relative z-10">
                {/* Service Number Badge */}
                <div className="absolute top-6 right-6 flex items-center justify-center w-14 h-14 rounded-2xl text-white font-bold text-lg shadow-xl border-2 border-white/30"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradient.split(' ').slice(1).join(' ')})`
                  }}
                >
                  <span className="relative z-10">{service.number}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-2xl"></div>
                </div>

                {/* Icon with enhanced styling */}
                <div className={`mb-6 relative inline-block p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}>
                  <Icon size={36} className="text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-2xl"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r opacity-75 blur-sm rounded-2xl"
                    style={{
                      background: `linear-gradient(45deg, ${service.gradient.split(' ').slice(1).join(' ')})`
                    }}
                  ></div>
                </div>

                <h3 className={`text-xl font-bold mb-4 text-gray-800 group-hover:${service.textColor} transition-all duration-300 leading-tight`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6 min-h-[90px]">
                  {service.description}
                </p>

                {/* Enhanced CTA Button */}
                <div className="mt-auto">
                  <button
                    onClick={() => {
                      setSelectedService(i);
                      setShowServiceModal(true);
                    }}
                    className={`text-sm font-semibold px-4 py-2 rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm`}
                  >
                    <span className="flex items-center gap-2">
                      Learn More
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>

                {/* Decorative bottom accent */}
                <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.gradient} rounded-full transition-all duration-700 ease-out shadow-md`}></div>

                {/* Progress indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-3xl overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-1000 delay-200 ease-out`}
                  ></div>
                </div>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.gradient} opacity-10 group-hover:opacity-20 rounded-bl-full transition-opacity duration-300`}></div>

              {/* Floating particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
              </div>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl bg-gradient-to-r ${service.gradient}`}></div>
            </div>
          );
        })}
      </div>
{/* Service Modal */}
      {showServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative p-8">
              <button
                onClick={() => setShowServiceModal(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>

              {/* Modal Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${services[selectedService].gradient} flex items-center justify-center shadow-lg`}>
                      {React.createElement(services[selectedService].icon, {
                        size: 32,
                        className: "text-white"
                      })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{services[selectedService].title}</h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm text-gray-500">{services[selectedService].timeline}</span>
                        <span className="text-lg font-bold text-gray-900">{services[selectedService].price}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {services[selectedService].detailedDesc}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {services[selectedService].features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {services[selectedService].benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Star size={18} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Deliverables</h4>
                    <ul className="space-y-2">
                      {services[selectedService].deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <FileCheck size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Ready to Get Started?</h4>
                    <p className="text-gray-600 mb-4">Contact our experts for a personalized consultation.</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
  href="tel:+971529283063"
  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
>
  <Phone size={18} />
  Call Now
</a>
                      <a 
  href="mailto:info@capmc.ae"
  className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
>
  <Mail size={18} />
  Email Us
</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default EnhancedOurServicesSection;