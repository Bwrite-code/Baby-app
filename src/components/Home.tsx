import React, { useState, useEffect } from 'react';
import { Play, Book, Search, Palette, Star, Heart, Sparkles, Baby, Users, Clock } from 'lucide-react';

interface HomeProps {
  onViewChange: (view: string) => void;
}

const Home: React.FC<HomeProps> = ({ onViewChange }) => {
  const [floatingShapes, setFloatingShapes] = useState<Array<{id: number, x: number, y: number, color: string, size: number, shape: string}>>([]);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: Play,
      title: 'Interactive Stories',
      description: 'Engaging picture-based narratives with sign language integration',
      color: 'bg-blue-500',
      gradient: 'from-blue-400 to-blue-600',
      hoverGradient: 'from-blue-500 to-blue-700',
      action: () => onViewChange('stories'),
      stats: '12+ Stories',
      highlight: 'Most Popular'
    },
    {
      icon: Book,
      title: 'Visual Dictionary',
      description: 'First words with beautiful images and sign demonstrations',
      color: 'bg-green-500',
      gradient: 'from-green-400 to-green-600',
      hoverGradient: 'from-green-500 to-green-700',
      action: () => onViewChange('dictionary'),
      stats: '100+ Words',
      highlight: 'Essential Learning'
    },
    {
      icon: Palette,
      title: 'Sensory Play',
      description: 'Interactive visual experiences for sensory development',
      color: 'bg-purple-500',
      gradient: 'from-purple-400 to-purple-600',
      hoverGradient: 'from-purple-500 to-purple-700',
      action: () => onViewChange('sensory'),
      stats: '10+ Activities',
      highlight: 'New Features'
    }
  ];

  const testimonials = [
    {
      text: "My deaf daughter loves the visual stories! The sign language integration is perfect.",
      author: "Sarah M.",
      role: "Parent of 18-month-old"
    },
    {
      text: "The color exploration helped my son learn his first signs. Amazing app!",
      author: "David L.",
      role: "Father of twins"
    },
    {
      text: "As a deaf parent, this app bridges communication beautifully with my hearing child.",
      author: "Maria R.",
      role: "Deaf parent"
    }
  ];

  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'];
  const shapes = ['circle', 'square', 'triangle', 'star'];

  useEffect(() => {
    // Create floating background shapes
    const initialShapes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 30 + 20,
      shape: shapes[Math.floor(Math.random() * shapes.length)]
    }));
    setFloatingShapes(initialShapes);

    // Rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(testimonialInterval);
  }, []);

  const renderFloatingShape = (shape: any) => {
    const baseStyle = {
      position: 'absolute' as const,
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      backgroundColor: shape.color,
      opacity: 0.1,
      animation: `float-${shape.id} ${8 + Math.random() * 4}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 2}s`
    };

    switch (shape.shape) {
      case 'circle':
        return <div key={shape.id} style={{...baseStyle, borderRadius: '50%'}} />;
      case 'square':
        return <div key={shape.id} style={{...baseStyle, borderRadius: '8px'}} />;
      case 'triangle':
        return (
          <div
            key={shape.id}
            style={{
              ...baseStyle,
              backgroundColor: 'transparent',
              width: 0,
              height: 0,
              borderLeft: `${shape.size/2}px solid transparent`,
              borderRight: `${shape.size/2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
              opacity: 0.1
            }}
          />
        );
      case 'star':
        return (
          <div key={shape.id} style={{...baseStyle, backgroundColor: 'transparent'}}>
            <Star className="w-full h-full" style={{color: shape.color, opacity: 0.1}} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingShapes.map(renderFloatingShape)}
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-400 to-pink-400 rounded-full p-6 mb-8 animate-bounce">
            <Book className="w-16 h-16 text-white" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Visual Storytime
          </h1>
          
          <div className="relative">
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
              Interactive storybooks designed for 
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold"> deaf babies </span>
              and 
              <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent font-bold"> visual learners</span>
            </p>
            
            {/* Floating hearts animation */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Heart className="w-6 h-6 text-pink-400 animate-ping" />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-3">
                <Baby className="w-8 h-8 text-orange-500 mr-2" />
                <span className="text-3xl font-bold text-gray-800">3m-3y</span>
              </div>
              <p className="text-gray-600 font-medium">Age Range</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-blue-500 mr-2" />
                <span className="text-3xl font-bold text-gray-800">10k+</span>
              </div>
              <p className="text-gray-600 font-medium">Happy Families</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-3">
                <Sparkles className="w-8 h-8 text-purple-500 mr-2" />
                <span className="text-3xl font-bold text-gray-800">100+</span>
              </div>
              <p className="text-gray-600 font-medium">Learning Activities</p>
            </div>
          </div>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer relative overflow-hidden ${
                  activeFeature === index ? 'scale-105 shadow-2xl' : ''
                }`}
                onClick={feature.action}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                {/* Highlight Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  {feature.highlight}
                </div>

                <div className={`bg-gradient-to-r ${activeFeature === index ? feature.hoverGradient : feature.gradient} rounded-2xl p-6 w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 group-hover:rotate-6`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {feature.stats}
                  </span>
                  <div className={`bg-gradient-to-r ${feature.gradient} text-white px-6 py-3 rounded-full font-medium group-hover:scale-110 transition-all duration-300 flex items-center space-x-2`}>
                    <span>Explore</span>
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Interactive ripple effect */}
                {activeFeature === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-3xl animate-pulse" />
                )}
              </div>
            );
          })}
        </div>

        {/* Testimonials Carousel */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Heart className="w-8 h-8 text-red-400 mr-3" />
              What Families Say
              <Heart className="w-8 h-8 text-red-400 ml-3" />
            </h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white text-center transform transition-all duration-500">
              <div className="text-6xl mb-4">💝</div>
              <p className="text-xl md:text-2xl font-medium mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="font-bold text-lg">{testimonials[currentTestimonial].author}</p>
                <p className="text-blue-100">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section with Interactive Elements */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-yellow-500 mr-4 animate-spin" />
            Why Visual Storytime?
            <Sparkles className="w-10 h-10 text-yellow-500 ml-4 animate-spin" />
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-full p-3 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Visual Learning Excellence</h3>
                  <p className="text-gray-600">Stories told through engaging, colorful illustrations with slow-paced animations perfect for processing.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full p-3 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Sign Language Integration</h3>
                  <p className="text-gray-600">Consistent sign language demonstrations help build vocabulary and communication skills naturally.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-full p-3 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Elements</h3>
                  <p className="text-gray-600">Simple touch interactions encourage exploration and engagement with the stories and activities.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full p-3 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Parent Resources</h3>
                  <p className="text-gray-600">Helpful notes and suggestions for parents to extend learning beyond the app experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic CSS for floating animations */}
      <style jsx>{`
        ${floatingShapes.map(shape => `
          @keyframes float-${shape.id} {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(10px, -15px) rotate(90deg); }
            50% { transform: translate(-5px, -25px) rotate(180deg); }
            75% { transform: translate(-15px, -10px) rotate(270deg); }
          }
        `).join('')}
      `}</style>
    </div>
  );
};

export default Home;