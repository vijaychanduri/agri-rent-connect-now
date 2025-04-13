
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ToolCard from './ToolCard';
import { getFeaturedTools } from '../data/toolsData';
import { Button } from "@/components/ui/button";
import type { Tool } from '../data/toolsData';

const FeaturedTools = () => {
  const [featuredTools, setFeaturedTools] = useState<Tool[]>([]);

  useEffect(() => {
    const tools = getFeaturedTools();
    setFeaturedTools(tools);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agri-darkGreen">Featured Tools</h2>
          <p className="text-agri-green/80 max-w-2xl mx-auto">
            Browse our selection of high-quality agricultural tools available for rent from local farmers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="btn-primary">
            <Link to="/tools">View All Tools</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
