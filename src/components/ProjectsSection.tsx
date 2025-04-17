import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Project data - in a real project, this might come from an API
const projects = [
  {
    id: 1,
    title: 'Reforma Residencial',
    description: 'Transformação completa de apartamento em Salvador',
    beforeImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    testimonial: 'A M2 superou minhas expectativas. Entregaram no prazo e com qualidade excepcional!',
    client: 'João Silva'
  },
  {
    id: 2,
    title: 'Projeto Comercial',
    description: 'Escritório moderno em Lauro de Freitas',
    beforeImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop',
    testimonial: 'Excelente trabalho! O espaço ficou exatamente como imaginávamos e dentro do orçamento.',
    client: 'Maria Oliveira, Empresa XYZ'
  },
  {
    id: 3,
    title: 'Construção Industrial',
    description: 'Galpão industrial em Camaçari',
    beforeImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop',
    testimonial: 'Projeto complexo executado com maestria. Recomendo fortemente a equipe da M2.',
    client: 'Roberto Mendes, Indústria ABC'
  }
];

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-element');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          // Ensure element remains visible after animation
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
          }, 300);
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

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setShowAfter(false);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setShowAfter(false);
  };

  const toggleBeforeAfter = () => {
    setShowAfter((prev) => !prev);
  };

  return (
    <section id="projects" className="bg-gray-150">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Projetos e Clientes</h2>
          <p className="section-subtitle reveal-element opacity-0">
            Conheça nossos projetos concluídos e o que nossos clientes dizem sobre nós
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Image */}
            <div className="reveal-element opacity-0 relative overflow-hidden rounded-lg shadow-lg">
              <div className="relative aspect-video">
                <img 
                  src={showAfter ? projects[currentProject].afterImage : projects[currentProject].beforeImage} 
                  alt={projects[currentProject].title} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-2xl font-semibold">{projects[currentProject].title}</h3>
                    <p>{projects[currentProject].description}</p>
                  </div>
                </div>
                <button 
                  onClick={toggleBeforeAfter}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 py-2 px-4 rounded-md font-medium text-sm transition-all duration-200"
                >
                  {showAfter ? 'Ver Antes' : 'Ver Depois'}
                </button>
              </div>
              
              <div className="flex justify-between mt-4">
                <button 
                  onClick={prevProject}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={nextProject}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Testimonials */}
            <div className="reveal-element opacity-0 flex flex-col justify-center">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                <svg className="w-12 h-12 text-m2green mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M4.583 17.321c-.183-.183-.493-.184-.674-.002-.184.183-.184.492-.002.674l.002.002c.183.183.493.184.674.002.184-.183.184-.492.002-.674l-.002-.002zm9.167-9.167c-.183-.183-.493-.184-.674-.002-.184.183-.184.492-.002.674l.002.002c.183.183.493.184.674.002.184-.183.184-.492.002-.674l-.002-.002zm-9.167.833c2.276 0 4.167 1.889 4.167 4.167 0 2.276-1.89 4.167-4.167 4.167-2.279 0-4.167-1.89-4.167-4.167 0-2.276 1.888-4.167 4.167-4.167zm9.167-2.5c-3.714 0-6.667 2.953-6.667 6.667 0 3.714 2.953 6.667 6.667 6.667 3.714 0 6.667-2.953 6.667-6.667 0-3.714-2.953-6.667-6.667-6.667zm-8.333 7.5c0-1.838-1.496-3.333-3.333-3.333-.221 0-.396.183-.396.417s.175.417.396.417c1.375 0 2.5 1.125 2.5 2.5 0 .221.183.396.417.396s.416-.175.416-.396zm9.166 0c0-1.838-1.496-3.333-3.333-3.333-.221 0-.396.183-.396.417s.175.417.396.417c1.375 0 2.5 1.125 2.5 2.5 0 .221.183.396.417.396s.416-.175.416-.396z" />
                </svg>
                <p className="text-lg mb-6 italic text-gray-700">{projects[currentProject].testimonial}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold">
                    {projects[currentProject].client.substring(0, 1)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{projects[currentProject].client}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-white rounded-lg shadow-md p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Área de Atuação</h3>
                <p className="text-gray-700 mb-4">
                  Atendemos toda a região metropolitana de Salvador e cidades próximas:
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center"><span className="text-m2green mr-2">✓</span> Salvador</li>
                  <li className="flex items-center"><span className="text-m2green mr-2">✓</span> Camaçari</li>
                  <li className="flex items-center"><span className="text-m2green mr-2">✓</span> Lauro de Freitas</li>
                  <li className="flex items-center"><span className="text-m2green mr-2">✓</span> Ilhéus</li>
                  <li className="flex items-center"><span className="text-m2green mr-2">✓</span> Simões Filho</li>
                  <li className="flex items-center"><span className="text-m2green mr-2">✓</span> Mata de São João</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
