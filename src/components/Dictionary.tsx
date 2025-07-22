import React, { useState } from 'react';
import { Search, Play, BookOpen, Heart } from 'lucide-react';
import { categories } from '../data/dictionary';
import { DictionaryItem } from '../types';

const Dictionary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<DictionaryItem | null>(null);

  const filteredItems = categories.flatMap(category => 
    category.items.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.word.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
  );

  const handleItemClick = (item: DictionaryItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            My First Words
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visual dictionary with sign language demonstrations for early learning
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for words..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 focus:outline-none focus:ring-4 focus:ring-blue-200 text-lg"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
            }`}
          >
            All Words
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                  : `bg-white/80 text-gray-700 hover:bg-white hover:shadow-md ${category.color}`
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Dictionary Items Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-white/20"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.word}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                  {item.word}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 capitalize">
                    {item.category}
                  </span>
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                    View Sign
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No words found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter</p>
          </div>
        )}
      </div>

      {/* Modal for Selected Item */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={closeModal}>
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video">
              <img
                src={selectedItem.image}
                alt={selectedItem.word}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{selectedItem.word}</h2>
              
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 mb-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Sign Language Demo</h3>
                  <Play className="w-6 h-6" />
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-4xl mb-2">👋</div>
                  <p className="text-sm">Sign demonstration for "{selectedItem.word}"</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-400" />
                    Parent Notes
                  </h4>
                  <p className="text-gray-600 bg-gray-50 rounded-xl p-4">
                    {selectedItem.parentNotes}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Common Phrases</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.commonPhrases.map((phrase, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-green-100 to-blue-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {phrase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dictionary;