
import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Instagram, Youtube, Clock } from 'lucide-react';

const ContactSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-element');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
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
    <section id="contact" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle reveal-element opacity-0">
            Estamos prontos para atender suas necessidades em engenharia e construção
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="reveal-element opacity-0">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <h3 className="text-2xl font-display font-semibold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-m2green mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-gray-700">
                      Avenida Antônio Carlos Magalhães, 2501<br />
                      Edifício Profissional Center – Sala 324<br />
                      Salvador, BA
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-m2green mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-gray-700">
                      <a href="tel:+5571983209903" className="hover:text-m2green transition-colors">
                        (71) 98320-9903
                      </a><br />
                      <a href="tel:+5571991017313" className="hover:text-m2green transition-colors">
                        (71) 99101-7313 (WhatsApp)
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-m2green mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <p className="text-gray-700">
                      <a href="mailto:m2comercial@hotmail.com" className="hover:text-m2green transition-colors">
                        m2comercial@hotmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-m2green mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-700">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://wa.me/5571991017313" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white p-3 rounded-full hover:bg-[#25D366]/80 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#E4405F] text-white p-3 rounded-full hover:bg-[#E4405F]/80 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#FF0000] text-white p-3 rounded-full hover:bg-[#FF0000]/80 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-element opacity-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.858907948763!2d-38.476883023659286!3d-12.990178061865945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b47e4e81669%3A0x1d240c9e10b91d2c!2sCondom%C3%ADnio%20Edif%C3%ADcio%20Profissional%20Center!5e0!3m2!1spt-BR!2sbr!4v1712539184993!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="M2 Construção e Reforma Localização"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
