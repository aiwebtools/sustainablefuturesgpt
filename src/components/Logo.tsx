
import React from 'react';
import { Globe } from 'lucide-react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, showSubtitle = true }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Globe className="h-7 w-7 text-cyber-green animate-pulse-glow" />
        <div className="absolute inset-0 bg-cyber-green/20 rounded-full blur-md -z-10"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-lg tracking-tight whitespace-nowrap">
          Sustainable Futures GPT <span className="text-cyber-green">🌍</span>
        </span>
        {showSubtitle && (
          <span className="text-xs text-white/50 -mt-1">
            Free AI Web Tools by{" "}
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyber-green transition-colors"
              title="AI Web Tools - Free AI Tools Platform"
            >
              AiWebTools.Ai
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
