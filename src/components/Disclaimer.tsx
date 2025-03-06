
import React, { useEffect, useRef } from 'react';
import { AlertTriangle } from 'lucide-react';

const Disclaimer: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
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
  
  return (
    <section id="disclaimer" className="section-padding relative overflow-hidden bg-cyber-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef} 
          className="max-w-4xl mx-auto transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <AlertTriangle className="h-12 w-12 text-cyber-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
              Legal <span className="text-gradient">Disclaimer</span>
            </h2>
          </div>
          
          <div className="neo-card p-8 space-y-6 text-white/70">
            <p className="text-cyber-orange font-semibold text-lg mb-4">
              AI-Generated Content Warning: AI systems can produce inaccurate, incomplete, or misleading information. Always verify any information, predictions, or recommendations before making decisions or taking action.
            </p>
            
            <p>
              <strong className="text-white">Information Purpose Only:</strong> Sustainable Futures GPT provides information for educational and informational purposes only. The analyses, predictions, and recommendations should not be considered as professional advice on environmental, legal, financial, or other specialized matters.
            </p>
            
            <p>
              <strong className="text-white">No Guarantees:</strong> While we strive for accuracy, AI Web Tools LLC makes no representations or warranties regarding the accuracy, completeness, or reliability of any information provided through Sustainable Futures GPT. All predictions and analyses are based on available data and mathematical models which have inherent limitations.
            </p>
            
            <p>
              <strong className="text-white">Decision Responsibility:</strong> Users are solely responsible for any decisions or actions taken based on information provided by Sustainable Futures GPT. Always consult with qualified professionals before making significant decisions related to environmental policies, resource management, or sustainability initiatives.
            </p>
            
            <p>
              <strong className="text-white">Data Limitations:</strong> Sustainable Futures GPT analyzes data from various sources which may have their own limitations, biases, or inaccuracies. Changes in circumstances, new discoveries, or unforeseen events may significantly affect the validity of predictions.
            </p>
            
            <p>
              <strong className="text-white">Third-Party Links:</strong> Links to third-party websites are provided for convenience only. AI Web Tools LLC does not endorse and is not responsible for the content of linked third-party sites.
            </p>
            
            <p>
              <strong className="text-white">Limitation of Liability:</strong> To the fullest extent permitted by law, AI Web Tools LLC shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from the use or inability to use Sustainable Futures GPT or any information it provides.
            </p>
            
            <p>
              By using Sustainable Futures GPT, you acknowledge and agree to these terms and limitations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
