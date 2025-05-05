import React, { useState } from 'react';
import Section from './shared/Section';
import Button from './shared/Button';

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    especialidade: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.whatsapp) {
      alert('Por favor, preencha nome, email e WhatsApp.');
      return;
    }

    try {
      await fetch(
        'https://hook.us2.make.com/65hj7fzsl9x8gg6s3cojlwdbly59h4g2',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      // 2. Montar mensagem para o WhatsApp
      const mensagem = `Olá! Meu nome é ${formData.nome} e gostaria de utilizar o Seupsico para criar meu perfil online e gerenciar meus agendamentos.`;
      const whatsappLink = `https://wa.me/55${formData.whatsapp.replace(
        /\D/g,
        ''
      )}?text=${encodeURIComponent(mensagem)}`;

      // 3. Redirecionar para o WhatsApp
      window.location.href = whatsappLink;
    } catch (error) {
      console.error('Erro ao enviar dados para o Google Sheets:', error);

      if (error instanceof Response) {
        const errorText = await error.text();
        console.error('Resposta do servidor:', errorText);
      }

      alert(
        'Houve um erro ao enviar suas informações. Por favor, tente novamente.'
      );
    }
  };

  return (
    <Section id="comecar" background="gradient" className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Pronto para transformar sua presença online?
        </h2>
        <p className="text-xl text-gray-700 mb-8 md:px-12">
          Junte-se a milhares de psicólogos que já simplificaram seu caminho
          para novos pacientes. Crie sua página profissional agora mesmo.
        </p>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
          <h3 className="text-2xl font-semibold mb-6">
            Crie sua página profissional gratuitamente
          </h3>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            <input
              type="text"
              name="nome"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={handleChange}
              className="w-full md:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu melhor email"
              value={formData.email}
              onChange={handleChange}
              className="w-full md:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="whatsapp"
              placeholder="Seu WhatsApp (com DDD)"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full md:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="especialidade"
              placeholder="Sua especialidade (opcional)"
              value={formData.especialidade}
              onChange={handleChange}
              className="w-full md:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full col-span-1 md:col-span-2 md:w-auto whitespace-nowrap"
            >
              Começar Agora
            </Button>
          </form>

          <p className="text-gray-500 text-sm mt-4">
            Ao criar sua conta, você concorda com nossos
            <a href="#" className="text-indigo-600 hover:underline">
              {' '}
              Termos de Serviço{' '}
            </a>
            e{' '}
            <a href="#" className="text-indigo-600 hover:underline">
              Política de Privacidade
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
