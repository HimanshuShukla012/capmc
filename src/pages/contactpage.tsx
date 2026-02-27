import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Send,
  CheckCircle,
  MessageCircle,
  Building2,
  Users,
  Award,
  ArrowRight,
  ExternalLink,
  Calendar,
  Headphones
} from "lucide-react";
import { Helmet } from 'react-helmet-async';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const locationRef = useRef(null);

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

    [contactRef, locationRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_w7pgpdq',
        template_id: 'template_cd2nkq7',
        user_id: 'Q5tVkW5L6WNvLfI3v', // You'll need to get this from EmailJS
        template_params: {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          to_email: 'info@capmc.ae'
        }
      })
    });

    if (response.ok) {
      alert('Thank you for your message. We will get back to you soon!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } else {
      alert('There was an error sending your message. Please try again or contact us directly.');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    alert('There was an error sending your message. Please try again or contact us directly.');
  } finally {
    setIsSubmitting(false);
  }
};

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "Speak with our experts",
      primary: "+971 529 283 063",
      secondary: "+91 94154 27433",
      color: "#3b82f6",
      gradient: "from-blue-500 to-indigo-600",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Get detailed responses",
      primary: "info@capmc.ae",
      secondary: "support@capmc.ae",
      color: "#10b981",
      gradient: "from-emerald-500 to-teal-600",
      action: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      subtitle: "Instant assistance",
      primary: "Available 24/7",
      secondary: "Average response: 2 min",
      color: "#f59e0b",
      gradient: "from-orange-500 to-amber-600",
      action: "Start Chat"
    },

  ];

  const services = [
    "Business Setup & Incorporation",
    "Tax & Compliance Advisory", 
    "Investment Consultancy",
    "Virtual CFO Services",
    "AML Compliance",
    "Accounting Services",
    "Market Research",
    "Corporate Training",
    "Other"
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Dubai Headquarters",
      details: "701, Al Durrah Tower, Sheikh Zayed Road, Dubai, UAE",
      color: "#3b82f6"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Sunday - Thursday: 9:00 AM - 6:00 PM\nFriday - Saturday: Closed",
      color: "#10b981"
    },
    {
      icon: Globe,
      title: "Service Areas",
      details: "UAE, India, GCC Countries, and 15+ International Markets",
      color: "#f59e0b"
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-hidden">
      <Helmet>
  <title>Contact CAPMC | Free Business Setup Consultation Dubai</title>
  <meta name="description" content="Contact CAPMC LLC FZ for a free consultation on UAE business setup, company formation & financial services. Call +971 529 283 063 or visit Al Durrah Tower, Dubai." />
  <link rel="canonical" href="https://capmc.ae/contact" />
  <meta property="og:title" content="Contact CAPMC | Free Consultation Dubai" />
  <meta property="og:url" content="https://capmc.ae/contact" />
</Helmet>
      
      <NavBar />
      
      {/* Professional Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[80vh] w-full flex items-center justify-start text-left px-6 md:px-20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/Contact.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        
        {/* Content - Positioned to accommodate navbar */}
        <div className="z-10 max-w-6xl text-left pt-32 md:pt-40">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 mb-6">
            <Headphones className="w-4 h-4 text-orange-400" />
            Available 24/7 for Your Business Needs
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] leading-tight">
            Connect with UAE's
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Leading Business Experts
            </span>
          </h1>
        
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-orange-400"
            >
              Get Free Consultation →
            </button>
            <button
              onClick={() => document.getElementById('contact-methods')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-slate-800 transition duration-300 backdrop-blur-sm"
            >
              Contact Options
            </button>
          </div>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl">
            {[
              { label: "Response Time", value: "<2 Hours" },
              { label: "Success Rate", value: "99.9%" },
              { label: "Countries Served", value: "15+" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="text-lg font-bold text-orange-400">{stat.value}</div>
                <div className="text-xs text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section
        ref={contactRef}
        id="contact-methods"
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
                <Phone className="w-4 h-4" />
                Multiple Ways to Connect
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
                <span className="block">Choose Your Preferred</span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                  Communication Channel
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're available through multiple channels to ensure you get the support you need, when you need it.
              </p>
            </div>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="animate-on-scroll opacity-0 transform translate-y-8 group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  style={{
                    transition: 'all 0.8s ease-out',
                    transitionDelay: `${index * 150}ms`
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${method.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{method.subtitle}</p>
                    
                    <div className="space-y-1 mb-6">
                      <div className="font-semibold" style={{ color: method.color }}>{method.primary}</div>
                      <div className="text-gray-500 text-sm">{method.secondary}</div>
                    </div>
                    
                    <a 
  href={
    method.title === "Call Us" ? "tel:+971529283063" :
    method.title === "Email Us" ? "mailto:info@capmc.ae" :
    method.title === "Live Chat" ? "https://wa.me/971529283063" : "#"
  }
  target={method.title === "Live Chat" ? "_blank" : "_self"}
  rel={method.title === "Live Chat" ? "noopener noreferrer" : undefined}
  className={`block w-full py-2 px-4 rounded-xl bg-gradient-to-r ${method.gradient} text-white font-medium hover:shadow-lg transition-all duration-300 text-center`}
>
  {method.action}
</a>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ backgroundColor: method.color }}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section
        id="contact-form"
        className="relative py-16 px-6 md:px-12 lg:px-24 bg-white"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="opacity-100 transform translate-y-0">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 shadow-xl">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
                  <p className="text-gray-600">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+971 55 123 4567"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 bg-white"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your business needs and how we can help..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 bg-white resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="opacity-100 transform translate-y-0">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Ready to start your UAE business journey? Our expert consultants are here to provide personalized guidance and comprehensive solutions tailored to your unique needs.
                  </p>
                </div>

                {/* Office Information Cards */}
                <div className="space-y-6">
                  {officeInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${info.color}15` }}>
                          <Icon size={24} style={{ color: info.color }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                          <p className="text-gray-600 whitespace-pre-line">{info.details}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Quick Response Promise */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <h4 className="font-bold text-green-800">Our Response Promise</h4>
                  </div>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Email responses within 24 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Phone consultations same day
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Free initial consultation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section
        ref={locationRef}
        className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-on-scroll opacity-0 transform translate-y-8" style={{transition: 'all 0.8s ease-out'}}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full text-sm font-medium text-orange-700 mb-6">
                <Building2 className="w-4 h-4" />
                Visit Our Office
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
                <span className="block">Find Us in the Heart of</span>
                <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Dubai's Business District
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Strategically located on Sheikh Zayed Road for easy access and convenience
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="animate-on-scroll opacity-0 transform translate-y-8" style={{transition: 'all 0.8s ease-out'}}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl blur opacity-20"></div>
                <div className="relative overflow-hidden rounded-3xl border-2 border-white shadow-2xl">
                  <iframe
                    title="CAPMC Office Location - Al Durrah Tower"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1918447553206!2d55.26410151413475!3d25.2048493838454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42f294ffa28d%3A0x8de02709069c243d!2sAl%20Durrah%20Tower!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[500px]"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className="animate-on-scroll opacity-0 transform translate-y-8" style={{transition: 'all 0.8s ease-out', transitionDelay: '200ms'}}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Dubai Office</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Located in the prestigious Al Durrah Tower on Sheikh Zayed Road, our office provides easy access for clients across Dubai and the UAE.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                        <p className="text-gray-600">701, Al Durrah Tower<br/>Sheikh Zayed Road<br/>Dubai, United Arab Emirates</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                        <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 6:00 PM<br/>Friday - Saturday: Closed</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Meeting Policy</h4>
                        <p className="text-gray-600">Walk-ins welcome, but appointments are recommended for dedicated consultation time.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  
                  <a 
  href="https://www.google.com/maps/dir//Al+Durrah+Tower,+Sheikh+Zayed+Road,+Dubai,+UAE/@25.2048493,55.26410151,17z"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 border-2 border-orange-500 text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2"
>
  <ExternalLink size={20} />
  Get Directions
</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;