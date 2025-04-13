
import Hero from '../components/Hero';
import FeaturedTools from '../components/FeaturedTools';
import HowItWorks from '../components/HowItWorks';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <FeaturedTools />
        <HowItWorks />
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agri-darkGreen">What Farmers Say</h2>
              <p className="text-agri-green/80 max-w-2xl mx-auto">
                Hear from farmers who have used our platform to rent and share agricultural tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-agri-cream p-6 rounded-lg shadow-md">
                <p className="italic text-gray-700 mb-4">
                  "AgriRent saved me thousands of dollars! Instead of buying a new tractor, I rented one when I needed it. The process was simple and the equipment was in great condition."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-agri-lightGreen rounded-full"></div>
                  <div>
                    <p className="font-bold text-agri-darkGreen">James Wilson</p>
                    <p className="text-sm text-agri-green">Small Farm Owner</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-agri-cream p-6 rounded-lg shadow-md">
                <p className="italic text-gray-700 mb-4">
                  "I have several tools that sit idle for months. Listing them on AgriRent has generated extra income and helped other farmers in my community. It's a win-win!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-agri-lightGreen rounded-full"></div>
                  <div>
                    <p className="font-bold text-agri-darkGreen">Maria Rodriguez</p>
                    <p className="text-sm text-agri-green">Equipment Owner</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-agri-cream p-6 rounded-lg shadow-md">
                <p className="italic text-gray-700 mb-4">
                  "As a new farmer, I couldn't afford to buy all the equipment I needed. AgriRent connected me with affordable tools that helped me get my farm started."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-agri-lightGreen rounded-full"></div>
                  <div>
                    <p className="font-bold text-agri-darkGreen">David Chen</p>
                    <p className="text-sm text-agri-green">New Farmer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-agri-green text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Farming Experience?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community of farmers sharing agricultural tools and equipment to make farming more accessible and sustainable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-agri-gold hover:bg-amber-600 text-agri-darkGreen font-bold px-8 py-3">
                <Link to="/tools">Rent a Tool</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent hover:bg-white/10 border-white text-white font-bold px-8 py-3">
                <Link to="/contact">List Your Equipment</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
