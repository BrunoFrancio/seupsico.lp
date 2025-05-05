import React from 'react';
import Section from './shared/Section';
import Button from './shared/Button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Profissional',
    price: '29,90',
    period: 'por mês',
    description: 'Para psicólogos que querem mais recursos',
    features: [
      'Tudo do plano Gratuito',
      'Agendamento online',
      'Integração com WhatsApp',
      'Depoimentos de pacientes',
      'Especialidades ilimitadas',
      'Personalização avançada',
      "Sem marca d'água",
      'Suporte prioritário',
    ],
    cta: 'Escolher Profissional',
    featured: true,
  },
  {
    name: 'Clínica',
    price: '99,90',
    period: 'por mês',
    description: 'Para clínicas com múltiplos profissionais',
    features: [
      'Tudo do plano Profissional',
      'Até 5 psicólogos',
      'Perfil da clínica',
      'Destaque nos resultados',
      'Domínio personalizado',
      'Estatísticas avançadas',
      'Gerenciamento de equipe',
      'Suporte VIP',
    ],
    cta: 'Contatar Vendas',
    featured: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <Section id="precos" background="light">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Planos simples e transparentes
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Escolha o plano ideal para suas necessidades, sem surpresas
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
              plan.featured
                ? 'border-2 border-indigo-500 relative scale-105 z-10 bg-white'
                : 'bg-white'
            }`}
          >
            {plan.featured && (
              <div className="absolute top-0 right-0">
                <div className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
                  Mais Popular
                </div>
              </div>
            )}
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">
                  R${plan.price}
                </span>
                <span className="text-gray-600">/{plan.period}</span>
              </div>
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                variant={plan.featured ? 'primary' : 'outline'}
                size="lg"
                href="#comecar"
                className="w-full justify-center"
              >
                {plan.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-indigo-50 rounded-lg text-center">
        <p className="text-gray-700 mb-4">
          Precisa de algo personalizado para sua necessidade específica?
        </p>
        <Button variant="secondary" size="md" href="#contato">
          Entre em contato conosco
        </Button>
      </div>
    </Section>
  );
};

export default PricingSection;
