import React, { useEffect } from 'react';
import { Wrench, Zap, Leaf, ClipboardList, FileText, ClipboardCheck, Phone } from 'lucide-react';

const ServicesSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-service');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('has-animated')) {
          const index = Array.from(elements).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('has-animated');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100', 'service-animated');
          }, index * 100);
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: '-20px 0px -20px 0px'
    });
    
    setTimeout(() => {
      elements.forEach(element => {
        observer.observe(element);
      });
    }, 100);
    
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const services = [
    {
      icon: <Wrench size={40} className="text-m2green" />,
      title: 'Engenharia Civil',
      description: 'Obras e reformas completas, do planejamento à execução.',
      link: 'https://wa.me/5571991017313?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20serviços%20de%20Engenharia%20Civil'
    },
    {
      icon: <Zap size={40} className="text-m2green" />,
      title: 'Engenharia Elétrica',
      description: 'Projetos elétricos, instalações e manutenções completas.',
      link: 'https://wa.me/5571991017313?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20serviços%20de%20Engenharia%20Elétrica'
    },
    {
      icon: <Leaf size={40} className="text-m2green" />,
      title: 'Engenharia Ambiental',
      description: 'Soluções sustentáveis para adequação e licenciamento.',
      link: 'https://wa.me/5571991017313?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20serviços%20de%20Engenharia%20Ambiental'
    },
    {
      icon: <ClipboardList size={40} className="text-m2green" />,
      title: 'Gerenciamento de Projetos',
      description: 'Coordenação de todas as etapas do seu projeto com eficiência.',
      link: 'https://wa.me/5571991017313?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Gerenciamento%20de%20Projetos'
    },
    {
      icon: <FileText size={40} className="text-m2green" />,
      title: 'Consultoria Técnica',
      description: 'Assessoria especializada para seu projeto, obra ou reforma.',
      link: 'https://wa.me/5571991017313?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Consultoria%20Técnica'
    },
    {
      icon: <ClipboardCheck size={40} className="text-m2green" />,
      title: 'Acompanhamento/Fiscalização',
      description: 'Supervisão técnica e fiscalização completa da sua obra.',
      link: 'https://wa.me/5571991017313?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Acompanhamento%20e%20Fiscalização%20de%20Obra'
    }
  ];

  return (
    <section id="services" className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="reveal-service text-3xl font-display font-bold mb-4 opacity-0 service-title-animated">
            Nossos Servi��os
          </h2>
          <p className="reveal-service text-lg text-gray-600 max-w-3xl mx-auto opacity-0 service-title-animated" 
             style={{ transitionDelay: '200ms' }}>
            Oferecemos soluções completas em engenharia, do projeto à entrega final
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="reveal-service opacity-0 service-animated flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {service.icon}
              <h3 className="text-xl font-display font-semibold mt-4 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a 
                href={service.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 px-6 py-2 bg-m2green text-white rounded-lg hover:bg-m2green/90 transition-colors"
              >
                <Phone size={16} />
                <span>Solicitar via WhatsApp</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
