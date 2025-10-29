import React, { useEffect, useRef, useState } from 'react';
import { 
  Shield, 
  Award, 
  Users, 
  Globe, 
  TrendingUp, 
  Star, 
  CheckCircle,
  Building2,
  Briefcase,
  Target,
  Handshake,
  Crown
} from 'lucide-react';

const EnhancedTrustIndicators = () => {
  const sectionRef = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Mock client logos with categories
  const clientCategories = [
    {
      title: "Fortune 500 Companies",
      icon: Building2,
      color: "#3b82f6",
      gradient: "from-blue-500 to-indigo-600",
      clients: [
        { name: "Global Tech Corp", industry: "Technology", logo: "GT" },
        { name: "International Bank", industry: "Finance", logo: "IB" },
        { name: "Premier Holdings", industry: "Investment", logo: "PH" },
        { name: "Energy Solutions", industry: "Energy", logo: "ES" }
      ]
    },
    {
      title: "Growing Startups",
      icon: TrendingUp,
      color: "#10b981",
      gradient: "from-emerald-500 to-teal-600",
      clients: [
        { name: "InnovateLab", industry: "AI/ML", logo: "IL" },
        { name: "FinTech Pro", industry: "Fintech", logo: "FP" },
        { name: "EcoVenture", industry: "Sustainability", logo: "EV" },
        { name: "HealthTech", industry: "Healthcare", logo: "HT" }
      ]
    },
    {
      title: "Government Entities",
      icon: Shield,
      color: "#f59e0b",
      gradient: "from-amber-500 to-orange-600",
      clients: [
        { name: "UAE Ministry", industry: "Government", logo: "UM" },
        { name: "Dubai Chamber", industry: "Trade", logo: "DC" },
        { name: "Free Zone Auth", industry: "Authority", logo: "FZ" },
        { name: "Economic Dev", industry: "Development", logo: "ED" }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "CAPMC transformed our business setup process from months to weeks. Their expertise in UAE regulations is unmatched.",
      author: "Sarah Johnson",
      title: "CEO, TechVenture International",
      company: "Fortune 500 Technology Company",
      rating: 5,
      avatar: "SJ"
    },
    {
      quote: "The level of professionalism and attention to detail exceeded our expectations. They guided us through every step seamlessly.",
      author: "Ahmed Al-Rashid",
      title: "Managing Director",
      company: "Emirates Investment Group",
      rating: 5,
      avatar: "AR"
    },
    {
      quote: "Working with CAPMC was a game-changer. Their deep understanding of local and international business practices is remarkable.",
      author: "Maria Rodriguez",
      title: "Founder & COO",
      company: "Global Solutions Ltd",
      rating: 5,
      avatar: "MR"
    }
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management",
      icon: Award,
      color: "#3b82f6"
    },
    {
      title: "UAE Chamber",
      description: "Certified Member",
      icon: Crown,
      color: "#10b981"
    },
    {
      title: "ICAI Recognition",
      description: "Professional Excellence",
      icon: Star,
      color: "#f59e0b"
    },
    {
      title: "Global Standards",
      description: "International Compliance",
      icon: Globe,
      color: "#8b5cf6"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-trust');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) scale(1)';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    // Floating animation for background elements
    const floatingElements = document.querySelectorAll('.floating-trust-element');
    floatingElements.forEach((el, index) => {
      const animate = () => {
        const randomX = (Math.random() - 0.5) * 40;
        const randomY = (Math.random() - 0.5) * 60;
        const duration = 4000 + Math.random() * 4000;
        
        el.style.transition = `transform ${duration}ms ease-in-out`;
        el.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        setTimeout(animate, duration);
      };
      
      setTimeout(animate, index * 600);
    });

    return () => {
      observer.disconnect();
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-trust-element absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="floating-trust-element absolute top-40 right-32 w-48 h-48 bg-gradient-to-r from-green-200/25 to-blue-200/25 rounded-full blur-2xl"></div>
        <div className="floating-trust-element absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-orange-200/15 to-pink-200/15 rounded-full blur-3xl"></div>
        <div className="floating-trust-element absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-violet-200/20 to-indigo-200/20 rounded-full blur-2xl"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Cpath d='M15 25h30v10H15z' fill-opacity='0.03'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="animate-trust opacity-0 transform translate-y-8" style={{transition: 'all 0.8s ease-out'}}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
              <Handshake className="w-4 h-4" />
              Trusted Partnerships
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
              <span className="block">Trusted by</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From Fortune 500 companies to innovative startups, organizations worldwide trust us to deliver exceptional results
            </p>
          </div>
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { number: "500+", label: "Companies Formed", icon: Building2, color: "#3b82f6" },
            { number: "15+", label: "Countries Served", icon: Globe, color: "#10b981" },
            { number: "99.9%", label: "Success Rate", icon: Target, color: "#f59e0b" },
            { number: "30+", label: "Years Experience", icon: Award, color: "#8b5cf6" },
          ].map((stat, index) => (
            <div
              key={index}
              className="animate-trust opacity-0 transform translate-y-8 group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500"
              style={{
                transition: 'all 0.8s ease-out',
                transitionDelay: `${index * 100 + 200}ms`
              }}
            >
              <div className="flex items-center justify-center mb-4">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <stat.icon size={24} style={{ color: stat.color }} />
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black mb-1" style={{ color: stat.color }}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
              
              {/* Hover effect line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ backgroundColor: stat.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* Client Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {clientCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-trust opacity-0 transform translate-y-8 group relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700"
              style={{
                transition: 'all 0.8s ease-out',
                transitionDelay: `${categoryIndex * 200 + 600}ms`
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-r ${category.gradient} shadow-lg`}
                >
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.clients.map((client, clientIndex) => (
                  <div
                    key={clientIndex}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group/client"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md"
                      style={{ backgroundColor: category.color }}
                    >
                      {client.logo}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm group-hover/client:text-gray-700">
                        {client.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {client.industry}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category accent */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 opacity-10 rounded-bl-full transition-opacity duration-300 group-hover:opacity-20"
                style={{ backgroundColor: category.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* Testimonials Slider */}
        <div className="mb-20">
          <div className="animate-trust opacity-0 transform translate-y-8" style={{transition: 'all 0.8s ease-out', transitionDelay: '1000ms'}}>
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                  }}
                ></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed max-w-4xl mx-auto">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>

                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">
                      {testimonials[activeTestimonial].author}
                    </div>
                    <div className="text-blue-200 text-sm">
                      {testimonials[activeTestimonial].title}
                    </div>
                    <div className="text-blue-300 text-xs">
                      {testimonials[activeTestimonial].company}
                    </div>
                  </div>
                </div>

                {/* Testimonial dots */}
                <div className="flex justify-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeTestimonial === index
                          ? 'bg-white scale-125'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                      onClick={() => setActiveTestimonial(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="animate-trust opacity-0 transform translate-y-8 group text-center p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
              style={{
                transition: 'all 0.8s ease-out',
                transitionDelay: `${index * 100 + 1200}ms`
              }}
            >
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${cert.color}15` }}
              >
                <cert.icon size={28} style={{ color: cert.color }} />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">{cert.title}</h4>
              <p className="text-xs text-gray-600">{cert.description}</p>
              
              {/* Certification badge effect */}
              <div 
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: cert.color }}
              >
                <CheckCircle size={12} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="animate-trust opacity-0 transform translate-y-8" style={{transition: 'all 0.8s ease-out', transitionDelay: '1600ms'}}>
            <p className="text-lg text-gray-600 mb-6">
              Join hundreds of successful companies who trust us with their business journey
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Users size={20} />
              Become Our Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTrustIndicators;