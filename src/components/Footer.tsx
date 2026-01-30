import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1F5C 0%, #1E3A8A 100%)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l26 15v30L30 60 4 45V15z' fill='none' stroke='%23ffffff' stroke-opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Main Footer */}
      <div className="container max-w-6xl mx-auto px-4 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-[#0A1F5C] font-black text-lg">CAE</span>
                </div>
                <div className="text-white text-xs leading-tight">
                  <span className="font-bold">CENTRO DE APOIO</span>
                  <br />
                  <span className="font-bold">AO ELETRICISTA</span>
                </div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Valorizando o profissional da área elétrica há mais de 30 anos.
            </p>
            <p className="text-red-400 font-medium mt-3 text-sm">
              Mais forte por você!
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#beneficios" className="text-blue-200 hover:text-white transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-blue-200 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#regulamento" className="text-blue-200 hover:text-white transition-colors">
                  Regulamento
                </a>
              </li>
              <li>
                <a href="#participar" className="text-blue-200 hover:text-white transition-colors">
                  Cadastre-se
                </a>
              </li>
              <li>
                <a href="https://www.eletricabahiana.com.br" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                  Loja Online
                </a>
              </li>
            </ul>
          </div>

          {/* Nossas Lojas */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm">Nossas Lojas</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">Salvador - BA</span>
                  <p className="text-blue-300 text-xs">R. Barão de Cotegipe, 269 A - Calçada</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">Lauro de Freitas - BA</span>
                  <p className="text-blue-300 text-xs">R. Dr. Barreto, 688 - Pitangueiras</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium">Aracaju - SE</span>
                  <p className="text-blue-300 text-xs">R. Etelvino Alves de Lima, 1294</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white">(71) 3496-3111</p>
                  <p className="text-blue-300 text-xs">Salvador/Lauro</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white">(79) 3026-8100</p>
                  <p className="text-blue-300 text-xs">Aracaju</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-300" />
                </div>
                <div>
                  <p className="text-white">cae@eletricabahiana.com.br</p>
                  <p className="text-blue-300 text-xs">Atendimento CAE</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container max-w-6xl mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-200">
            <p>© {new Date().getFullYear()} Elétrica Bahiana. Todos os direitos reservados.</p>
            <p>Programa Fidelidade CAE - Centro de Apoio ao Eletricista</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
