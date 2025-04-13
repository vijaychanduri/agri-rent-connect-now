
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import ToolCard from '../components/ToolCard';
import { tools, categories, searchTools, getToolsByCategory } from '../data/toolsData';
import type { Tool } from '../data/toolsData';

const Tools = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const category = searchParams.get('category') || '';
    setSelectedCategory(category);
    
    // Apply filters
    filterTools(searchQuery, category);
  }, [searchParams]);

  const filterTools = (query: string, category: string) => {
    let filtered = tools;
    
    // Apply search query filter
    if (query) {
      filtered = searchTools(query);
    }
    
    // Apply category filter
    if (category) {
      filtered = filtered.filter(tool => tool.category === category);
    }
    
    setFilteredTools(filtered);
  };

  const handleSearch = (query: string, category: string) => {
    setSearchQuery(query);
    setSelectedCategory(category);
    
    // Update URL params
    const params: { [key: string]: string } = {};
    if (query) params.query = query;
    if (category) params.category = category;
    setSearchParams(params);
    
    // Apply filters
    filterTools(query, category);
  };

  const handleCategoryClick = (category: string) => {
    const newCategory = selectedCategory === category ? '' : category;
    setSelectedCategory(newCategory);
    
    // Update URL params
    const params: { [key: string]: string } = {};
    if (searchQuery) params.query = searchQuery;
    if (newCategory) params.category = newCategory;
    setSearchParams(params);
    
    // Apply filters
    filterTools(searchQuery, newCategory);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="bg-agri-green py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Agricultural Tools for Rent</h1>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Categories */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-agri-darkGreen">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedCategory === category
                      ? 'bg-agri-green text-white'
                      : 'bg-white text-agri-green border border-agri-green/30 hover:border-agri-green'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Results */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-agri-darkGreen">
                {filteredTools.length} {filteredTools.length === 1 ? 'Tool' : 'Tools'} Available
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="border border-gray-300 rounded p-1 text-sm">
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>
            
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-2 text-agri-darkGreen">No Tools Found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any tools matching your search criteria. Try adjusting your filters or search terms.
                </p>
                <button 
                  onClick={() => handleSearch('', '')} 
                  className="text-agri-green font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tools;
