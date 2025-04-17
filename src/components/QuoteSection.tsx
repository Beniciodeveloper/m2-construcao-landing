import React, { useEffect } from 'react';
import { MessageSquare, Calculator } from 'lucide-react';
import { Star } from 'lucide-react';

const QuoteSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-element');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('has-animated')) {
          entry.target.classList.add('animate-fade-in', 'has-animated');
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('opacity-100');
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

  const renderStars = () => (
    <div className="flex justify-center mb-2">
      {[...Array(5)].map((_, index) => (
        <Star key={index} size={20} fill="#FFD700" color="#FFD700" />
      ))}
    </div>
  );

  return (
    <section id="quote" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Orçamento em até 72 horas</h2>
          <p className="section-subtitle reveal-element opacity-0">
            Solicite agora seu orçamento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="reveal-element opacity-0 bg-gray-100 rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <Calculator size={50} className="text-m2green mb-6 mx-auto" />
            <h3 className="text-2xl font-display font-semibold mb-4 text-center">Orçamento Técnico Empresarial</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-m2green mr-2">✓</span>
                <span>Detalhamento completo de materiais e serviços</span>
              </li>
              <li className="flex items-start">
                <span className="text-m2green mr-2">✓</span>
                <span>Especificações técnicas precisas</span>
              </li>
              <li className="flex items-start">
                <span className="text-m2green mr-2">✓</span>
                <span>Cronograma de execução detalhado</span>
              </li>
              <li className="flex items-start">
                <span className="text-m2green mr-2">✓</span>
                <span>Ideal para projetos complexos e licitações</span>
              </li>
            </ul>
            <div className="text-center mt-auto">
              <a 
                href="https://wa.me/5571991017313?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20técnico%20detalhado" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Solicitar Orçamento Técnico
              </a>
            </div>
          </div>

          <div className="reveal-element opacity-0 bg-gray-100 rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <MessageSquare size={50} className="text-m2red mb-6 mx-auto" />
            <h3 className="text-2xl font-display font-semibold mb-4 text-center">Orçamento Técnico Residencial</h3>
            {renderStars()}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-m2red mr-2">✓</span>
                <span>Linguagem simplificada e acessível</span>
              </li>
              <li className="flex items-start">
                <span className="text-m2red mr-2">✓</span>
                <span>Foco nas necessidades do cliente</span>
              </li>
              <li className="flex items-start">
                <span className="text-m2red mr-2">✓</span>
                <span>Orientação e sugestões valiosas</span>
              </li>
              <li className="flex items-start">
                <span className="text-m2red mr-2">✓</span>
                <span>Ideal para residências e pequenas reformas</span>
              </li>
            </ul>
            <div className="text-center mt-auto">
              <a 
                href="https://wa.me/5571991017313?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20consultivo%20simplificado" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-block"
              >
                Solicitar Orçamento Consultivo
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center reveal-element opacity-0">
          <p className="text-gray-700 mb-4">
            <strong>Compromisso M2:</strong> Orçamentos sem compromisso, com resposta rápida e suporte completo de engenheiro especializado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
