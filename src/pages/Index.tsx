
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import QuoteSection from '../components/QuoteSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import AdvantagesSection from '../components/AdvantagesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  // Update page title
  useEffect(() => {
    document.title = "M2 Construção e Reforma | Soluções em Engenharia";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <QuoteSection />
        <ProjectsSection />
        <AboutSection />
        <AdvantagesSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
