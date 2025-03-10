
import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, Shield, CheckCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const PopupDisclaimer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if the user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    
    if (!hasSeenDisclaimer) {
      // Show the disclaimer after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAgree = () => {
    // Save to localStorage to avoid showing on subsequent visits
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setIsOpen(false);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className={cn(
          "w-full max-w-md bg-gradient-to-br from-cyber-dark to-black border border-cyber-green/30 rounded-xl",
          "shadow-[0_0_25px_rgba(0,204,102,0.2)] overflow-hidden transform transition-all",
          "animate-fade-in"
        )}
      >
        <div className="flex items-center justify-between p-5 border-b border-cyber-green/20">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-cyber-orange animate-pulse-glow" />
            <h2 className="text-2xl font-bold tracking-tight text-gradient">Disclaimer</h2>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1.5 bg-cyber-black hover:bg-cyber-dark transition-colors text-white/70 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <div className="p-5 space-y-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-cyber-orange flex-shrink-0 mt-1" />
            <p className="text-white text-sm">
              <span className="font-bold text-cyber-orange">AI Warning:</span> Our AI system may produce inaccurate, incomplete, or misleading information. Always verify all information before making decisions or taking action.
            </p>
          </div>
          
          <p className="text-white/80 text-sm">
            By clicking "I Agree" below, you acknowledge that:
          </p>
          
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 flex-shrink-0 flex items-center justify-center">•</div>
              <span>Information is provided for educational purposes only and should not be considered professional advice.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 flex-shrink-0 flex items-center justify-center">•</div>
              <span>You are responsible for verifying the accuracy of all AI-generated information.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 flex-shrink-0 flex items-center justify-center">•</div>
              <span>You understand the limitations of AI and will exercise appropriate caution.</span>
            </li>
          </ul>
        </div>
        
        <div className="p-5 pt-2 flex justify-center">
          <button 
            onClick={handleAgree}
            className="group relative overflow-hidden rounded-full px-6 py-3 bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple text-black font-semibold text-lg
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyber-purple before:via-cyber-blue before:to-cyber-green before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-500 before:ease-in-out
            shadow-[0_0_15px_rgba(0,204,102,0.3)] hover:shadow-[0_0_20px_rgba(0,204,102,0.5)] transition-shadow duration-300"
          >
            <span className="relative flex items-center gap-2 z-10">
              <CheckCheck className="h-5 w-5" />
              <span className="tracking-wide">I AGREE</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupDisclaimer;
