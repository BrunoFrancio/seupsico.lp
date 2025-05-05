import React from 'react';
import Container from './shared/Container';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <Container>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">SeuPsico</h3>
            <p className="mb-4">
              A forma mais simples para psicólogos criarem sua presença online
              profissional.
            </p>
          </div>
          <div id="contato">
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail
                  size={20}
                  className="mr-3 text-indigo-400 flex-shrink-0 mt-1"
                />
                <span>brunofrancio.dev@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone
                  size={20}
                  className="mr-3 text-indigo-400 flex-shrink-0 mt-1"
                />
                <span>(54) 99983-2993</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} SeuPsico. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Termos de Serviço
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
