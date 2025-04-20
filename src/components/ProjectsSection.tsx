
import React, { useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Sample projects data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'Reforma Residencial',
    description: 'Transformação completa de apartamento em Salvador',
    image: '/projeto1.webp'
  },
  {
    id: 2,
    title: 'Projeto Comercial',
    description: 'Escritório moderno em Lauro de Freitas',
    image: '/projeto2.webp'
  },
  {
    id: 3,
    title: 'Construção Industrial',
    description: 'Galpão industrial em Camaçari',
    image: '/projeto3.webp'
  },

  {
    id: 4,
    title: 'Construção Industrial',
    description: 'Galpão industrial em Camaçari',
    image: '/projeto4.webp'
  },

{
    id: 5,
    title: 'Construção Industrial',
    description: 'Galpão industrial em Camaçari',
    image: '/projeto5.webp'
  }
];

const reviews = [
  {
    id: 1,
    text: 'A M2 superou minhas expectativas. Entregaram no prazo e com qualidade excepcional!',
    author: 'João Silva'
  },
  {
    id: 2,
    text: 'Excelente trabalho! O espaço ficou exatamente como imaginávamos e dentro do orçamento.',
    author: 'Maria Oliveira',
    company: 'Empresa XYZ'
  }
];

const ProjectsSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-element');
    
    const observer = new IntersectionObserver((entries) => {
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
    
    elements.forEach(element => observer.observe(element));
    return () => elements.forEach(element => observer.unobserve(element));
  }, []);

  return (
    <section id="projects" className="bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Projetos e Clientes</h2>
          <p className="section-subtitle reveal-element opacity-0">
            Conheça nossos projetos concluídos e o que nossos clientes dizem sobre nós
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Projects Carousel */}
          <div className="reveal-element opacity-0 mb-16">
            <Carousel>
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem key={project.id}>
                    <div className="relative aspect-video">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-6 text-white">
                          <h3 className="text-2xl font-semibold">{project.title}</h3>
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Reviews Section */}
          <div className="reveal-element opacity-0">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <h3 className="text-2xl font-semibold ml-3">Avaliações Google</h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                    <p className="text-lg mb-4 italic text-gray-700">{review.text}</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold">
                        {review.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">{review.author}</p>
                        {review.company && (
                          <p className="text-gray-600 text-sm">{review.company}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
