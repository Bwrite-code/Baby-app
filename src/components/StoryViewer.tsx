import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Play, Pause } from 'lucide-react';
import { Story, StoryPage } from '../types';
import SignLanguageWindow from './SignLanguageWindow';

interface StoryViewerProps {
  story: Story;
  onBack: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ story, onBack }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSignLanguage, setShowSignLanguage] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  const currentPage = story.pages[currentPageIndex];

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        if (currentPageIndex < story.pages.length - 1) {
          setCurrentPageIndex(prev => prev + 1);
          setShowSignLanguage(true);
          setAnimatedElements(new Set());
        } else {
          setIsPlaying(false);
        }
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentPageIndex, isPlaying, story.pages.length]);

  useEffect(() => {
    setShowSignLanguage(true);
    const timer = setTimeout(() => setShowSignLanguage(false), 3000);
    return () => clearTimeout(timer);
  }, [currentPageIndex]);

  const nextPage = () => {
    if (currentPageIndex < story.pages.length - 1) {
      setCurrentPageIndex(prev => prev + 1);
      setAnimatedElements(new Set());
    }
  };

  const prevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
      setAnimatedElements(new Set());
    }
  };

  const handleInteractiveClick = (elementId: string, x: number, y: number) => {
    setAnimatedElements(prev => new Set(prev).add(elementId));
    
    // Create a ripple effect at the click position
    const ripple = document.createElement('div');
    ripple.className = 'absolute bg-yellow-400 rounded-full opacity-70 animate-ping pointer-events-none';
    ripple.style.left = `${x}%`;
    ripple.style.top = `${y}%`;
    ripple.style.width = '60px';
    ripple.style.height = '60px';
    ripple.style.transform = 'translate(-50%, -50%)';
    
    const container = document.getElementById('story-container');
    if (container) {
      container.appendChild(ripple);
      setTimeout(() => container.removeChild(ripple), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-purple-200 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Back to Stories</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">{story.title}</h1>
            <p className="text-sm text-gray-600">
              Page {currentPageIndex + 1} of {story.pages.length}
            </p>
          </div>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
              isPlaying ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
            }`}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            <span className="font-medium">{isPlaying ? 'Pause' : 'Auto Play'}</span>
          </button>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div id="story-container" className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100">
            <img
              src={currentPage.image}
              alt={currentPage.text}
              className="w-full h-full object-cover"
            />
            
            {/* Interactive Elements */}
            {currentPage.interactiveElements?.map((element) => (
              <button
                key={element.id}
                className={`absolute transition-all duration-500 hover:scale-110 ${
                  animatedElements.has(element.id) ? 'animate-bounce' : ''
                }`}
                style={{
                  left: `${element.x}%`,
                  top: `${element.y}%`,
                  width: `${element.width}%`,
                  height: `${element.height}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => handleInteractiveClick(element.id, element.x, element.y)}
              >
                <div className="w-full h-full bg-yellow-300/30 rounded-full animate-pulse" />
              </button>
            ))}
            
            {/* Navigation Buttons */}
            <button
              onClick={prevPage}
              disabled={currentPageIndex === 0}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all ${
                currentPageIndex === 0
                  ? 'bg-gray-300 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:scale-110'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextPage}
              disabled={currentPageIndex === story.pages.length - 1}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all ${
                currentPageIndex === story.pages.length - 1
                  ? 'bg-gray-300 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:scale-110'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Text Content */}
          <div className="p-8 bg-gradient-to-r from-purple-50 to-pink-50">
            <p className="text-3xl font-bold text-center text-gray-800 mb-4">
              {currentPage.text}
            </p>
            <div className="flex justify-center space-x-2">
              {story.pages.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentPageIndex
                      ? 'bg-purple-500 scale-125'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sign Language Window */}
      <SignLanguageWindow
        text={currentPage.signLanguageText}
        isVisible={showSignLanguage}
      />
    </div>
  );
};

export default StoryViewer;