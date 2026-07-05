import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const ParticleBg = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);
    
    let particles = [];
    const particleCount = Math.min(Math.floor(width / 15), 85); // Scale count based on width
    const connectionDistance = 110;
    const mouse = { x: null, y: null, radius: 140 };
    
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 2 + 1;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off walls
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        
        // Move towards/away from mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            // Gentle gravity pull
            this.x -= (dx / distance) * force * 0.7;
            this.y -= (dy / distance) * force * 0.7;
          }
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'dark' ? 'rgba(99, 102, 241, 0.35)' : 'rgba(79, 70, 229, 0.22)';
        ctx.fill();
      }
    }
    
    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    const drawLines = () => {
      const strokeColor = theme === 'dark' ? 'rgba(99, 102, 241, ' : 'rgba(79, 70, 229, ';
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < connectionDistance) {
            const alpha = (1 - (dist / connectionDistance)) * 0.16;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = strokeColor + alpha + ')';
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      init();
    };
    
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    
    const heroSec = canvas.parentElement.parentElement;
    if (heroSec) {
      heroSec.addEventListener('mousemove', handleMouseMove);
      heroSec.addEventListener('mouseleave', handleMouseLeave);
    }
    
    window.addEventListener('resize', handleResize);
    
    init();
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (heroSec) {
        heroSec.removeEventListener('mousemove', handleMouseMove);
        heroSec.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden">
      <canvas ref={canvasRef} id="particle-canvas" />
    </div>
  );
};

export default ParticleBg;
