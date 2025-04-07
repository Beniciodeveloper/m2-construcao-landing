
import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
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
    <nav className={`py-4 w-full transition-all duration-300 ${isScrolled ? 'sticky-nav' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-display font-bold text-m2green">M2</h1>
            <p className="ml-2 hidden sm:block text-gray-600">Construção e Reforma</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-gray-700 hover:text-m2green font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5571991017313" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center"
            >
              <Phone size={18} className="mr-2" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center"
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
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-4 right-4 z-50">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-700 hover:text-m2green py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5571991017313" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-center mt-2"
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
