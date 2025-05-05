import React, { useState } from 'react';
import Section from './shared/Section';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dra. Mariana Costa',
    role: 'Psicóloga Clínica',
    image: 'https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg',
    quote:
      'O SeuPsico transformou minha prática. Em menos de uma semana após criar minha página, recebi 3 novos pacientes que encontraram meu perfil online.',
    rating: 5,
  },
  {
    name: 'Dr. Ricardo Mendes',
    role: 'Psicólogo e Professor',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    quote:
      'Como professor de psicologia, sempre recomendo o SeuPsico aos meus alunos. É a forma mais fácil e profissional para começarem suas carreiras com presença digital.',
    rating: 5,
  },
  {
    name: 'Dra. Juliana Alves',
    role: 'Psicoterapeuta',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
    quote:
      'Meus pacientes adoram poder ver meu perfil e agendar consultas facilmente. A plataforma é intuitiva e me ajudou a organizar melhor minha agenda.',
    rating: 4,
  },
  {
    name: 'Dr. Felipe Santos',
    role: 'Neuropsicólogo',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    quote:
      'Como especialista em neuropsicologia, precisava de uma forma de destacar minha especificidade. O SeuPsico me permitiu fazer isso com facilidade e elegância.',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section id="depoimentos" background="white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          O que dizem nossos usuários
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Psicólogos de todo o Brasil já transformaram sua presença online com o SeuPsico
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 border border-gray-100">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full shadow-md"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={
                              i < testimonial.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 text-lg italic mb-6">"{testimonial.quote}"</p>
                      <div className="border-t border-gray-100 pt-4">
                        <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
                        <p className="text-indigo-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-indigo-600 focus:outline-none -ml-4 md:-ml-6"
          onClick={prevTestimonial}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-indigo-600 focus:outline-none -mr-4 md:-mr-6"
          onClick={nextTestimonial}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-600 mb-2">
          Junte-se a mais de 2.500 psicólogos satisfeitos
        </p>
        <div className="flex justify-center space-x-1">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;