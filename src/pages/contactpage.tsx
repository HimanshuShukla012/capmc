import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#000D1A] via-[#001F33] to-[#000814] text-gray-100 scroll-smooth">
      <Navbar />

      <section className="min-h-screen bg-[#000D1A] text-white py-24 px-6 md:px-20 relative overflow-hidden">
        {/* SVG Background */}
        <svg
          className="absolute top-0 left-0 w-full h-full z-0 opacity-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFB400"
            d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,149.3C672,139,768,149,864,160C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        {/* Glow Effect */}
        <div className="absolute w-[500px] h-[500px] bg-[#FFB400]/10 rounded-full blur-[120px] top-1/3 left-1/2 -translate-x-1/2 z-0" />

        <div className="relative z-10 top-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFB400]">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-300">
              Reach out to CAPMC for cross-border business setup, taxation, and advisory services. We're ready to help you make the right move.
            </p>
            <div className="space-y-6 text-gray-200 text-base leading-relaxed">
              <div>
                <span className="block text-[#FFB400] font-semibold">Address:</span>
                701, Al Durrah Tower, Shaikh Zaid Road - Dubai - United Arab Emirates
              </div>
              <div>
                <span className="block text-[#FFB400] font-semibold">Phone:</span>
                +971- 529283063
+91-94154-27433
              </div>
              <div>
                <span className="block text-[#FFB400] font-semibold">Email:</span>
                info@capmc.ae
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl">
            <div>
              <label className="block mb-2 text-sm font-medium text-white">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FFB400]"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FFB400]"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">Message</label>
              <textarea
                placeholder="Write your message here..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FFB400]"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#FFB400] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#e6a700] transition duration-300"
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>

     {/* Location Section - Premium Layout with Yellow Fade Top */}
<section className="relative bg-[#000D1A] text-white px-6 md:px-20 py-32 overflow-hidden">

  {/* Yellow SVG Top Fade (Matches Previous Section) */}
  <svg
    className="absolute top-0 left-0 w-full h-[100px] z-10"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#FFB400"
      fillOpacity="0.1"
      d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,149.3C672,139,768,117,864,117.3C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"
    />
  </svg>

  {/* Soft Glow Behind */}
  <div className="absolute w-[400px] h-[400px] bg-[#FFB400]/10 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

  {/* Content in Two Columns */}
  <div className="relative z-20 grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">

    {/* Map */}
    <div className="overflow-hidden rounded-3xl border border-[#FFB400]/30 bg-white/5 backdrop-blur-md shadow-xl ring-1 ring-white/5">
      <iframe
        title="CAPMC Global Office Location"
        src="https://www.google.com/maps/dir//Al+Durrah+Tower+-+Sheikh+Zayed+Rd+-+Trade+Centre+-+Trade+Centre+1+-+Dubai+-+United+Arab+Emirates/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3e5f42f294ffa28d:0x8de02709069c243d?sa=X&ved=1t:707&ictx=111"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[400px] md:h-[500px]"
      ></iframe>
    </div>

    {/* Info Block */}
    <div className="space-y-6">
      <h3 className="text-4xl md:text-5xl font-extrabold text-[#FFB400] drop-shadow-[0_0_30px_rgba(255,180,0,0.3)]">
        Visit Us
      </h3>
      <p className="text-gray-300 text-lg leading-relaxed">
        We're located in the heart of Business Bay, Dubai. Whether you’re looking for in-person consultations or just visiting, our doors are always open to global visionaries.
      </p>
      <div className="space-y-4 text-gray-200 text-base">
        <div>
          <span className="block text-[#FFB400] font-semibold">Address:</span>
          Office 1403, Business Bay Tower, Dubai, UAE
        </div>
        <div>
          <span className="block text-[#FFB400] font-semibold">Phone:</span>
          +971 55 123 4567
        </div>
        <div>
          <span className="block text-[#FFB400] font-semibold">Email:</span>
          info@capmcglobal.com
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
