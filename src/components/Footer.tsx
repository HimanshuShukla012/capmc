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
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 pt-20 pb-10 border-t border-gray-200 rounded-t-3xl shadow-inner mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-gray-300">
          {/* Company Overview */}
          <div>
            <img src="public/img/logo dark.png" alt="CAPMC Logo" className="h-14 mb-4" />
            <p className="text-gray-600 text-sm">
              CAPMC Corporate Consultancy Services is your trusted partner in setting up and scaling your business in the UAE. We simplify the journey with tailored legal, financial, and compliance solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#FF8C00]">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#why" className="hover:text-[#FF8C00] transition-colors duration-200">Why Dubai</a></li>
              <li><a href="#steps" className="hover:text-[#FF8C00] transition-colors duration-200">4-Step Process</a></li>
              <li><a href="#services" className="hover:text-[#FF8C00] transition-colors duration-200">Our Services</a></li>
              <li><a href="#about" className="hover:text-[#FF8C00] transition-colors duration-200">About CAPMC</a></li>
              <li><Link to="/contact" className="hover:text-[#FF8C00] transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#FF8C00]">Contact Info</h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#FF8C00] mt-1" />
                <span>
                  701, Al Durrah Tower, Shaikh Zaid Road - Dubai - United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FF8C00]" />
                <span>+971- 529283063
+91-94154-27433</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#FF8C00]" />
                <span>info@capmc.ae</span>
              </li>
            </ul>
          </div>

          {/* Social & Credit */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#FF8C00]">Follow Us</h3>
            <div className="flex gap-4 text-xl text-gray-600">
              <a href="#" className="hover:text-[#FF8C00] transition-colors duration-200"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#FF8C00] transition-colors duration-200"><FaTwitter /></a>
              <a href="#" className="hover:text-[#FF8C00] transition-colors duration-200"><FaLinkedinIn /></a>
            </div>
            <p className="text-gray-500 text-xs mt-6">
              © {new Date().getFullYear()} CAPMC Corporate Consultancy Services. All rights reserved.
            </p>
           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-gray-500 text-xs">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-[#FF8C00] transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-[#FF8C00] transition-colors duration-200">Terms & Conditions</a>
            <a href="#" className="hover:text-[#FF8C00] transition-colors duration-200">Sitemap</a>
            <a href="#" className="hover:text-[#FF8C00] transition-colors duration-200">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;