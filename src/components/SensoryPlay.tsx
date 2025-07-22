import React, { useState, useEffect } from 'react';
import { Palette, Sparkles, Circle, Square, Triangle, ChevronRight, ChevronLeft } from 'lucide-react';

const SensoryPlay: React.FC = () => {
  const [activeActivity, setActiveActivity] = useState<string>('colors');
  const [currentColorPage, setCurrentColorPage] = useState<number>(0);
  
  const colorPages = [
    [
      { color: '#FF6B6B', name: 'Red' },
      { color: '#4ECDC4', name: 'Teal' },
      { color: '#45B7D1', name: 'Blue' },
      { color: '#FFA07A', name: 'Orange' },
      { color: '#98D8C8', name: 'Green' }
    ],
    [
      { color: '#9B59B6', name: 'Purple' },
      { color: '#F39C12', name: 'Yellow' },
      { color: '#E91E63', name: 'Pink' },
      { color: '#8B4513', name: 'Brown' },
      { color: '#2C3E50', name: 'Navy' }
    ]
  ];
  
  const [selectedColor, setSelectedColor] = useState<{color: string, name: string}>(colorPages[0][0]);
  const [shapes, setShapes] = useState<Array<{id: number, type: string, color: string, x: number, y: number, size: number}>>([]);
  const [showColorName, setShowColorName] = useState<string | null>(null);

  const activities = [
    { id: 'colors', name: 'Color Exploration', icon: Palette, color: 'from-red-400 to-pink-400' },
    { id: 'shapes', name: 'Shape Garden', icon: Circle, color: 'from-blue-400 to-purple-400' },
    { id: 'patterns', name: 'Pattern Magic', icon: Sparkles, color: 'from-green-400 to-teal-400' }
  ];

  const shapeTypes = ['circle', 'square', 'triangle'];
  const patternColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'];

  useEffect(() => {
    if (activeActivity === 'shapes') {
      // Initialize with some shapes
      const initialShapes = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        color: colorPages[currentColorPage][Math.floor(Math.random() * colorPages[currentColorPage].length)].color,
        x: Math.random() * 80 + 10,
        y: Math.random() * 60 + 20,
        size: Math.random() * 40 + 30
      }));
      setShapes(initialShapes);
    }
  }, [activeActivity, currentColorPage]);

  const handleColorTouch = (colorItem: {color: string, name: string}) => {
    setSelectedColor(colorItem);
    setShowColorName(colorItem.name);
    
    // Hide the color name after 2 seconds
    setTimeout(() => {
      setShowColorName(null);
    }, 2000);
  };

  const nextColorPage = () => {
    if (currentColorPage < colorPages.length - 1) {
      setCurrentColorPage(prev => prev + 1);
      setSelectedColor(colorPages[currentColorPage + 1][0]);
    }
  };

  const prevColorPage = () => {
    if (currentColorPage > 0) {
      setCurrentColorPage(prev => prev - 1);
      setSelectedColor(colorPages[currentColorPage - 1][0]);
    }
  };

  const addShape = (event: React.MouseEvent<HTMLDivElement>) => {
    if (activeActivity !== 'shapes') return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    
    const newShape = {
      id: Date.now(),
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      color: selectedColor.color,
      x: Math.max(5, Math.min(95, x)),
      y: Math.max(5, Math.min(95, y)),
      size: Math.random() * 40 + 30
    };
    
    setShapes(prev => [...prev, newShape]);
  };

  const renderShape = (shape: any) => {
    const style = {
      position: 'absolute' as const,
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      backgroundColor: shape.color,
      transform: 'translate(-50%, -50%)',
      animation: 'float 3s ease-in-out infinite'
    };

    switch (shape.type) {
      case 'circle':
        return <div key={shape.id} style={{...style, borderRadius: '50%'}} />;
      case 'square':
        return <div key={shape.id} style={{...style, borderRadius: '8px'}} />;
      case 'triangle':
        return (
          <div
            key={shape.id}
            style={{
              ...style,
              backgroundColor: 'transparent',
              width: 0,
              height: 0,
              borderLeft: `${shape.size/2}px solid transparent`,
              borderRight: `${shape.size/2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Sensory Play & Learn
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive visual experiences designed to stimulate sensory development
          </p>
        </div>

        {/* Activity Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <button
                key={activity.id}
                onClick={() => setActiveActivity(activity.id)}
                className={`flex flex-col items-center p-6 rounded-3xl transition-all duration-300 ${
                  activeActivity === activity.id
                    ? `bg-gradient-to-r ${activity.color} text-white shadow-2xl scale-105`
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-lg'
                }`}
              >
                <Icon className="w-8 h-8 mb-2" />
                <span className="font-medium">{activity.name}</span>
              </button>
            );
          })}
        </div>

        {/* Activity Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
          {activeActivity === 'colors' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={prevColorPage}
                  disabled={currentColorPage === 0}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    currentColorPage === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl hover:scale-105'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="font-medium">Previous</span>
                </button>

                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Color Exploration</h2>
                  <div className="flex space-x-2 justify-center">
                    {colorPages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentColorPage ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={nextColorPage}
                  disabled={currentColorPage === colorPages.length - 1}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    currentColorPage === colorPages.length - 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl hover:scale-105'
                  }`}
                >
                  <span className="font-medium">Next</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                {colorPages[currentColorPage].map((colorItem, index) => (
                  <div
                    key={index}
                    className="group aspect-square rounded-3xl cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl relative overflow-hidden"
                    style={{ backgroundColor: colorItem.color }}
                    onClick={() => handleColorTouch(colorItem)}
                  >
                    <div className="w-full h-full rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity duration-300">
                      <span className="text-white font-bold text-xl">{colorItem.name}</span>
                    </div>
                    
                    {/* Color name popup */}
                    {showColorName === colorItem.name && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg animate-bounce z-10">
                        <span className="text-gray-800 font-bold text-lg">{colorItem.name}</span>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <div
                  className="mx-auto w-32 h-32 rounded-full transition-all duration-500 animate-pulse shadow-2xl mb-6"
                  style={{ backgroundColor: selectedColor.color }}
                />
                
                {/* Sign Language Demonstration */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 max-w-md mx-auto text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Sign Language</h3>
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-center mb-4">
                    <div className="text-4xl mb-2">🤟</div>
                    <p className="text-sm">Signing "{selectedColor.name}"</p>
                  </div>
                  <p className="text-2xl font-bold text-center">
                    {selectedColor.name}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeActivity === 'shapes' && (
            <div>
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Shape Garden</h2>
              <p className="text-center text-gray-600 mb-8">Tap anywhere to add colorful shapes!</p>
              
              <div className="mb-6">
                <div className="flex justify-center gap-4">
                  {colorPages[currentColorPage].map((colorItem, index) => (
                    <button
                      key={index}
                      className={`w-12 h-12 rounded-full transition-all duration-300 ${
                        selectedColor.color === colorItem.color ? 'scale-125 ring-4 ring-white shadow-lg' : 'hover:scale-110'
                      }`}
                      style={{ backgroundColor: colorItem.color }}
                      onClick={() => setSelectedColor(colorItem)}
                    />
                  ))}
                </div>
              </div>

              <div
                className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden cursor-pointer border-4 border-dashed border-blue-300"
                onClick={addShape}
              >
                {shapes.map(renderShape)}
                {shapes.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-2xl font-medium text-gray-500">Tap to create shapes!</p>
                  </div>
                )}
              </div>
              
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShapes([])}
                  className="px-8 py-3 bg-gradient-to-r from-red-400 to-pink-400 text-white rounded-full font-medium hover:from-red-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Clear All Shapes
                </button>
              </div>
            </div>
          )}

          {activeActivity === 'patterns' && (
            <div>
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Pattern Magic</h2>
              <div className="space-y-8">
                {/* Animated Pattern 1 */}
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Rainbow Waves</h3>
                  <div className="flex justify-center space-x-2">
                    {patternColors.map((color, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 rounded-full animate-bounce"
                        style={{
                          backgroundColor: color,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Animated Pattern 2 */}
                <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-3xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Spinning Circles</h3>
                  <div className="flex justify-center items-center space-x-4">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <div
                        key={index}
                        className="w-16 h-16 rounded-full animate-spin border-4 border-t-transparent"
                        style={{
                          borderColor: patternColors[index],
                          borderTopColor: 'transparent',
                          animationDuration: `${2 + index * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Animated Pattern 3 */}
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Growing Squares</h3>
                  <div className="flex justify-center space-x-3">
                    {patternColors.slice(0, 5).map((color, index) => (
                      <div
                        key={index}
                        className="animate-pulse rounded-lg"
                        style={{
                          backgroundColor: color,
                          width: `${(index + 1) * 20}px`,
                          height: `${(index + 1) * 20}px`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default SensoryPlay;