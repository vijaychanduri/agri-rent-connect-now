
import { Link } from 'react-router-dom';
import { Tractor, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-agri-darkGreen text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Tractor className="h-6 w-6 text-agri-gold" />
              <span className="text-xl font-bold text-white">AgriRent</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting farmers who need tools with those who have them. Making agriculture more accessible and sustainable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-agri-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-agri-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-agri-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-agri-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-300 hover:text-agri-gold transition-colors">
                  Browse Tools
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-agri-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-agri-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Tool Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tools?category=Heavy Equipment" className="text-gray-300 hover:text-agri-gold transition-colors">
                  Heavy Equipment
                </Link>
              </li>
              <li>
                <Link to="/tools?category=Cultivation" className="text-gray-300 hover:text-agri-gold transition-colors">
                  Cultivation
                </Link>
              </li>
              <li>
                <Link to="/tools?category=Planting" className="text-gray-300 hover:text-agri-gold transition-colors">
                  Planting
                </Link>
              </li>
              <li>
                <Link to="/tools?category=Irrigation" className="text-gray-300 hover:text-agri-gold transition-colors">
                  Irrigation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-agri-gold mt-0.5" />
                <span className="text-gray-300">123 Farm Road, Agricity, CA 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-agri-gold" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-agri-gold" />
                <span className="text-gray-300">info@agrirent.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AgriRent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
