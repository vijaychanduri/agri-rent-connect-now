
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-agri-cream to-agri-lightGreen/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-agri-darkGreen">
              Rent Agricultural Tools When You Need Them
            </h1>
            <p className="text-lg md:text-xl mb-6 text-agri-green/90">
              Connect with local farmers to rent the equipment you need or earn extra income by renting out your idle tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary">
                <Link to="/tools">Browse Tools</Link>
              </Button>
              <Button asChild variant="outline" className="border-agri-green text-agri-green hover:bg-agri-green/10">
                <Link to="/contact">List Your Equipment</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800&h=600&fit=crop" 
                alt="Tractor in a field" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md">
                <p className="text-agri-darkGreen font-bold">150+ Tools Available</p>
                <p className="text-sm text-agri-green">From 45+ Local Farmers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
