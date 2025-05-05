import React from 'react';
import Section from './shared/Section';
import { Calendar, Clock, Users, Star, PenTool, Globe } from 'lucide-react';

const features = [
  {
    icon: <Globe size={24} className="text-indigo-600" />,
    title: 'Presença online profissional',
    description:
      'Tenha sua própria página com seu nome, formação e especialidades de forma profissional e atrativa.',
  },
  {
    icon: <Clock size={24} className="text-indigo-600" />,
    title: 'Pronto em minutos',
    description:
      'Configure sua página em menos de 5 minutos. Sem necessidade de designers ou desenvolvedores.',
  },
  {
    icon: <Calendar size={24} className="text-indigo-600" />,
    title: 'Agenda integrada',
    description:
      'Permite que pacientes agendem consultas diretamente pela sua página, integrado ao seu calendário.',
  },
  {
    icon: <Users size={24} className="text-indigo-600" />,
    title: 'Amplie sua visibilidade',
    description:
      'Seja encontrado facilmente na internet por quem precisa dos seus serviços.',
  },
  {
    icon: <PenTool size={24} className="text-indigo-600" />,
    title: 'Personalizável',
    description:
      'Escolha cores, fontes e layout que combinem com sua identidade profissional.',
  },
  {
    icon: <Star size={24} className="text-indigo-600" />,
    title: 'Depoimentos e avaliações',
    description:
      'Compartilhe feedback de pacientes para construir credibilidade e confiança.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <Section id="beneficios" background="light">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Tudo que você precisa para sua presença online
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Sem complicações técnicas, sem mensalidades caras, apenas uma solução simples e eficiente.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FeaturesSection;