
import React, { useEffect, useRef } from 'react';

const Windmill3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Animation variables
    let angle = 0;
    const towerHeight = 120;
    const bladeLength = 80;
    const rotationSpeed = 0.005;
    
    const drawWindmill = () => {
      const centerX = canvas.width / (2 * window.devicePixelRatio);
      const groundY = canvas.height / window.devicePixelRatio - 40;
      const towerTop = groundY - towerHeight;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      // Draw ground
      const groundGradient = ctx.createLinearGradient(0, groundY, 0, groundY + 40);
      groundGradient.addColorStop(0, '#1a3011');
      groundGradient.addColorStop(1, '#0d1a08');
      ctx.fillStyle = groundGradient;
      ctx.fillRect(0, groundY, canvas.width / window.devicePixelRatio, 40);
      
      // Draw tower
      const towerGradient = ctx.createLinearGradient(centerX - 5, 0, centerX + 5, 0);
      towerGradient.addColorStop(0, '#333');
      towerGradient.addColorStop(0.5, '#666');
      towerGradient.addColorStop(1, '#333');
      ctx.fillStyle = towerGradient;
      ctx.beginPath();
      ctx.moveTo(centerX - 5, groundY);
      ctx.lineTo(centerX - 2, towerTop);
      ctx.lineTo(centerX + 2, towerTop);
      ctx.lineTo(centerX + 5, groundY);
      ctx.closePath();
      ctx.fill();
      
      // Add glowing effect
      ctx.shadowColor = '#00cc66';
      ctx.shadowBlur = 10;
      
      // Draw hub
      ctx.fillStyle = '#444';
      ctx.beginPath();
      ctx.arc(centerX, towerTop, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw blades
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < 3; i++) {
        const bladeAngle = angle + (i * (Math.PI * 2) / 3);
        
        ctx.save();
        ctx.translate(centerX, towerTop);
        ctx.rotate(bladeAngle);
        
        // Blade
        ctx.beginPath();
        ctx.moveTo(0, -3);
        ctx.lineTo(bladeLength, -12);
        ctx.lineTo(bladeLength, 12);
        ctx.lineTo(0, 3);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
      }
      
      // Reset shadow
      ctx.shadowBlur = 0;
      
      // Update animation
      angle += rotationSpeed;
      requestAnimationFrame(drawWindmill);
    };
    
    const animationId = requestAnimationFrame(drawWindmill);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default Windmill3D;
