
import React, { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-element');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="reveal-element text-4xl md:text-6xl font-display font-bold mb-6">
            M2 Construção e Reforma
          </h1>
          <h2 className="reveal-element text-xl md:text-3xl font-display mb-6">
            Soluções completas em Engenharia
          </h2>
          <p className="reveal-element text-lg md:text-xl mb-10 mx-auto max-w-2xl">
            Projetos residenciais, comerciais e industriais com excelência em Salvador e região
          </p>
          <a 
            href="https://wa.me/5571991017313?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="reveal-element inline-block btn-secondary text-lg"
          >
            Solicitar Orçamento via WhatsApp
          </a>
          
          <div className="reveal-element mt-24 animate-bounce">
            <a href="#services" className="text-white">
              <ArrowDown size={36} className="mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
