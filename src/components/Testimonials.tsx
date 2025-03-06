
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    content: "I've been able to make informed decisions for our community's sustainability initiatives thanks to the detailed analysis provided by Sustainable Futures GPT. The predictions have been remarkably accurate.",
    author: "Sarah Johnson",
    title: "Environmental Policy Advisor"
  },
  {
    content: "As a researcher working on climate change, this tool has been invaluable. The ability to process complex datasets and provide visualized insights saves me countless hours of work.",
    author: "Dr. Michael Chen",
    title: "Climate Scientist"
  },
  {
    content: "The resource management analysis has transformed how our city plans for water conservation. We've implemented several of the recommended strategies with great success.",
    author: "Carlos Rodriguez",
    title: "Urban Sustainability Director"
  },
  {
    content: "Sustainable Futures GPT helped our company reduce our carbon footprint by 35% in just one year by identifying inefficiencies we hadn't even considered.",
    author: "Emma Patel",
    title: "Corporate Sustainability Manager"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
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
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section-padding relative overflow-hidden bg-cyber-black">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,204,102,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef} 
          className="max-w-4xl mx-auto transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            What People Are <span className="text-gradient">Saying</span>
          </h2>
          
          <div className="relative mt-12">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    ref={(el) => (testimonialRefs.current[index] = el)}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="glass-card p-8 text-center">
                      <div className="mb-6">
                        <svg className="w-10 h-10 text-cyber-green/30 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.3 5.2C7.5 5.2 4.4 8.3 4.4 12c0 3.8 3.1 6.9 6.9 6.9s6.9-3.1 6.9-6.9c0-3.8-3.1-6.9-6.9-6.9zm0 12.6c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8 5.8 2.6 5.8 5.8-2.6 5.8-5.8 5.8zm6.3-10.3c-.4 0-.8-.3-.8-.8s.3-.8.8-.8.8.3.8.8-.4.8-.8.8zm-11.9.1c-.2-.4-.1-1 .3-1.2.4-.2 1-.1 1.2.3.2.4.1 1-.3 1.2-.4.2-1 .1-1.2-.3z" />
                          <path d="M4.8 7.5c-.4.2-.5.7-.3 1.1.2.4.7.5 1.1.3.4-.2.5-.7.3-1.1-.2-.4-.7-.5-1.1-.3zm11.8-1.6c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0 .3-.3.3-.8 0-1.1z" />
                        </svg>
                      </div>
                      <p className="text-lg text-white/80 italic mb-6">{testimonial.content}</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.author}</div>
                        <div className="text-cyber-green/80 text-sm">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation controls */}
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-cyber-dark/80 hover:bg-cyber-dark border border-white/10 rounded-full p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-cyber-dark/80 hover:bg-cyber-dark border border-white/10 rounded-full p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-6 bg-cyber-green' 
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
