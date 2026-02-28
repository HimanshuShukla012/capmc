import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "Why Choose Dubai For Starting A Business?",
    answer:
      "Dubai is a strategic global business destination offering world-class infrastructure, a strategic location connecting major markets, tax-friendly policies, political stability, and a diverse, innovative economy.",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    shadowColor: "rgba(255, 140, 0, 0.4)",
    glowColor: "rgba(255, 140, 0, 0.15)",
  },
  {
    question: "What Support Does Dubai Offer Entrepreneurs Starting A Business?",
    answer:
      "Dubai offers extensive support to entrepreneurs through simplified business setup processes, competitive licensing options, investor visas, and dedicated free zones with numerous incentives.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    shadowColor: "rgba(59, 130, 246, 0.4)",
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
  {
    question: "What Are My Options For Company Formation In The UAE, And How Much Does It Cost?",
    answer:
      "You can establish your business in a Freezone, Mainland, or Offshore jurisdiction. Cost varies by setup type, jurisdiction, activity, and license.",
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    shadowColor: "rgba(139, 92, 246, 0.4)",
    glowColor: "rgba(139, 92, 246, 0.15)",
  },
  {
    question: "What Kind Of Business Licenses Are Available In Dubai?",
    answer:
      "Dubai offers Commercial, Professional, Industrial, and Tourism licenses. Each caters to different business sectors.",
    gradient: "from-emerald-500 via-green-500 to-lime-500",
    shadowColor: "rgba(16, 185, 129, 0.4)",
    glowColor: "rgba(16, 185, 129, 0.15)",
  },
  {
    question: "How Long Does The Company Formation Process Take In Dubai, And What Documents Are Required?",
    answer:
      "It usually takes 3 weeks to a few months. Documents include passport copies, visa (if applicable), proof of address, business plan, and regulatory approvals.",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    shadowColor: "rgba(244, 63, 94, 0.4)",
    glowColor: "rgba(244, 63, 94, 0.15)",
  },
];

const EnhancedFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const faqItems = document.querySelectorAll(".faq-item");
    
    // Enhanced FAQ items entrance animation
    faqItems.forEach((item, index) => {
      // Initial state
      item.style.opacity = '0';
      item.style.transform = 'translateY(60px) scale(0.95)';
      
      // Animate in with stagger
      setTimeout(() => {
        item.style.transition = 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0) scale(1)';
      }, index * 150 + 300);
    });

    // Enhanced FAQ items interactions with smooth lift effect
    faqItems.forEach((item, index) => {
      const faq = faqs[index];
      
      item.addEventListener("mousemove", (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        item.style.setProperty("--mouse-x", `${x}px`);
        item.style.setProperty("--mouse-y", `${y}px`);
      });

      item.addEventListener("mouseenter", () => {
        item.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        item.style.transform = 'translateY(-8px) scale(1.02)';
        item.style.filter = 'brightness(1.05)';
      });

      item.addEventListener("mouseleave", () => {
        item.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        item.style.transform = 'translateY(0) scale(1)';
        item.style.filter = 'brightness(1)';
      });
    });

    // Floating animation for background elements
    const floatingOrbs = document.querySelectorAll(".floating-orb");
    floatingOrbs.forEach((orb, index) => {
      const animate = () => {
        const randomX = (Math.random() - 0.5) * 50;
        const randomY = (Math.random() - 0.5) * 60;
        const randomRotation = Math.random() * 360;
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
      className="relative py-32 px-6 md:px-24 bg-gradient-to-br from-white via-gray-50 to-blue-50/20 text-gray-800 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb absolute top-20 left-16 w-72 h-72 bg-gradient-to-r from-orange-200/25 to-amber-200/25 rounded-full blur-3xl"></div>
        <div className="floating-orb absolute top-32 right-20 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-2xl"></div>
        <div className="floating-orb absolute bottom-32 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-200/20 to-violet-200/20 rounded-full blur-3xl"></div>
        <div className="floating-orb absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-200/25 to-green-200/25 rounded-full blur-2xl"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF8C00' fill-opacity='0.08'%3E%3Cpath d='M40 40m-15 0a15,15 0 1,1 30,0a15,15 0 1,1 -30,0 M20 20m-8 0a8,8 0 1,1 16,0a8,8 0 1,1 -16,0 M60 60m-6 0a6,6 0 1,1 12,0a6,6 0 1,1 -12,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Enhanced Title Section */}
      <div className="relative z-10 text-center mb-20">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <Sparkles className="w-6 h-6 text-orange-500 animate-pulse" />
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent drop-shadow-lg">
            Frequently
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
            Asked Questions
          </span>
        </h2>
        
        <div className="w-32 h-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full mx-auto shadow-lg mb-6"></div>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Get answers to the most common questions about starting your business in Dubai
        </p>
      </div>

      {/* Enhanced FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="faq-item group relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500 cursor-pointer border border-white/60 hover:border-white/80"
              style={{
                background: `
                  radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${item.glowColor}, transparent 50%),
                  linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)
                `,
                boxShadow: `
                  0 25px 50px -12px ${item.shadowColor},
                  0 0 0 1px rgba(255,255,255,0.5),
                  inset 0 1px 0 rgba(255,255,255,0.9)
                `,
              }}
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, transparent, ${item.shadowColor}, transparent)`
                }}
              >
                <div className="w-full h-full bg-white/95 rounded-2xl"></div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full duration-1200 ease-in-out"></div>
              </div>

              {/* Question Button */}
              <button
                className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none transition-all duration-300 relative z-10"
                onClick={() => toggleFAQ(idx)}
              >
                <div className="flex items-center gap-4 flex-1">
                  {/* Question Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 ${isOpen ? 'scale-110 rotate-12' : ''}`}>
                    <span className="text-white font-bold text-lg">{idx + 1}</span>
                  </div>
                  
                  {/* Question Text */}
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 pr-4">
                    {item.question}
                  </span>
                </div>

                {/* Chevron Icon */}
                <div className={`flex-shrink-0 transition-all duration-300 ${isOpen ? 'transform rotate-180' : ''}`}>
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500 group-hover:text-orange-500" />
                  )}
                </div>
              </button>

              {/* Answer Section with Enhanced Animation */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6 relative z-10">
                  {/* Decorative line */}
                  <div className={`h-1 w-full bg-gradient-to-r ${item.gradient} rounded-full mb-4 transform origin-left transition-all duration-700 ${isOpen ? 'scale-x-100' : 'scale-x-0'}`}></div>
                  
                  {/* Answer text */}
                  <p className="text-gray-600 leading-relaxed text-base pl-16 animate-fade-in">
                    {item.answer}
                  </p>

                  {/* Decorative elements */}
                  <div className="flex justify-end mt-4 pr-16">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient} opacity-60 animate-pulse`}></div>
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${item.gradient} opacity-5 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}></div>

              {/* Floating particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-16 relative z-10">
        <a
            href="/contact"
            className="inline-block bg-[#FF8C00] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:bg-[#e67e00] transition duration-300 hover:shadow-2xl transform hover:scale-105"
          >
            Still Have Questions?
          </a>
        <p className="mt-4 text-gray-600">
          Contact our experts for personalized assistance
        </p>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent pointer-events-none"></div>

      // CORRECT - standard style tag for Vite/React
<style>{`
  .animate-fade-in {
    animation: fadeIn 0.5s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>
    </section>
  );
};

export default EnhancedFaqSection;