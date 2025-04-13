
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Separator } from "@/components/ui/separator";
import { Tractor, Users, Leaf, DollarSign, CheckCircle, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-agri-green py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About AgriRent</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Connecting farmers and making agricultural tools accessible to everyone
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="md:flex md:items-center md:space-x-8">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop" 
                  alt="Farmers working together" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-agri-darkGreen">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  At AgriRent, we believe that every farmer should have access to the tools and equipment they need to succeed, regardless of their budget or farm size. Our mission is to create a community where farmers can share resources, reduce costs, and build stronger local agricultural networks.
                </p>
                <p className="text-gray-700">
                  By connecting farmers who have idle equipment with those who need tools temporarily, we're fostering a more sustainable and efficient agricultural system. This sharing economy approach helps reduce the financial burden on small farmers while maximizing the utility of existing agricultural resources.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-agri-cream/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-agri-darkGreen">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 bg-agri-green/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-agri-green" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-agri-darkGreen">Community</h3>
                <p className="text-gray-700">
                  We believe in the power of farming communities to support each other through resource sharing and knowledge exchange.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 bg-agri-green/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-agri-green" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-agri-darkGreen">Sustainability</h3>
                <p className="text-gray-700">
                  By maximizing the use of existing tools, we reduce waste and the environmental impact of manufacturing new equipment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 bg-agri-green/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-agri-green" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-agri-darkGreen">Affordability</h3>
                <p className="text-gray-700">
                  We're committed to making farming more affordable by providing access to equipment without the high costs of ownership.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="md:flex md:items-center md:space-x-8">
              <div className="md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4 text-agri-darkGreen">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  AgriRent was founded by a group of farmers who recognized a common problem: expensive equipment sitting idle for much of the year, while other farmers struggled to afford the tools they needed.
                </p>
                <p className="text-gray-700 mb-4">
                  What started as a local equipment sharing arrangement between neighbors has grown into a comprehensive platform connecting farmers across the region. Today, AgriRent helps hundreds of farmers access the tools they need while providing equipment owners with a way to earn income from their idle assets.
                </p>
                <p className="text-gray-700">
                  Our founding principle remains unchanged: when farmers share resources, everyone benefits. The agricultural community becomes stronger, more sustainable, and more resilient.
                </p>
              </div>
              <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&h=600&fit=crop" 
                  alt="Farmland" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-agri-cream/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-agri-darkGreen">Benefits of Using AgriRent</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-agri-darkGreen">For Tool Renters</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-agri-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Access to a wide variety of agricultural tools without the upfront investment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-agri-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Rent only when you need equipment, avoiding storage and maintenance costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-agri-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Try different equipment models before making purchase decisions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-agri-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Connect with experienced local farmers who can provide usage advice</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-agri-darkGreen">For Tool Owners</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-agri-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Generate income from equipment during periods when it would otherwise sit idle</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-agri-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Offset the costs of ownership, maintenance, and depreciation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-agri-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Help fellow farmers in your community succeed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-agri-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Build relationships and network with other local agricultural professionals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section (Optional) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-agri-darkGreen">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-agri-lightGreen rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-agri-darkGreen">Donta Williams</h3>
                <p className="text-agri-green">Founder & CEO</p>
                <p className="text-gray-700 mt-2">
                  Third-generation farmer with a passion for agricultural innovation and community building.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-agri-lightGreen rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-agri-darkGreen">Maria Rodriguez</h3>
                <p className="text-agri-green">Operations Director</p>
                <p className="text-gray-700 mt-2">
                  Agricultural engineer with expertise in equipment management and sustainable farming practices.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-agri-lightGreen rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-agri-darkGreen">James Chen</h3>
                <p className="text-agri-green">Community Manager</p>
                <p className="text-gray-700 mt-2">
                  Small farm owner devoted to building strong agricultural communities through resource sharing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
