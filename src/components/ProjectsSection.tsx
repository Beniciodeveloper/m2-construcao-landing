
import React, { useEffect, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import { Circle, CircleDot } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  // Update active index when the carousel changes
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on('select', onSelect);
    // Initial call to set the first slide
    onSelect();

    return () => {
      carouselApi.off('select', onSelect);
    };
  }, [carouselApi]);

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
            <Carousel setApi={setCarouselApi}>
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
            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, index) => (
                index === activeIndex ? (
                  <CircleDot 
                    key={index}
                    className="w-4 h-4 text-m2green"
                  />
                ) : (
                  <Circle 
                    key={index}
                    className="w-4 h-4 text-gray-300"
                  />
                )
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="reveal-element opacity-0">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <div className="flex items-center mb-6 space-x-4">
                <img 
                  src="/lovable-uploads/e43aa8ba-2bcf-4175-80e2-f635adcac7ac.png" 
                  alt="Google Reviews" 
                  className="h-12 w-auto"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg 
                          key={star} 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="#FBBC04" 
                          className="w-5 h-5"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      ))}
                    </div>
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
