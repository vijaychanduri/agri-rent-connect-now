
import { CheckCircle, Calendar, DollarSign, Truck } from 'lucide-react';

const steps = [
  {
    icon: <CheckCircle className="h-12 w-12 text-agri-green" />,
    title: "Find the Right Tool",
    description: "Browse our extensive catalog of agricultural tools and equipment available for rent in your area."
  },
  {
    icon: <Calendar className="h-12 w-12 text-agri-green" />,
    title: "Book Your Rental",
    description: "Contact the owner through our platform to arrange rental details, including pickup and return dates."
  },
  {
    icon: <DollarSign className="h-12 w-12 text-agri-green" />,
    title: "Secure Payment",
    description: "Pay directly to the tool owner based on daily or weekly rates listed on the platform."
  },
  {
    icon: <Truck className="h-12 w-12 text-agri-green" />,
    title: "Pickup & Return",
    description: "Pick up the equipment at the agreed location, use it for your farming needs, and return it on time."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-agri-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agri-darkGreen">How AgriRent Works</h2>
          <p className="text-agri-green/80 max-w-2xl mx-auto">
            Our platform makes it easy to rent agricultural tools from local farmers in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-agri-cream w-8 h-8 rounded-full flex items-center justify-center border-2 border-agri-green font-bold text-agri-darkGreen">
                {index + 1}
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-agri-darkGreen">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
