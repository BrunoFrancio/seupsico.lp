import React from 'react';
import Button from './shared/Button';
import Container from './shared/Container';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-indigo-800/85 to-indigo-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center pt-20">
            <div
              className="order-2 md:order-1 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-4">
                Sua presença online profissional em{' '}
                <span className="text-indigo-300">minutos</span>, não em semanas
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Crie sua página profissional como psicólogo sem complicações.
                Simples, rápido e eficiente para seus pacientes encontrarem você
                online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="https://app.seupsico.com.br/login"
                >
                  Criar Minha Página Grátis
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="#como-funciona"
                  className="text-white border-white hover:bg-white/10"
                >
                  Como Funciona
                </Button>
              </div>
              <div className="mt-8 text-indigo-100 flex items-center">
                <span className="inline-block bg-green-400/20 text-green-300 text-xs px-2 py-1 rounded-full mr-2">
                  Novo
                </span>
                Configure em menos de 5 minutos, sem conhecimento técnico
              </div>
            </div>
            <div
              className="order-1 md:order-2 relative animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm">
                <img
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg"
                  alt="Psicóloga profissional em seu consultório"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/90 to-transparent p-6">
                  <p className="text-white font-medium">
                    "Finalmente uma solução simples para minha presença online."
                  </p>
                  <p className="text-indigo-200 text-sm mt-1">
                    - João Pedro, Psicólogo Clínico
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-4 animate-bounce">
                <p className="text-indigo-300 font-bold">+2.500</p>
                <p className="text-white text-sm">psicólogos já usam</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <a
          href="#beneficios"
          className="animate-bounce text-white/70 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
