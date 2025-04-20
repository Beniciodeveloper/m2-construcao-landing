import React, { useEffect } from 'react';

const AboutSection = () => {
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

  return (
    <section id="about" className="bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Quem Somos</h2>
          <p className="section-subtitle reveal-element opacity-0">
            Conheça a história e os valores que guiam a M2 Construção e Reforma
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="reveal-element opacity-0">
            <img 
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="M2 Construção e Reforma Equipe" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div>
            <div className="reveal-element opacity-0">
              <h3 className="text-2xl font-display font-semibold mb-4">Nossa História</h3>
              <p className="text-gray-700 mb-6">
                A M2 Construção e Reforma surgiu da paixão pela engenharia e pelo desejo de transformar espaços com qualidade e excelência técnica. Há anos no mercado da Bahia, crescemos com base na confiança de nossos clientes e no compromisso com resultados excepcionais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="reveal-element opacity-0 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-m2green mb-2">Missão</h4>
                <p className="text-sm text-gray-700">
                  Transformar espaços e vidas através da engenharia de qualidade, superando expectativas.
                </p>
              </div>
              
              <div className="reveal-element opacity-0 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-m2green mb-2">Visão</h4>
                <p className="text-sm text-gray-700">
                  Ser referência em soluções de engenharia na Bahia, reconhecidos pela excelência.
                </p>
              </div>
              
              <div className="reveal-element opacity-0 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-m2green mb-2">Valores</h4>
                <p className="text-sm text-gray-700">
                  Integridade, sustentabilidade, excelência técnica e foco no cliente.
                </p>
              </div>
            </div>

            <div className="reveal-element opacity-0">
              <p className="text-gray-700 mb-6 italic border-l-4 border-m2green pl-4">
                "Nosso compromisso vai além da construção física. Construímos confiança, relacionamentos duradouros e realizamos sonhos através da engenharia."
              </p>

              <a 
                href="https://wa.me/5571983209903?text=Olá,%20gostaria%20de%20conhecer%20mais%20sobre%20a%20M2%20Construção" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Conheça Nossa Equipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
