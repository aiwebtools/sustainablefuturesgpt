
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';
import PopupDisclaimer from '../components/PopupDisclaimer';
import { toast } from '../hooks/use-toast';

const Index = () => {
  useEffect(() => {
    // Show welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to Sustainable Futures GPT",
        description: "Explore how AI can help create a greener tomorrow",
        duration: 5000,
      });
    }, 1500);
    
    // Add scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-in');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-hidden">
      <Navbar />
      <PopupDisclaimer />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
