import React, { useState } from 'react';
import Section from './shared/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Quanto tempo leva para criar minha página?',
    answer:
      'O processo de criação é muito rápido. Você pode ter sua página profissional pronta em menos de 5 minutos, apenas preenchendo suas informações básicas e escolhendo um tema.',
  },
  {
    question: 'Preciso ter conhecimentos técnicos?',
    answer:
      'Não! O SeuPsico foi desenvolvido especialmente para psicólogos sem conhecimentos técnicos. Nossa interface é intuitiva e fácil de usar, sem necessidade de conhecimento em design ou programação.',
  },
  {
    question: 'Como os pacientes encontrarão minha página?',
    answer:
      'Sua página será otimizada para mecanismos de busca (SEO), o que ajuda pessoas a encontrarem você quando buscarem por psicólogos em sua região. Além disso, você pode compartilhar o link da sua página em suas redes sociais e cartões de visita.',
  },
  /*{
    question: 'Posso mudar de plano depois?',
    answer:
      'Sim, você pode começar com o plano gratuito e upgrade para o plano profissional ou clínica a qualquer momento, mantendo todas as suas informações e personalizações.',
  },
  */
  {
    question: 'Como funciona o agendamento online?',
    answer:
      'Defina seus dias e horários disponíveis para atendimento, e seus clientes poderão escolher o melhor momento para serem atendidos.',
  },
  /*{
  {
    question: 'O SeuPsico está de acordo com as normas do CFP?',
    answer:
      'Sim, desenvolvemos o SeuPsico seguindo todas as diretrizes do Conselho Federal de Psicologia para atuação online de psicólogos, garantindo que sua presença digital esteja em conformidade com as normas profissionais.',
  },
   */
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" background="white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Encontre respostas para as dúvidas mais comuns
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`mb-4 border border-gray-200 rounded-lg overflow-hidden ${
              openIndex === index ? 'shadow-md' : ''
            }`}
          >
            <button
              className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-lg text-gray-900">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-indigo-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="text-gray-600 flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-5 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-700 mb-4">Não encontrou sua pergunta?</p>
        <a
          href="#contato"
          className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
        >
          Entre em contato com nossa equipe
        </a>
      </div>
    </Section>
  );
};

export default FAQSection;
