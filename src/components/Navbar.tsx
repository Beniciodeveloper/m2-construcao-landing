import React, { useState, useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Apply cascade animation on mount
    const navLinks = navRef.current?.querySelectorAll('.nav-link');
    navLinks?.forEach((link, index) => {
      (link as HTMLElement).style.animationDelay = `${index * 0.1}s`;
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Orçamento', href: '#quote' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Quem Somos', href: '#about' },
    { name: 'Diferenciais', href: '#advantages' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <nav 
      className={`py-4 w-full transition-all duration-300 fixed top-0 left-0 z-50 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
      ref={navRef}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center animate-cascade">
            <img 
              src="/lovable-uploads/94e520fc-a1c8-4f68-ad92-35fca41816da.png" 
              alt="M2 Construção e Reforma" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="nav-link text-gray-700 hover:text-m2green font-medium transition-colors animate-cascade opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5571983209903" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center animate-cascade opacity-0"
              style={{ animationDelay: `${navItems.length * 0.1}s` }}
            >
              <Phone size={18} className="mr-2" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center animate-cascade"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-700" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 absolute left-4 right-4 z-50 border border-gray-100">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-700 hover:text-m2green py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors animate-cascade opacity-0"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5571983209903" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-center mt-2 animate-cascade opacity-0"
                style={{ animationDelay: `${navItems.length * 0.05}s` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={18} className="inline-block mr-2" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
