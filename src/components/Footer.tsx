import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.footer-animate');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
            // Ensure element stays visible after animation
            setTimeout(() => {
              entry.target.classList.add('opacity-100');
            }, 300);
          }, index * 100); // Stagger the animations
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
    <footer className="bg-m2green text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="footer-animate opacity-0">
            <img 
              src="/lovable-uploads/94e520fc-a1c8-4f68-ad92-35fca41816da.png" 
              alt="M2 Construção e Reforma" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-200 mb-4">
              Soluções completas em engenharia para projetos residenciais, comerciais e industriais em Salvador e região.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/5571983209903?text=Olá,%20vim%20pelo%20site%20da%20M2%20e%20gostaria%20de%20solicitar%20um%20orçamento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/m2engenharia_?igsh=MTRlbWRyZ2p6bmhtcw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://m.youtube.com/@m2podcastba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-animate opacity-0">
            <h3 className="text-xl font-display font-bold mb-4">Contatos</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-m2red mr-2 mt-1" size={18} />
                <span className="text-gray-300">
                  Avenida Antônio Carlos Magalhães, 2501<br />
                  Edifício Profissional Center – Sala 324
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-m2red mr-2" size={18} />
                <a href="tel:+5571983209903" className="text-gray-300 hover:text-white transition-colors">
                  (71) 98320-9903
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-m2red mr-2" size={18} />
                <a href="mailto:m2comercial@hotmail.com" className="text-gray-300 hover:text-white transition-colors">
                  m2comercial@hotmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-animate opacity-0">
            <h3 className="text-xl font-display font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Home', 'Serviços', 'Orçamento', 'Projetos', 'Quem Somos', 'Diferenciais', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase().replace(' ', '-')}`} 
                    className="footer-link"
                  >
                    <ChevronRight size={16} className="text-m2red mr-1 transition-transform duration-300" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-animate opacity-0">
            <h3 className="text-xl font-display font-bold mb-4">Áreas de Atuação</h3>
            <ul className="grid grid-cols-2 gap-2">
              {['Salvador', 'Camaçari', 'Lauro de Freitas', 'Ilhéus', 'Simões Filho', 'Mata de São João'].map((area) => (
                <li key={area} className="flex items-center text-gray-300 hover:text-white transition-colors group">
                  <span className="text-m2red mr-1 transition-transform duration-300 group-hover:scale-125">✓</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 mt-8 text-center text-gray-200 footer-animate opacity-0">
          <p>© {new Date().getFullYear()} M2 Construção e Reforma. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
