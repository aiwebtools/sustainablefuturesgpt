
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Logo from "../components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyber-black p-4">
      <div className="neo-card p-8 w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>
        
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-white/70 mb-8">Oops! This page doesn't exist in our sustainable future.</p>
        
        <a 
          href="/" 
          className="btn-primary inline-flex items-center group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
