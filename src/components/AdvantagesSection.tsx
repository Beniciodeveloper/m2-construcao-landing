
import React, { useEffect } from 'react';
import { Award, Clock, ThumbsUp, Banknote } from 'lucide-react';

const AdvantagesSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-advantage');
    const sectionElements = document.querySelectorAll('.reveal-element');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
            // Ensure element remains visible after animation
            setTimeout(() => {
              entry.target.classList.add('opacity-100');
            }, 300);
          }, index * 150); // Stagger the animations
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
      observer.observe(element);
    });
    
    // Also handle the section subtitle
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
          }, 300);
        }
      });
    }, { threshold: 0.1 });
    
    sectionElements.forEach(element => {
      sectionObserver.observe(element);
    });
    
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
      sectionElements.forEach(element => {
        sectionObserver.unobserve(element);
      });
    };
  }, []);

  const advantages = [
    {
      icon: <Banknote size={50} className="text-white mb-4" />,
      title: 'Melhor Preço do Mercado',
      description: 'Orçamentos transparentes e competitivos, com excelente custo-benefício para cada projeto.'
    },
    {
      icon: <ThumbsUp size={50} className="text-white mb-4" />,
      title: 'Melhor Acabamento',
      description: 'Atenção meticulosa aos detalhes, acabamento primoroso e materiais de primeira qualidade.'
    },
    {
      icon: <Award size={50} className="text-white mb-4" />,
      title: 'Melhor Pós-Venda',
      description: 'Acompanhamento contínuo após a entrega, garantindo sua total satisfação com o resultado.'
    },
    {
      icon: <Clock size={50} className="text-white mb-4" />,
      title: 'Melhor Prazo de Entrega',
      description: 'Cumprimento rigoroso de cronogramas, com planejamento eficiente para entrega no prazo acordado.'
    }
  ];

  return (
    <section id="advantages" className="bg-gradient-to-br from-m2green/90 to-m2green/70 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Nossos Diferenciais</h2>
          <p className="section-subtitle text-white/90 reveal-element opacity-0">
            Descubra por que a M2 Construção e Reforma é a melhor escolha para seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="reveal-advantage opacity-0 bg-[#4c4c4ce6] rounded-xl p-6 text-center flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="rounded-full p-4 bg-transparent">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-display font-semibold my-3 text-white">{advantage.title}</h3>
              <p className="text-white/90">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal-element opacity-0">
          <a 
            href="https://wa.me/5571983209903?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20diferenciais%20da%20M2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-m2green hover:bg-gray-100 font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg inline-block hover:scale-105 transform"
          >
            Solicitar Proposta Diferenciada
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
