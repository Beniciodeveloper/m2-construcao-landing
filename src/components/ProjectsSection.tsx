import React, { useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from 'lucide-react';

// Sample projects data - replace with actual project images
const projects = [
  // Replace with the actual images you provided
  {
    id: 1,
    title: 'Reforma Residencial',
    description: 'Transformação completa de apartamento em Salvador',
    image: '/path-to-your-first-image.jpg'
  }
  // Add more project objects based on the images you've attached
];

const reviews = [
  {
    id: 1,
    text: 'A M2 superou minhas expectativas. Entregaram no prazo e com qualidade excepcional!',
    author: 'João Silva',
    stars: 5
  },
  {
    id: 2,
    text: 'Excelente trabalho! O espaço ficou exatamente como imaginávamos e dentro do orçamento.',
    author: 'Maria Oliveira',
    stars: 5,
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

  const renderStars = (count = 5) => (
    <div className="flex justify-center mb-2">
      {[...Array(count)].map((_, index) => (
        <Star key={index} size={20} fill="#FFD700" color="#FFD700" />
      ))}
    </div>
  );

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
          {/* Projects Carousel with Mobile Responsiveness */}
          <div className="reveal-element opacity-0 mb-16">
            <Carousel>
              <CarouselContent className="md:-mx-4">
                {projects.map((project) => (
                  <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 md:p-4">
                      <div className="relative aspect-video">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-sm">{project.description}</p>
                          </div>
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
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                <h3 className="text-2xl font-semibold ml-3">Avaliações Google</h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                    {renderStars(review.stars)}
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
