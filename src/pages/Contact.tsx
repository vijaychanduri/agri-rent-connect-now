
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-agri-green py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have questions about AgriRent? We're here to help you connect with the right tools and farmers.
            </p>
          </div>
        </section>
        
        {/* Contact Form & Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                {/* Contact Information */}
                <div className="md:w-1/3 bg-agri-darkGreen text-white p-8">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-agri-gold mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Our Location</h3>
                        <p className="text-white/80">123 Farm Road, Agricity, CA 12345</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-agri-gold mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Phone Number</h3>
                        <p className="text-white/80">(555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-agri-gold mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Email Address</h3>
                        <p className="text-white/80">info@agrirent.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-agri-gold mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-white/80">Monday - Friday: 9AM - 5PM</p>
                        <p className="text-white/80">Saturday: 10AM - 2PM</p>
                        <p className="text-white/80">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-bold mb-6 text-agri-darkGreen">Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Select value={subject} onValueChange={setSubject}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="rent">Renting Equipment</SelectItem>
                          <SelectItem value="list">Listing Equipment</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can we help you?"
                        required
                        className="w-full h-32"
                      />
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        className="btn-primary w-full"
                        disabled={loading}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section (Optional - Could be replaced with a real map) */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-gray-200 h-80 rounded-lg overflow-hidden">
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-500">Map placeholder - Would integrate Google Maps or similar here</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-agri-cream/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-agri-darkGreen">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-agri-darkGreen">How do I list my tools for rent?</h3>
                <p className="text-gray-700">
                  To list your tools, create an account and click on "List Your Equipment" in the navigation menu. Fill out the required information about your tool, including photos, specifications, and rental rates.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-agri-darkGreen">How does payment work?</h3>
                <p className="text-gray-700">
                  Currently, AgriRent facilitates the connection between tool owners and renters. Payments are arranged directly between the parties. We recommend clear communication about payment terms before finalizing any rental.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-agri-darkGreen">What if a tool gets damaged during rental?</h3>
                <p className="text-gray-700">
                  We recommend that tool owners and renters agree on terms regarding potential damage before the rental period begins. Many owners require a security deposit that can be used to cover repairs if necessary.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-agri-darkGreen">Is there a membership fee to join AgriRent?</h3>
                <p className="text-gray-700">
                  No, AgriRent is free to join for both tool owners and renters. We believe in making agricultural tool sharing as accessible as possible.
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

export default Contact;
