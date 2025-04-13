
export interface Tool {
  id: number;
  name: string;
  category: string;
  image: string;
  dailyRate: number;
  weeklyRate: number;
  description: string;
  owner: {
    name: string;
    location: string;
    phone: string;
  };
  available: boolean;
  featured: boolean;
  specifications: {
    brand?: string;
    model?: string;
    age?: string;
    condition?: string;
    powerSource?: string;
  };
}

export const tools: Tool[] = [
  {
    id: 1,
    name: "Tractor - John Deere",
    category: "Heavy Equipment",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800&h=600&fit=crop",
    dailyRate: 150,
    weeklyRate: 900,
    description: "Powerful John Deere tractor perfect for plowing large fields. Well-maintained and fuel efficient.",
    owner: {
      name: "Donta Williams",
      location: "Greenfield, CA",
      phone: "(555) 123-4567"
    },
    available: true,
    featured: true,
    specifications: {
      brand: "John Deere",
      model: "5075E",
      age: "3 years",
      condition: "Excellent",
      powerSource: "Diesel"
    }
  },
  {
    id: 2,
    name: "Rotary Tiller",
    category: "Cultivation",
    image: "https://images.unsplash.com/photo-1589923187243-856141f4f843?w=800&h=600&fit=crop",
    dailyRate: 75,
    weeklyRate: 450,
    description: "Heavy-duty rotary tiller ideal for preparing soil for planting. Adjustable tilling depth.",
    owner: {
      name: "Donta Williams",
      location: "Greenfield, CA",
      phone: "(555) 123-4567"
    },
    available: true,
    featured: true,
    specifications: {
      brand: "Land Pride",
      model: "RTA2572",
      age: "2 years",
      condition: "Good",
      powerSource: "PTO"
    }
  },
  {
    id: 3,
    name: "Seeder",
    category: "Planting",
    image: "https://images.unsplash.com/photo-1591634616938-1dfa7ee2e617?w=800&h=600&fit=crop",
    dailyRate: 60,
    weeklyRate: 350,
    description: "Precision seeder with adjustable seed rate. Perfect for small to medium-sized fields.",
    owner: {
      name: "Maria Rodriguez",
      location: "Harvest Valley, CA",
      phone: "(555) 234-5678"
    },
    available: true,
    featured: false,
    specifications: {
      brand: "Great Plains",
      model: "1006NT",
      age: "4 years",
      condition: "Good",
      powerSource: "Tractor drawn"
    }
  },
  {
    id: 4,
    name: "Irrigation Pump",
    category: "Irrigation",
    image: "https://images.unsplash.com/photo-1620562301958-8a6c2fd552ac?w=800&h=600&fit=crop",
    dailyRate: 45,
    weeklyRate: 250,
    description: "High-capacity irrigation pump suitable for a variety of irrigation systems.",
    owner: {
      name: "Donta Williams",
      location: "Greenfield, CA",
      phone: "(555) 123-4567"
    },
    available: false,
    featured: false,
    specifications: {
      brand: "Honda",
      model: "WB30",
      age: "2 years",
      condition: "Excellent",
      powerSource: "Gasoline"
    }
  },
  {
    id: 5,
    name: "Combine Harvester",
    category: "Harvesting",
    image: "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?w=800&h=600&fit=crop",
    dailyRate: 200,
    weeklyRate: 1200,
    description: "Efficient combine harvester for grain crops. Includes grain tank and cutting platform.",
    owner: {
      name: "James Chen",
      location: "Southfield, CA",
      phone: "(555) 345-6789"
    },
    available: true,
    featured: true,
    specifications: {
      brand: "New Holland",
      model: "TC5.30",
      age: "5 years",
      condition: "Good",
      powerSource: "Diesel"
    }
  },
  {
    id: 6,
    name: "Sprayer",
    category: "Crop Care",
    image: "https://images.unsplash.com/photo-1508792648687-fac170f2610b?w=800&h=600&fit=crop",
    dailyRate: 85,
    weeklyRate: 500,
    description: "Mounted sprayer with 500-gallon tank and 60-foot boom. Ideal for applying fertilizers and pesticides.",
    owner: {
      name: "Donta Williams",
      location: "Greenfield, CA",
      phone: "(555) 123-4567"
    },
    available: true,
    featured: false,
    specifications: {
      brand: "Hardi",
      model: "Navigator 3000",
      age: "3 years",
      condition: "Very Good",
      powerSource: "Tractor PTO"
    }
  }
];

export const getToolById = (id: number): Tool | undefined => {
  return tools.find(tool => tool.id === id);
};

export const getFeaturedTools = (): Tool[] => {
  return tools.filter(tool => tool.featured);
};

export const getToolsByCategory = (category: string): Tool[] => {
  return tools.filter(tool => tool.category === category);
};

export const getToolsByOwner = (ownerName: string): Tool[] => {
  return tools.filter(tool => tool.owner.name === ownerName);
};

export const searchTools = (query: string): Tool[] => {
  const lowercaseQuery = query.toLowerCase();
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseQuery) || 
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const categories = [
  "Heavy Equipment", 
  "Cultivation", 
  "Planting", 
  "Irrigation", 
  "Harvesting", 
  "Crop Care"
];
