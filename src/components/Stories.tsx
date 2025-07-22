import React, { useState } from 'react';
import { Play, Clock, Users } from 'lucide-react';
import { stories } from '../data/stories';
import { Story } from '../types';
import StoryViewer from './StoryViewer';

const Stories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  if (selectedStory) {
    return <StoryViewer story={selectedStory} onBack={() => setSelectedStory(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Interactive Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Picture-based narratives with integrated sign language designed for visual learners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-white/20"
              onClick={() => setSelectedStory(story)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={story.thumbnail}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/30 transition-colors">
                      <Play className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">Play Story</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {story.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{story.ageRange}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{story.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {story.pages.length} pages
                  </span>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    Start Reading
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">More Stories Coming Soon!</h2>
            <p className="text-gray-600 text-lg mb-6">
              We're constantly adding new interactive stories designed for visual learners
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Animal Adventures</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Color & Shape Stories</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Daily Routine Tales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;