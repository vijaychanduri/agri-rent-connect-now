
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Tool } from '../data/toolsData';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <Card className="card-shadow overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={tool.image} 
          alt={tool.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        {tool.featured && (
          <Badge className="absolute top-2 right-2 bg-agri-gold text-agri-darkGreen">
            Featured
          </Badge>
        )}
        {!tool.available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Currently Rented</span>
          </div>
        )}
      </div>
      <CardContent className="pt-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-agri-darkGreen">{tool.name}</h3>
          <Badge variant="outline" className="bg-agri-cream text-agri-green border-agri-green">
            {tool.category}
          </Badge>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{tool.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Daily Rate</p>
            <p className="font-bold text-agri-green">${tool.dailyRate}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Weekly Rate</p>
            <p className="font-bold text-agri-green">${tool.weeklyRate}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-100 pt-4">
        <div className="w-full flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {tool.owner.location}
          </span>
          <Link 
            to={`/tools/${tool.id}`}
            className="text-agri-green hover:text-agri-darkGreen font-medium"
          >
            View Details
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
