import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Elétrica Bahiana" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Centro de Apoio ao Eletricista - CAE
              <br />
              Valorizando o profissional da área elétrica há mais de 30 anos.
            </p>
            <p className="text-blue-400 font-medium mt-3 text-sm">
              Mais forte por você!
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold text-white mb-5">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#beneficios" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#regulamento" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Regulamento
                </a>
              </li>
              <li>
                <a href="#participar" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Cadastre-se
                </a>
              </li>
              <li>
                <a href="https://www.eletricabahiana.com.br" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Loja Online
                </a>
              </li>
            </ul>
          </div>

          {/* Nossas Lojas */}
          <div>
            <h4 className="font-bold text-white mb-5">Nossas Lojas</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-slate-300 font-medium">Salvador - BA</span>
                  <p className="text-slate-500 text-xs">R. Barão de Cotegipe, 269 A - Calçada</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-slate-300 font-medium">Lauro de Freitas - BA</span>
                  <p className="text-slate-500 text-xs">R. Dr. Barreto, 688 - Pitangueiras</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-slate-300 font-medium">Aracaju - SE</span>
                  <p className="text-slate-500 text-xs">R. Etelvino Alves de Lima, 1294 - Inácio Barbosa</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-white mb-5">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-300">(71) 3496-3111</p>
                  <p className="text-slate-500 text-xs">Salvador/Lauro</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-300">(79) 3026-8100</p>
                  <p className="text-slate-500 text-xs">Aracaju</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-300">cae@eletricabahiana.com.br</p>
                  <p className="text-slate-500 text-xs">Atendimento CAE</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Elétrica Bahiana. Todos os direitos reservados.</p>
            <p>Programa Fidelidade CAE - Centro de Apoio ao Eletricista</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;