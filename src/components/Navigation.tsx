import React from 'react';
import { Home, Book, BookOpen, Gamepad2 } from 'lucide-react';

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'stories', label: 'Stories', icon: Book },
    { id: 'dictionary', label: 'Dictionary', icon: BookOpen },
    { id: 'sensory', label: 'Sensory Play', icon: Gamepad2 }
  ];

  return (
    <nav className="bg-white shadow-lg border-b-4 border-orange-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-orange-400 to-pink-400 rounded-full p-2">
              <Book className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Visual Storytime
            </h1>
          </div>
          
          <div className="flex space-x-1 md:space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`flex flex-col items-center px-3 py-2 rounded-lg transition-all duration-300 ${
                    currentView === item.id
                      ? 'bg-orange-100 text-orange-600 transform scale-105'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;