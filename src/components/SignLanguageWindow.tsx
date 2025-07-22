import React from 'react';
import { User, Volume2 } from 'lucide-react';

interface SignLanguageWindowProps {
  text: string;
  isVisible: boolean;
}

const SignLanguageWindow: React.FC<SignLanguageWindowProps> = ({ text, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-2xl shadow-2xl border-4 border-blue-200 p-4 max-w-sm z-50 animate-slide-up">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 rounded-full p-2">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-gray-700">Sign Language</span>
        </div>
        <Volume2 className="w-4 h-4 text-gray-400" />
      </div>
      
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-4 mb-3">
        <div className="bg-white/20 rounded-lg p-3 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-2xl mb-2">👋</div>
            <div className="text-xs">Signing...</div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-lg font-bold text-gray-800 mb-1">{text}</p>
        <p className="text-xs text-gray-500">Touch to replay</p>
      </div>
    </div>
  );
};

export default SignLanguageWindow;