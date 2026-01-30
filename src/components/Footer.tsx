import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(120deg, #E31E24 0%, #1E40AF 30%, #0A1F5C 70%, #050D2E 100%)' }}>
      {/* Circuit board pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-48 opacity-20" viewBox="0 0 1200 200" preserveAspectRatio="none">
          {/* Circuit lines group 1 - left side */}
          <g stroke="rgba(147, 197, 253, 0.5)" strokeWidth="1" fill="none">
            <path d="M50 200 L50 150 L30 130 L30 100" />
            <circle cx="30" cy="100" r="4" fill="rgba(147, 197, 253, 0.5)" />
            <path d="M80 200 L80 120 L100 100 L100 60" />
            <circle cx="100" cy="60" r="4" fill="rgba(147, 197, 253, 0.5)" />
            <path d="M120 200 L120 170 L140 150 L140 80" />
            <circle cx="140" cy="80" r="4" fill="rgba(147, 197, 253, 0.5)" />
            <path d="M160 200 L160 140" />
            <circle cx="160" cy="140" r="3" fill="rgba(147, 197, 253, 0.5)" />
            <path d="M200 200 L200 160 L180 140 L180 90" />
            <circle cx="180" cy="90" r="4" fill="rgba(147, 197, 253, 0.5)" />
          </g>
          {/* Circuit lines group 2 - center left */}
          <g stroke="rgba(147, 197, 253, 0.4)" strokeWidth="1" fill="none">
            <path d="M300 200 L300 130 L320 110 L320 70" />
            <circle cx="320" cy="70" r="4" fill="rgba(147, 197, 253, 0.4)" />
            <path d="M350 200 L350 180 L370 160 L370 100" />
            <circle cx="370" cy="100" r="3" fill="rgba(147, 197, 253, 0.4)" />
            <path d="M400 200 L400 150" />
            <circle cx="400" cy="150" r="4" fill="rgba(147, 197, 253, 0.4)" />
            <path d="M450 200 L450 160 L430 140 L430 80" />
            <circle cx="430" cy="80" r="3" fill="rgba(147, 197, 253, 0.4)" />
          </g>
          {/* Circuit lines group 3 - center */}
          <g stroke="rgba(147, 197, 253, 0.3)" strokeWidth="1" fill="none">
            <path d="M550 200 L550 140 L570 120 L570 60" />
            <circle cx="570" cy="60" r="4" fill="rgba(147, 197, 253, 0.3)" />
            <path d="M600 200 L600 170 L620 150 L620 90" />
            <circle cx="620" cy="90" r="3" fill="rgba(147, 197, 253, 0.3)" />
            <path d="M650 200 L650 130" />
            <circle cx="650" cy="130" r="4" fill="rgba(147, 197, 253, 0.3)" />
            <path d="M700 200 L700 160 L680 140 L680 70" />
            <circle cx="680" cy="70" r="3" fill="rgba(147, 197, 253, 0.3)" />
          </g>
          {/* Circuit lines group 4 - center right */}
          <g stroke="rgba(147, 197, 253, 0.35)" strokeWidth="1" fill="none">
            <path d="M800 200 L800 120 L820 100 L820 50" />
            <circle cx="820" cy="50" r="4" fill="rgba(147, 197, 253, 0.35)" />
            <path d="M850 200 L850 170 L870 150 L870 80" />
            <circle cx="870" cy="80" r="3" fill="rgba(147, 197, 253, 0.35)" />
            <path d="M900 200 L900 140" />
            <circle cx="900" cy="140" r="4" fill="rgba(147, 197, 253, 0.35)" />
            <path d="M950 200 L950 150 L930 130 L930 60" />
            <circle cx="930" cy="60" r="3" fill="rgba(147, 197, 253, 0.35)" />
          </g>
          {/* Circuit lines group 5 - right side */}
          <g stroke="rgba(147, 197, 253, 0.4)" strokeWidth="1" fill="none">
            <path d="M1050 200 L1050 130 L1070 110 L1070 50" />
            <circle cx="1070" cy="50" r="4" fill="rgba(147, 197, 253, 0.4)" />
            <path d="M1100 200 L1100 160 L1120 140 L1120 70" />
            <circle cx="1120" cy="70" r="3" fill="rgba(147, 197, 253, 0.4)" />
            <path d="M1150 200 L1150 140" />
            <circle cx="1150" cy="140" r="4" fill="rgba(147, 197, 253, 0.4)" />
            <path d="M1180 200 L1180 170 L1160 150 L1160 90" />
            <circle cx="1160" cy="90" r="3" fill="rgba(147, 197, 253, 0.4)" />
          </g>
        </svg>
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
