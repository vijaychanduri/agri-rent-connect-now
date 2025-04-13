
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getToolById } from '../data/toolsData';
import { Calendar, Clock, MapPin, Phone, Mail, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/components/ui/use-toast";

const ToolDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [tool, setTool] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [rentalPeriod, setRentalPeriod] = useState('daily');
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const toolData = getToolById(parseInt(id, 10));
      setTool(toolData);
      setLoading(false);
    }
  }, [id]);

  const handleRentNow = () => {
    if (!tool.available) {
      toast({
        title: "Tool Unavailable",
        description: "This tool is currently rented out. Please check back later.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Rental Request Sent!",
      description: `Your request to rent the ${tool.name} has been sent to the owner. They will contact you shortly.`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">Loading tool details...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center bg-gray-50">
          <div className="text-center p-8 max-w-lg">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4 text-agri-darkGreen">Tool Not Found</h1>
            <p className="text-gray-600 mb-6">
              The tool you're looking for could not be found. It may have been removed or the URL might be incorrect.
            </p>
            <Button asChild className="btn-primary">
              <Link to="/tools">Browse All Tools</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Breadcrumbs */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="text-sm text-gray-500">
              <Link to="/" className="hover:text-agri-green">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/tools" className="hover:text-agri-green">Tools</Link>
              <span className="mx-2">/</span>
              <span className="text-agri-green">{tool.name}</span>
            </div>
          </div>
        </div>
        
        {/* Tool Details */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Left Column - Image */}
              <div className="md:w-1/2">
                <div className="relative h-full">
                  <img 
                    src={tool.image} 
                    alt={tool.name} 
                    className="w-full h-full object-cover"
                    style={{ maxHeight: '500px' }}
                  />
                  {tool.featured && (
                    <Badge className="absolute top-4 left-4 bg-agri-gold text-agri-darkGreen">
                      Featured
                    </Badge>
                  )}
                  {!tool.available && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">Currently Rented</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Right Column - Info */}
              <div className="md:w-1/2 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold mb-2 text-agri-darkGreen">{tool.name}</h1>
                    <Badge variant="outline" className="bg-agri-cream text-agri-green">
                      {tool.category}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="rentalPeriod"
                            value="daily"
                            checked={rentalPeriod === 'daily'}
                            onChange={() => setRentalPeriod('daily')}
                            className="form-radio text-agri-green"
                          />
                          <span className="ml-2 text-sm">Daily</span>
                        </label>
                      </div>
                      <div>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="rentalPeriod"
                            value="weekly"
                            checked={rentalPeriod === 'weekly'}
                            onChange={() => setRentalPeriod('weekly')}
                            className="form-radio text-agri-green"
                          />
                          <span className="ml-2 text-sm">Weekly</span>
                        </label>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-agri-green">
                        ${rentalPeriod === 'daily' ? tool.dailyRate : tool.weeklyRate}
                      </span>
                      <span className="text-gray-500 text-sm ml-1">
                        /{rentalPeriod === 'daily' ? 'day' : 'week'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="mb-4">
                  <h3 className="font-semibold mb-2 text-agri-darkGreen">Description</h3>
                  <p className="text-gray-700">{tool.description}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-semibold mb-2 text-agri-darkGreen">Specifications</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(tool.specifications).map(([key, value]: [string, any]) => (
                      <div key={key} className="flex">
                        <span className="text-gray-500 mr-2">{key}:</span>
                        <span className="text-gray-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-2 text-agri-darkGreen">Owner Information</h3>
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-agri-lightGreen rounded-full mr-3 flex items-center justify-center text-white font-bold">
                      {tool.owner.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{tool.owner.name}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={14} className="mr-1" />
                        <span>{tool.owner.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    className={`w-full ${tool.available ? 'btn-primary' : 'bg-gray-300 hover:bg-gray-300 cursor-not-allowed'}`}
                    onClick={handleRentNow}
                    disabled={!tool.available}
                  >
                    {tool.available ? 'Rent Now' : 'Currently Unavailable'}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-agri-green text-agri-green hover:bg-agri-green/10"
                  >
                    Contact Owner
                  </Button>
                </div>
                
                <div className="mt-4 text-xs text-gray-500">
                  <div className="flex items-center mb-1">
                    <Calendar size={14} className="mr-1" />
                    <span>Minimum rental period: 1 day</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>Response time: Usually within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Info Tabs */}
            <div className="p-6 border-t">
              <Accordion type="single" collapsible>
                <AccordionItem value="rental-policies">
                  <AccordionTrigger>Rental Policies</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>A security deposit may be required prior to rental.</li>
                      <li>Renter is responsible for transportation of equipment unless otherwise agreed upon.</li>
                      <li>Equipment must be returned in the same condition as received.</li>
                      <li>Cancellations must be made at least 24 hours in advance.</li>
                      <li>Late returns may incur additional daily rental fees.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="usage-tips">
                  <AccordionTrigger>Usage Tips</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Always read the operation manual before using the equipment.</li>
                      <li>Perform a visual inspection before and after use.</li>
                      <li>Clean the equipment before returning it.</li>
                      <li>Report any issues immediately to the owner.</li>
                      <li>Do not attempt repairs without consulting the owner first.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faqs">
                  <AccordionTrigger>Frequently Asked Questions</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-agri-darkGreen">Is fuel included in the rental?</h4>
                        <p className="text-gray-700">No, renters are responsible for providing their own fuel.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-agri-darkGreen">What if the equipment breaks during my rental?</h4>
                        <p className="text-gray-700">Contact the owner immediately. If the breakdown is due to normal wear and tear, the owner will typically arrange a replacement or repair.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-agri-darkGreen">Can I extend my rental period?</h4>
                        <p className="text-gray-700">Extensions may be possible based on availability. Contact the owner to request an extension.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          {/* Similar Tools Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-agri-darkGreen">Similar Tools You May Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tools
                .filter(t => t.category === tool.category && t.id !== tool.id)
                .slice(0, 3)
                .map(similarTool => (
                  <Link key={similarTool.id} to={`/tools/${similarTool.id}`} className="block">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={similarTool.image} 
                          alt={similarTool.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-agri-darkGreen mb-1">{similarTool.name}</h3>
                        <div className="flex justify-between items-center">
                          <span className="text-agri-green font-bold">${similarTool.dailyRate}/day</span>
                          <Badge variant={similarTool.available ? "outline" : "secondary"}>
                            {similarTool.available ? "Available" : "Rented"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolDetail;
