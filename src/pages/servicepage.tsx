import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
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
  Award,
  Zap,
  Target,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  Play,
  ChevronDown,
  X,
  ExternalLink,
  Sparkles,
  Menu
} from "lucide-react";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const benefitsRef = useRef(null);

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

    [servicesRef, processRef, benefitsRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    // Auto-advance process steps
    const processInterval = setInterval(() => {
      setActiveProcessStep(prev => (prev + 1) % 4);
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(processInterval);
    };
  }, []);

  const services = [
    {
      id: 'business-setup',
      title: "Business Setup & Company Incorporation",
      shortTitle: "Business Setup",
      description: "Complete support for Mainland, Free Zone, and Offshore company formation, licensing, and registration in UAE with 100% success rate.",
      detailedDesc: "Navigate the complexities of UAE business formation with our comprehensive incorporation services. From choosing the right jurisdiction to obtaining necessary licenses, we handle every aspect of your company setup with meticulous attention to regulatory compliance.",
      icon: Building2,
      number: "01",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      shadowColor: "rgba(59, 130, 246, 0.4)",
      glowColor: "rgba(59, 130, 246, 0.15)",
      bgGradient: "from-blue-50 to-indigo-50",
      accentColor: "#3b82f6",
      timeline: "7-14 Days",
      price: "Starting from AED 15,000",
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
      id: 'investment-advisory',
      title: "Investment Consultancy & Advisory",
      shortTitle: "Investment Advisory",
      description: "Strategic investment advice with market intelligence, risk assessment, and portfolio optimization for UAE and global markets.",
      detailedDesc: "Make informed investment decisions with our expert guidance backed by 30+ years of market experience. We analyze market trends, assess risks, and identify opportunities that align with your financial goals and risk tolerance.",
      icon: Banknote,
      number: "02",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      shadowColor: "rgba(16, 185, 129, 0.4)",
      glowColor: "rgba(16, 185, 129, 0.15)",
      bgGradient: "from-emerald-50 to-teal-50",
      accentColor: "#10b981",
      timeline: "Ongoing",
      price: "Custom Packages Available",
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
      id: 'tax-compliance',
      title: "Compliance & Taxation Services",
      shortTitle: "Tax & Compliance",
      description: "Comprehensive VAT, Corporate Tax, ESR compliance, and strategic tax planning tailored to UAE regulations and international standards.",
      detailedDesc: "Stay ahead of UAE's evolving tax landscape with our comprehensive taxation services. We ensure your business meets all regulatory requirements while optimizing your tax position and maintaining full compliance.",
      icon: FileText,
      number: "03",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      shadowColor: "rgba(245, 158, 11, 0.4)",
      glowColor: "rgba(245, 158, 11, 0.15)",
      bgGradient: "from-orange-50 to-amber-50",
      accentColor: "#f59e0b",
      timeline: "Monthly/Quarterly",
      price: "From AED 2,500/month",
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
      id: 'cfo-services',
      title: "Virtual Chief Financial Officer Services",
      shortTitle: "Virtual CFO",
      description: "Strategic financial leadership for startups and SMEs with comprehensive financial planning, analysis, and growth strategies.",
      detailedDesc: "Access C-level financial expertise without the full-time cost. Our virtual CFO services provide strategic financial leadership, advanced analytics, and growth-focused financial management.",
      icon: BriefcaseBusiness,
      number: "04",
      gradient: "from-red-500 via-rose-500 to-pink-500",
      shadowColor: "rgba(239, 68, 68, 0.4)",
      glowColor: "rgba(239, 68, 68, 0.15)",
      bgGradient: "from-red-50 to-rose-50",
      accentColor: "#ef4444",
      timeline: "Monthly Retainer",
      price: "From AED 8,000/month",
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
      id: 'aml-services',
      title: "Anti-Money Laundering Compliance",
      shortTitle: "AML Compliance",
      description: "Comprehensive AML policy development, KYC procedures, and regulatory compliance advisory tailored to UAE financial regulations.",
      detailedDesc: "Protect your business with robust AML compliance frameworks. We develop comprehensive policies, implement monitoring systems, and ensure full regulatory compliance while mitigating operational risks.",
      icon: ShieldCheck,
      number: "05",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      shadowColor: "rgba(139, 92, 246, 0.4)",
      glowColor: "rgba(139, 92, 246, 0.15)",
      bgGradient: "from-violet-50 to-purple-50",
      accentColor: "#8b5cf6",
      timeline: "One-time + Ongoing",
      price: "From AED 25,000",
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
      id: 'accounting-bookkeeping',
      title: "Accounting & Bookkeeping Services",
      shortTitle: "Accounting Services",
      description: "Professional bookkeeping, audit-ready financial reports, and comprehensive financial record management using latest cloud-based systems.",
      detailedDesc: "Maintain accurate financial records with our professional accounting services. From daily bookkeeping to comprehensive financial reporting, we ensure your books are always audit-ready and compliant.",
      icon: BookOpenCheck,
      number: "06",
      gradient: "from-slate-500 via-gray-500 to-zinc-500",
      shadowColor: "rgba(100, 116, 139, 0.4)",
      glowColor: "rgba(100, 116, 139, 0.15)",
      bgGradient: "from-slate-50 to-gray-50",
      accentColor: "#64748b",
      timeline: "Monthly",
      price: "From AED 1,500/month",
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
      id: 'market-research',
      title: "Market Research & Business Intelligence",
      shortTitle: "Market Research",
      description: "Comprehensive market analysis, feasibility studies, and competitive intelligence to support strategic business decisions.",
      detailedDesc: "Make data-driven business decisions with our comprehensive market research services. We provide deep market insights, competitive analysis, and strategic recommendations to maximize your business success.",
      icon: BarChart2,
      number: "07",
      gradient: "from-lime-500 via-green-500 to-emerald-500",
      shadowColor: "rgba(132, 204, 22, 0.4)",
      glowColor: "rgba(132, 204, 22, 0.15)",
      bgGradient: "from-lime-50 to-green-50",
      accentColor: "#84cc16",
      timeline: "4-6 Weeks",
      price: "From AED 15,000",
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
      id: 'corporate-training',
      title: "Corporate Skill Development & Training",
      shortTitle: "Training & Development",
      description: "Professional development programs covering UAE corporate laws, compliance, financial management, and international business operations.",
      detailedDesc: "Empower your team with essential knowledge and skills through our comprehensive training programs. We cover critical areas of UAE business operations, ensuring your staff stays current with regulations and best practices.",
      icon: Lightbulb,
      number: "08",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      shadowColor: "rgba(234, 179, 8, 0.4)",
      glowColor: "rgba(234, 179, 8, 0.15)",
      bgGradient: "from-yellow-50 to-orange-50",
      accentColor: "#eab308",
      timeline: "1-2 Days",
      price: "From AED 5,000/session",
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
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "Comprehensive discussion of your business needs, objectives, and challenges to create tailored solutions.",
      icon: Users,
      color: "#3b82f6",
      details: [
        "Initial consultation call",
        "Needs assessment",
        "Goal identification",
        "Timeline planning"
      ]
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Custom solution design with detailed planning, resource allocation, and milestone identification.",
      icon: Target,
      color: "#10b981",
      details: [
        "Solution architecture",
        "Resource planning",
        "Milestone mapping",
        "Risk assessment"
      ]
    },
    {
      step: "03",
      title: "Implementation & Execution",
      description: "Efficient execution with regular progress updates, quality checks, and milestone achievements.",
      icon: Zap,
      color: "#f59e0b",
      details: [
        "Project execution",
        "Regular updates",
        "Quality assurance",
        "Progress tracking"
      ]
    },
    {
      step: "04",
      title: "Delivery & Ongoing Support",
      description: "Final delivery with comprehensive documentation, training, and continuous support services.",
      icon: Clock,
      color: "#ef4444",
      details: [
        "Solution delivery",
        "Documentation",
        "Team training",
        "Ongoing support"
      ]
    }
  ];

  const benefits = [
    {
      title: "30+ Years Experience",
      description: "Three decades of expertise in UAE regulations, taxation, and business formation",
      icon: Award,
      color: "#3b82f6",
      metric: "30+"
    },
    {
      title: "500+ Success Stories",
      description: "Successfully established over 500 companies with 100% regulatory compliance",
      icon: CheckCircle,
      color: "#10b981",
      metric: "500+"
    },
    {
      title: "Global Reach",
      description: "Services across UAE, India, GCC, and international markets with local expertise",
      icon: Globe,
      color: "#f59e0b",
      metric: "15+"
    },
    {
      title: "99.9% Success Rate",
      description: "Industry-leading success rate in business formations and compliance services",
      icon: TrendingUp,
      color: "#ef4444",
      metric: "99.9%"
    },
    {
      title: "Cost Effective Solutions",
      description: "Transparent pricing with competitive rates and no hidden fees",
      icon: Calculator,
      color: "#8b5cf6",
      metric: "40%"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support with dedicated account managers for all clients",
      icon: Clock,
      color: "#64748b",
      metric: "24/7"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al Mansouri",
      title: "CEO, Emirates Trading LLC",
      content: "CAPMC made our business setup incredibly smooth. Their expertise in UAE regulations is unmatched.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Sarah Johnson",
      title: "Founder, Dubai Tech Solutions",
      content: "Their virtual CFO services transformed our financial management. Highly recommended!",
      rating: 5,
      image: "/api/placeholder/60/60"
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
          backgroundImage: "url('/img/services.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* Professional Overlay */}
        

        {/* Content - Left aligned like your landing page */}
        <div className="z-10 max-w-6xl text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] leading-tight">
            Professional Business Services
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Tailored for Your Success
            </span>
          </h1>
          
          
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-orange-400"
            >
              Explore Our Services →
            </button>
            <button className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-slate-800 transition duration-300 backdrop-blur-sm">
              Get Free Consultation
            </button>
          </div>

          {/* Key Services Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            {[
              { service: "Business Setup", icon: Building2 },
              { service: "Tax Advisory", icon: Calculator },
              { service: "Compliance", icon: FileCheck },
              { service: "CFO Services", icon: TrendingUp }
              
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90 text-sm bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <item.icon className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="font-medium">{item.service}</span>
              </div>
            ))}
          </div>
        </div>

        
      </section>

      {/* Services Grid Section */}
      <section
        ref={servicesRef}
        id="services"
        className="relative py-24 px-6 md:px-12 lg:px-24 bg-gray-50"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-green-100/40 to-blue-100/40 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="animate-on-scroll opacity-0 transform translate-y-8" style={{transition: 'all 0.8s ease-out'}}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
                <Award className="w-4 h-4" />
                Comprehensive Business Solutions
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
                <span className="block">Our Professional</span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                  Service Portfolio
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From business formation to ongoing compliance, we provide end-to-end solutions tailored to your success in the UAE market.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`animate-on-scroll opacity-0 transform translate-y-8 group relative ${service.bgGradient} rounded-3xl p-8 border-2 border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer`}
                  style={{
                    transition: 'all 0.8s ease-out',
                    transitionDelay: `${index * 100}ms`,
                    boxShadow: hoveredCard === index 
                      ? `0 25px 50px ${service.shadowColor}` 
                      : `0 10px 25px ${service.shadowColor}`
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => {
                    setSelectedService(index);
                    setShowServiceModal(true);
                  }}
                >
                  {/* Service Number Badge */}
                  <div className="absolute top-6 right-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-sm">{service.number}</span>
                    </div>
                  </div>

                  {/* Timeline Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-gray-600">
                      {service.timeline}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-8 mt-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}>
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                    style={{
                      backgroundImage: `linear-gradient(45deg, ${service.gradient.split(' ').slice(1).join(' ')})`
                    }}>
                    {service.shortTitle}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[80px]">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-lg font-bold text-gray-900">{service.price}</div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-white/80 hover:bg-white text-gray-700 font-semibold py-3 px-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-2">
                    Learn More
                    <ExternalLink size={16} />
                  </button>

                  {/* Hover Effect */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
                </div>
              );
            })}
          </div>

          {/* Quick Stats */}
          <div className="text-center">
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">100% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700 font-medium">Fast Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700 font-medium">Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Process Section */}
      <section
        ref={processRef}
        className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-32 w-96 h-96 bg-gradient-to-r from-orange-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="animate-on-scroll opacity-0 transform translate-y-8" style={{transition: 'all 0.8s ease-out'}}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-gray-200 rounded-full text-sm font-medium text-gray-700 mb-6">
                <Target className="w-4 h-4 text-blue-600" />
                Our Proven Process
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
                <span className="block">How We</span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                  Deliver Excellence
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our systematic approach ensures successful outcomes for every client engagement
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeProcessStep === index;
              
              return (
                <div
                  key={index}
                  className={`animate-on-scroll opacity-0 transform translate-y-8 relative p-8 rounded-3xl border-2 transition-all duration-700 cursor-pointer ${
                    isActive 
                      ? 'bg-white border-gray-300 shadow-2xl scale-105' 
                      : 'bg-white/60 border-gray-200 hover:border-gray-300 hover:bg-white/80'
                  }`}
                  style={{
                    transition: 'all 0.8s ease-out',
                    transitionDelay: `${index * 200}ms`
                  }}
                  onClick={() => setActiveProcessStep(index)}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    style={{ backgroundColor: step.color }}>
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                      isActive ? 'scale-110' : ''
                    }`} style={{ backgroundColor: `${step.color}22` }}>
                      <Icon size={32} style={{ color: step.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{step.description}</p>

                  {/* Details */}
                  <div className={`space-y-2 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step.color }}></div>
                        <span className="text-xs text-gray-500">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-300">
                      <div className="absolute top-1/2 right-0 w-2 h-2 bg-gray-400 rounded-full transform -translate-y-1/2"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Process Timeline */}
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="text-sm text-gray-500">Total Timeline:</div>
              <div className="text-2xl font-bold text-gray-900">14-21 Business Days</div>
              <div className="text-sm text-gray-500">Average</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={benefitsRef}
        className="relative py-24 px-6 md:px-12 lg:px-24 bg-white"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="animate-on-scroll opacity-0 transform translate-y-8" style={{transition: 'all 0.8s ease-out'}}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full text-sm font-medium text-green-700 mb-6">
                <Award className="w-4 h-4" />
                Why Choose CAPMC
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
                <span className="block">Unmatched</span>
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Excellence & Results
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three decades of expertise delivering exceptional results for businesses across UAE
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 transform translate-y-8 group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500"
                  style={{
                    transition: 'all 0.8s ease-out',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: `${benefit.color}22` }}>
                      <Icon size={28} style={{ color: benefit.color }} />
                    </div>
                    <div className="text-3xl font-black" style={{ color: benefit.color }}>
                      {benefit.metric}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ backgroundColor: benefit.color }}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-gray-900">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-12 text-white/90 leading-relaxed">
            Join 500+ successful companies who chose CAPMC for their UAE business journey. 
            Get started with a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
  href="tel:+971529283063"
  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
>
  <Phone size={20} />
  Get Free Consultation
</a>
            <a 
  href="mailto:info@capmc.ae"
  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-3"
>
  <Mail size={20} />
  Email Us Today
</a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-white/80">
            <a href="tel:+971529283063" className="flex items-center gap-2 hover:text-white transition-colors">
  <Phone size={16} />
  <span>+971 529 283 063</span>
</a>
            <a href="mailto:info@capmc.ae" className="flex items-center gap-2 hover:text-white transition-colors">
  <Mail size={16} />
  <span>info@capmc.ae</span>
</a>
            <a 
  href="https://www.google.com/maps/dir//Al+Durrah+Tower,+Sheikh+Zayed+Road,+Dubai,+UAE/@25.2048493,55.26410151,17z"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:text-white transition-colors"
>
  <MapPin size={16} />
  <span>Dubai, UAE</span>
</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;