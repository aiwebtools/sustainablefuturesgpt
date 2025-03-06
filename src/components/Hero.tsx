
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Windmill3D from './3DWindmill';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const handleScrollDown = () => {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-cyber-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-green/5 via-cyber-blue/5 to-cyber-purple/5"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,204,102,0.1),transparent_40%)]"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(14,165,233,0.1),transparent_40%)]"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxYTFhMWEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41Ny0xMy40MyAzMC0zMCAzMFMwIDQ2LjU3IDAgMzAgMTMuNDMgMCAzMCAwczMwIDEzLjQzIDMwIDMweiIgc3Ryb2tlPSIjMjIyMjIyIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={sectionRef} className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 transform opacity-0 translate-y-10">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block bg-white/5 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10 text-sm font-medium text-cyber-green animate-fade-in">
              Powered by Advanced AI Technology
            </div>
            
            <div className="bg-cyber-green/10 text-white text-xs md:text-sm text-center py-2 px-4 border border-cyber-green/20 rounded-md">
              <p>
                Predictions and analyses are for informational purposes only and should not be considered as professional advice.
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">Sustainable Futures</span> <br />
              For A Greener Tomorrow
            </h1>
            
            <p className="text-lg text-white/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Guiding humanity toward harmony with nature through data-driven insights, 
              eco-strategies, and advanced AI-powered predictions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://chatgpt.com/g/g-bMxXNoPen-sustainable-futures-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Get Started
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#how-it-works" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 h-[400px] sm:h-[500px] w-full max-w-[500px] mx-auto">
            <div className="relative h-full w-full">
              {/* 3D Windmill Canvas */}
              <div className="absolute inset-0">
                <Windmill3D />
              </div>
              
              {/* Glowing Orb */}
              <div className="absolute top-[30%] right-[30%] w-20 h-20 bg-cyber-green/20 rounded-full blur-xl animate-pulse-glow"></div>
              
              {/* Data Points */}
              <div className="absolute top-[15%] left-[25%] h-6 w-6 bg-cyber-blue/30 rounded-full animate-float blur-sm"></div>
              <div className="absolute bottom-[35%] right-[15%] h-4 w-4 bg-cyber-purple/30 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-[60%] left-[20%] h-8 w-8 bg-cyber-orange/30 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
          onClick={handleScrollDown}
          aria-label="Scroll down"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
          <span className="text-white/50 text-xs mt-2">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
