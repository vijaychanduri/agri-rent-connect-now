
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Tractor } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Tractor className="h-8 w-8 text-agri-green" />
            <span className="text-xl font-bold text-agri-darkGreen">AgriRent</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-agri-darkGreen hover:text-agri-green transition-colors">
              Home
            </Link>
            <Link to="/tools" className="text-agri-darkGreen hover:text-agri-green transition-colors">
              Tools
            </Link>
            <Link to="/about" className="text-agri-darkGreen hover:text-agri-green transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-agri-darkGreen hover:text-agri-green transition-colors">
              Contact
            </Link>
            <Button className="bg-agri-gold hover:bg-amber-600 text-agri-darkGreen">
              List Your Tool
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-agri-green">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-agri-darkGreen hover:text-agri-green transition-colors" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/tools" className="text-agri-darkGreen hover:text-agri-green transition-colors" onClick={toggleMenu}>
                Tools
              </Link>
              <Link to="/about" className="text-agri-darkGreen hover:text-agri-green transition-colors" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/contact" className="text-agri-darkGreen hover:text-agri-green transition-colors" onClick={toggleMenu}>
                Contact
              </Link>
              <Button className="bg-agri-gold hover:bg-amber-600 text-agri-darkGreen w-full">
                List Your Tool
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
