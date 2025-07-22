import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Stories from './components/Stories';
import Dictionary from './components/Dictionary';
import SensoryPlay from './components/SensoryPlay';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <Home onViewChange={setCurrentView} />;
      case 'stories':
        return <Stories />;
      case 'dictionary':
        return <Dictionary />;
      case 'sensory':
        return <SensoryPlay />;
      default:
        return <Home onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      {renderCurrentView()}
    </div>
  );
}

export default App;