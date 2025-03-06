
import React, { useEffect, useRef } from 'react';
import { Search, Cpu, PieChart, LineChart, ClipboardCheck } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Data Collection",
    description: "The AI searches the web for current world statistics on climate, environmental change, and sustainable practices."
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Advanced Processing",
    description: "Using Python for calculations, the AI analyzes historical trends and compiles detailed information."
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Visualization",
    description: "Complex data is transformed into clear visual representations with detailed graphs and charts."
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Prediction Generation",
    description: "The AI creates worst-case, best-case, and most likely scenarios based on data-driven insights."
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: "Action Planning",
    description: "You receive five actionable steps prioritized by impact and feasibility for sustainable implementation."
  }
];

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
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
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (stepsRef.current) observer.observe(stepsRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (stepsRef.current) observer.unobserve(stepsRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);
  
  return (
    <section id="how-it-works" className="section-padding relative bg-gradient-to-b from-cyber-black to-cyber-dark overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxYTFhMWEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41Ny0xMy40MyAzMC0zMCAzMFMwIDQ2LjU3IDAgMzAgMTMuNDMgMCAzMCAwczMwIDEzLjQzIDMwIDMweiIgc3Ryb2tlPSIjMjIyMjIyIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef} 
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How <span className="text-gradient">Sustainable Futures GPT</span> Works
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            A sophisticated process that turns complex environmental data into 
            actionable insights for a more sustainable future.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div 
            ref={stepsRef} 
            className="lg:w-1/2 space-y-6 transition-all duration-700 delay-300 transform opacity-0 translate-y-10"
          >
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 flex items-center justify-center border border-white/10">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            ref={imageRef} 
            className="lg:w-1/2 transition-all duration-700 delay-500 transform opacity-0 translate-y-10"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-green to-cyber-blue rounded-2xl blur opacity-30"></div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img 
                  src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-future-city-with-vertical-gardens.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true" 
                  alt="Sustainable city with vertical gardens" 
                  className="w-full h-auto transition-transform duration-10000 hover:scale-110"
                  style={{ aspectRatio: "2/1" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
