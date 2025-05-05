import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = 'SeuPsico | Sua presença online profissional em minutos';
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen transition-opacity duration-1000 ease-out ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <TestimonialsSection />
        {/*<PricingSection /> */}
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
