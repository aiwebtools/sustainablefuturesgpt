
import React from 'react';
import Logo from './Logo';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-cyber-dark pt-16 pb-8 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxYTFhMWEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41Ny0xMy40MyAzMC0zMCAzMFMwIDQ2LjU3IDAgMzAgMTMuNDMgMCAzMCAwczMwIDEzLjQzIDMwIDMweiIgc3Ryb2tlPSIjMjIyMjIyIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')]"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Logo />
            <p className="text-white/60 max-w-xs">
              Helping governments, communities, and individuals make data-driven decisions 
              for a sustainable world through real-time research, eco-strategies, and 
              advanced AI-powered predictions.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-bMxXNoPen-sustainable-futures-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-cyber-green transition-colors flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" /> Sustainable Futures GPT
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-white/60 hover:text-cyber-green transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-white/60 hover:text-cyber-green transition-colors"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-white/60 hover:text-cyber-green transition-colors flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" /> More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-cyber-green transition-colors flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" /> Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-cyber-green transition-colors flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" /> Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+14758008096"
                  className="text-white/60 hover:text-cyber-green transition-colors flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com"
                  className="text-white/60 hover:text-cyber-green transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="relative pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-green transition-colors"
            >
              © 2025 AI WEB TOOLS LLC
            </a> All rights reserved.
          </p>
          
          <a 
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !rounded-full !py-2 !px-5 text-sm flex items-center gap-2"
          >
            More AI Tools
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
