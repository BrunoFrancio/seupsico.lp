import React from 'react';
import Section from './shared/Section';
import Button from './shared/Button';

const steps = [
  {
    number: '01',
    title: 'Crie sua conta',
    description:
      'Registre-se gratuitamente em menos de 1 minuto com seu email.',
    image: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg',
  },
  {
    number: '02',
    title: 'Preencha seu perfil',
    description:
      'Adicione suas informações profissionais, formação e especialidades.',
    image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg',
  },
  {
    number: '03',
    title: 'Personalize sua página',
    description: 'Escolha cores, adicione sua foto e personalize como quiser.',
    image: 'https://images.pexels.com/photos/7473366/pexels-photo-7473366.jpeg',
  },
  {
    number: '04',
    title: 'Compartilhe e cresça',
    description: 'Divulgue seu link e comece a receber pacientes online.',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <Section id="como-funciona" background="gradient">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Como funciona
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Processo simples e rápido para você ter sua página online profissional
        </p>
      </div>

      <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
        {steps.map((step, index) => (
          <div key={index} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-md mb-4 aspect-w-16 aspect-h-9">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent flex items-end">
                <span className="text-5xl font-bold text-white/30 p-4">
                  {step.number}
                </span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">
              {step.title}
            </h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button variant="primary" size="lg" href="https://app.seupsico.com.br/login">
          Começar Agora
        </Button>
      </div>
    </Section>
  );
};

export default HowItWorks;
