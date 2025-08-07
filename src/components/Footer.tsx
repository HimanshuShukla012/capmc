import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#000D1A] to-[#001f33] text-white pt-20 pb-10 border-t border-white/10 rounded-t-3xl shadow-inner mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Company Overview */}
          <div>
            <img src="public/img/logo.png" alt="CAPMC Logo" className="h-14 mb-4" />
            <p className="text-gray-400 text-sm">
              CAPMC Corporate Consultancy Services is your trusted partner in setting up and scaling your business in the UAE. We simplify the journey with tailored legal, financial, and compliance solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#FFC72C]">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#why" className="hover:text-[#FFC72C]">Why Dubai</a></li>
              <li><a href="#steps" className="hover:text-[#FFC72C]">4-Step Process</a></li>
              <li><a href="#services" className="hover:text-[#FFC72C]">Our Services</a></li>
              <li><a href="#about" className="hover:text-[#FFC72C]">About CAPMC</a></li>
              <li><Link to="/contact" className="hover:text-[#FFC72C]">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#FFC72C]">Contact Info</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#FFC72C] mt-1" />
                <span>
                  701, Al Durrah Tower, Shaikh Zaid Road - Dubai - United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FFC72C]" />
                <span>+971- 529283063
+91-94154-27433</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#FFC72C]" />
                <span>info@capmc.ae</span>
              </li>
            </ul>
          </div>

          {/* Social & Credit */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#FFC72C]">Follow Us</h3>
            <div className="flex gap-4 text-xl text-gray-300">
              <a href="#" className="hover:text-[#FFC72C]"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#FFC72C]"><FaTwitter /></a>
              <a href="#" className="hover:text-[#FFC72C]"><FaLinkedinIn /></a>
            </div>
            <p className="text-gray-500 text-xs mt-6">
              © {new Date().getFullYear()} Ashtasiddhi Innovations. All rights reserved.
            </p>
           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-gray-500 text-xs">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-[#FFC72C]">Privacy Policy</a>
            <a href="#" className="hover:text-[#FFC72C]">Terms & Conditions</a>
            <a href="#" className="hover:text-[#FFC72C]">Sitemap</a>
            <a href="#" className="hover:text-[#FFC72C]">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
