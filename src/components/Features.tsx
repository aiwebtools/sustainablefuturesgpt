import React from 'react';
import { Rocket, ShieldCheck, Lightbulb, TrendingUp } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding bg-cyber-dark relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxYTFhMWEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41Ny0xMy40MyAzMC0zMCAzMFMwIDQ2LjU3IDAgMzAgMTMuNDMgMCAzMCAwczMwIDEzLjQzIDMwIDMweiIgc3Ryb2tlPSIjMjIyMjIyIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Key Features
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
            Explore the core capabilities of our AI-driven platform, designed to empower sustainable solutions and drive impactful change.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Card 1 */}
          <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 animate-on-scroll">
            <div className="w-16 h-16 rounded-full bg-cyber-green/10 text-cyber-green flex items-center justify-center">
              <Rocket className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl">Predictive Analytics</h3>
            <p className="text-white/60 leading-relaxed">
              Forecast environmental impacts with unparalleled accuracy, enabling proactive strategies.
            </p>
          </div>
          
          {/* Feature Card 2 */}
          <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 animate-on-scroll">
            <div className="w-16 h-16 rounded-full bg-cyber-blue/10 text-cyber-blue flex items-center justify-center">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl">Risk Assessment</h3>
            <p className="text-white/60 leading-relaxed">
              Identify and mitigate potential ecological risks, ensuring resilience and sustainability.
            </p>
          </div>
          
          {/* Feature Card 3 */}
          <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 animate-on-scroll">
            <div className="w-16 h-16 rounded-full bg-cyber-purple/10 text-cyber-purple flex items-center justify-center">
              <Lightbulb className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl">Innovative Solutions</h3>
            <p className="text-white/60 leading-relaxed">
              Discover groundbreaking approaches to environmental challenges, powered by AI.
            </p>
          </div>
          
          {/* Feature Card 4 */}
          <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 animate-on-scroll">
            <div className="w-16 h-16 rounded-full bg-cyber-orange/10 text-cyber-orange flex items-center justify-center">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl">Performance Tracking</h3>
            <p className="text-white/60 leading-relaxed">
              Monitor and optimize sustainability initiatives with real-time data and analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
