import React, { useEffect } from 'react';
import { Wrench, Zap, Leaf, ClipboardList, FileText, ClipboardCheck, Phone } from 'lucide-react';

const ServicesSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-service');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting && !entry.target.classList.contains('has-animated')) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in-up', 'has-animated');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100');
          }, index * 150);
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

  const services = [
    {
      icon: <Wrench size={40} className="text-m2green mb-4" />,
      title: 'Engenharia Civil',
      description: 'Obras e reformas completas, do planejamento à execução.',
      link: 'https://wa.me/5571991017313?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20serviços%20de%20Engenharia%20Civil'
    },
    {
      icon: <Zap size={40} className="text-m2green mb-4" />,
      title: 'Engenharia Elétrica',
      description: 'Projetos elétricos, instalações e manutenções completas.',
      link: 'https://wa.me/5571991017313?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20serviços%20de%20Engenharia%20Elétrica'
    },
    {
      icon: <Leaf size={40} className="text-m2green mb-4" />,
      title: 'Engenharia Ambiental',
      description: 'Soluções sustentáveis para adequação e licenciamento.',
      link: 'https://wa.me/5571991017313?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20serviços%20de%20Engenharia%20Ambiental'
    },
    {
      icon: <ClipboardList size={40} className="text-m2green mb-4" />,
      title: 'Gerenciamento de Projetos',
      description: 'Coordenação de todas as etapas do seu projeto com eficiência.',
      link: 'https://wa.me/5571991017313?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Gerenciamento%20de%20Projetos'
    },
    {
      icon: <FileText size={40} className="text-m2green mb-4" />,
      title: 'Consultoria Técnica',
      description: 'Assessoria especializada para seu projeto, obra ou reforma.',
      link: 'https://wa.me/5571991017313?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Consultoria%20Técnica'
    },
    {
      icon: <ClipboardCheck size={40} className="text-m2green mb-4" />,
      title: 'Acompanhamento e Fiscalização',
      description: 'Supervisão técnica e fiscalização completa da sua obra.',
      link: 'https://wa.me/5571991017313?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Acompanhamento%20e%20Fiscalização%20de%20Obra'
    }
  ];

  return (
    <section id="services" className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos soluções completas em engenharia, do projeto à entrega final
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="reveal-service opacity-0 service-card flex flex-col items-center text-center"
            >
              <div className="bg-gray-50 p-3 rounded-full mb-2">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="mt-auto">
                <a 
                  href={service.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-m2green hover:text-m2green/80 font-medium transition-colors"
                >
                  <Phone size={16} className="mr-1" />
                  <span>Solicitar via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
