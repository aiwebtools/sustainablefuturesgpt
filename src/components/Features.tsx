
import React, { useEffect, useRef } from 'react';
import { LineChart, BarChart, PieChart, ArrowUpRight, Database, Globe, CloudLightning } from 'lucide-react';

const features = [
  {
    icon: <LineChart className="h-8 w-8 text-cyber-green" />,
    title: "Advanced Predictions",
    description: "Generate detailed, accurate predictions using Python for carbon footprints, resource depletion, and environmental impact assessments."
  },
  {
    icon: <Database className="h-8 w-8 text-cyber-blue" />,
    title: "Data-Driven Insights",
    description: "Analyze real-world data from diverse sources to compile detailed explanations and research on sustainability and environment."
  },
  {
    icon: <PieChart className="h-8 w-8 text-cyber-purple" />,
    title: "Visualized Analytics",
    description: "Transform complex environmental data into clear visual representations with detailed graphs and charts for better understanding."
  },
  {
    icon: <Globe className="h-8 w-8 text-cyber-orange" />,
    title: "Global Statistics",
    description: "Access and interpret current world statistics on climate change, environmental shifts, and sustainable practices worldwide."
  },
  {
    icon: <CloudLightning className="h-8 w-8 text-cyber-pink" />,
    title: "Resource Management",
    description: "Get comprehensive analysis of global resources focusing on sustainable regeneration of water, minerals, and other critical elements."
  },
  {
    icon: <BarChart className="h-8 w-8 text-cyber-green" />,
    title: "Actionable Strategies",
    description: "Receive practical, implementable steps for governments, communities, and individuals to make sustainable choices."
  }
];

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <section id="features" className="section-padding relative overflow-hidden bg-cyber-black">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef} 
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Next-Generation <span className="text-gradient">AI Technology</span> for Environmental Solutions
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Leveraging sophisticated AI to provide comprehensive analysis and strategies 
            that help create a more sustainable future for our planet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="neo-card p-6 transition-all duration-700 transform opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 rounded-lg inline-block bg-gradient-to-br from-white/5 to-transparent">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/70 mb-4">{feature.description}</p>
              <a 
                href="https://chatgpt.com/g/g-bMxXNoPen-sustainable-futures-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyber-green hover:text-cyber-green/80 transition-colors"
              >
                Learn more
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
