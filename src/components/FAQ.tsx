import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: "What is Sustainable Futures GPT?",
    answer: "Sustainable Futures GPT is a sophisticated AI assistant that specializes in comprehensive analysis of environmental data, including global statistics, resource management, and sustainability metrics. It uses Python to generate detailed predictions and provides actionable insights to help governments, communities, and individuals make more sustainable choices."
  },
  {
    question: "How accurate are the predictions provided?",
    answer: "Sustainable Futures GPT uses real-world data from multiple sources to ensure accuracy. It provides worst-case, best-case, and most likely scenarios based on current trends and variables. However, AI can generate incorrect or outdated information. All predictions should be verified with other sources before being used for decision-making."
  },
  {
    question: "Can it help with specific environmental projects?",
    answer: "Yes, Sustainable Futures GPT can analyze specific environmental projects by considering factors such as resource usage, carbon impact, sustainability metrics, and more. It can provide tailored recommendations and strategies for implementation."
  },
  {
    question: "Does it provide visual representations of data?",
    answer: "Absolutely. Sustainable Futures GPT creates detailed graphs, charts, and other visual representations to make complex environmental data more accessible and understandable. It typically includes at least three visualizations per analysis."
  },
  {
    question: "What types of data does it analyze?",
    answer: "It analyzes a wide range of environmental and sustainability data, including climate statistics, resource depletion rates, consumption patterns, technological advancements in green energy, environmental regeneration metrics, economic factors, and geopolitical influences on sustainability."
  },
  {
    question: "Why should I verify the information provided?",
    answer: "While Sustainable Futures GPT uses sophisticated AI to analyze data, all AI systems have limitations and can sometimes generate incorrect, outdated, or misleading information. Always cross-check critical information with other reliable sources, especially before making important decisions based on the provided analyses."
  },
  {
    question: "How can I get started with Sustainable Futures GPT?",
    answer: "To get started, simply click on the 'Get Started' button which will take you to the ChatGPT platform where you can interact directly with Sustainable Futures GPT. No special setup is required."
  }
];

const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
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
    <section id="faq" className="section-padding relative overflow-hidden bg-cyber-dark">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef} 
          className="max-w-3xl mx-auto transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          
          <div className="neo-card p-4 mb-8 border-l-4 border-cyber-orange">
            <p className="text-white/90 text-sm">
              <strong className="text-cyber-orange">Important:</strong> AI systems can generate incorrect or outdated information. 
              Always verify any data, predictions, or recommendations from Sustainable Futures GPT before making decisions.
            </p>
          </div>
          
          <div className="mt-12 space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="neo-card overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-medium text-white">{item.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-white/70 transition-transform duration-300 ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeIndex === index 
                      ? 'max-h-96 pb-6 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-white/70">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 glass-card text-center">
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-white/70 mb-6">
              Try Sustainable Futures GPT directly to get personalized answers to your sustainability questions.
            </p>
            <a 
              href="https://chatgpt.com/g/g-bMxXNoPen-sustainable-futures-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
