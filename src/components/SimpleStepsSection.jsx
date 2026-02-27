import React, { useEffect, useRef, useState } from "react";
import { FolderKanban, FileText, BadgeCheck, Banknote, ArrowRight, Clock, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Select Jurisdiction & Choose Business Activity",
    description: "Strategic consultation to determine optimal jurisdiction and business structure tailored to your specific industry requirements.",
    icon: FolderKanban,
    number: "01",
    gradient: "from-orange-500 to-amber-500",
    shadowColor: "rgba(251, 146, 60, 0.25)",
    glowColor: "rgba(251, 146, 60, 0.1)",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
    borderColor: "border-orange-200",
    accentColor: "#f59e0b",
    duration: "1-2 Days",
    features: ["Jurisdiction Analysis", "Business Structure", "Compliance Review"]
  },
  {
    title: "Document Preparation & Trade License",
    description: "Comprehensive document preparation and trade license acquisition with meticulous attention to regulatory compliance.",
    icon: FileText,
    number: "02",
    gradient: "from-blue-500 to-cyan-500",
    shadowColor: "rgba(59, 130, 246, 0.25)",
    glowColor: "rgba(59, 130, 246, 0.1)",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    accentColor: "#3b82f6",
    duration: "3-5 Days",
    features: ["Document Prep", "Trade License", "Legal Compliance"]
  },
  {
    title: "Visa Process & Immigration",
    description: "Streamlined visa application management for business owners and key personnel with expert immigration support.",
    icon: BadgeCheck,
    number: "03",
    gradient: "from-emerald-500 to-teal-500",
    shadowColor: "rgba(16, 185, 129, 0.25)",
    glowColor: "rgba(16, 185, 129, 0.1)",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200",
    accentColor: "#10b981",
    duration: "7-14 Days",
    features: ["Visa Applications", "Immigration Support", "Personnel Processing"]
  },
  {
    title: "Corporate Bank Account Setup",
    description: "Establishment of premium corporate banking relationships with leading UAE financial institutions for seamless operations.",
    icon: Banknote,
    number: "04",
    gradient: "from-purple-500 to-indigo-500",
    shadowColor: "rgba(139, 92, 246, 0.25)",
    glowColor: "rgba(139, 92, 246, 0.1)",
    bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
    borderColor: "border-purple-200",
    accentColor: "#8b5cf6",
    duration: "5-7 Days",
    features: ["Bank Setup", "Account Opening", "Banking Relations"]
  },
];

const ProfessionalStepsSection = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".step-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 via-white to-slate-50 py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Dubai Skyline Background */}
      <div className="absolute inset-0">
        {/* Dubai skyline background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat  "
          style={{
            backgroundImage: `url('/img/dubai.png')`
          }}
        ></div>
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-slate-50/90 opacity-80"></div>
        
        {/* Subtle floating orbs to maintain depth */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-300/8 to-orange-300/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-300/6 to-teal-300/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-56 h-56 bg-gradient-to-r from-purple-300/8 to-indigo-300/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 shadow-sm mb-6">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            Professional Business Setup Process
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Your Path to</span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Dubai Business Success
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Four expertly designed steps to establish your chartered accountancy practice in Dubai's dynamic business landscape
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>14-21 Business Days</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>100% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-blue-500" />
              <span>Full Compliance</span>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div
                key={index}
                className={`step-card group relative ${step.bgColor} rounded-2xl p-8 border-2 ${step.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 opacity-0 translate-y-8 cursor-pointer`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                style={{
                  boxShadow: activeStep === index 
                    ? `0 20px 40px ${step.shadowColor}, 0 0 0 1px rgba(255,255,255,0.8)` 
                    : `0 10px 25px ${step.shadowColor}`
                }}
              >
                {/* Step Number */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>
                  <div className="text-xs text-gray-500 font-medium bg-white/80 px-3 py-1 rounded-full">
                    {step.duration}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <Icon size={24} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${step.gradient.replace('from-', '').replace('to-', ', ')})`
                  }}>
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.gradient}`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>

                {/* Arrow for next step */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight size={14} className="text-gray-600" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Process Flow Visualization */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.gradient} shadow-lg`}></div>
                  <span className="text-xs text-gray-500 mt-2 font-medium">Step {step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-8 h-px bg-gradient-to-r from-gray-300 to-gray-400"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ProfessionalStepsSection;