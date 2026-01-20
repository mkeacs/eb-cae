import { Zap, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 px-4 border-t border-slate-800">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Elétrica Bahiana</span>
            </div>
            <p className="text-sm text-slate-400">
              Centro de Apoio ao Eletricista - CAE
              <br />
              Valorizando o profissional da área elétrica.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Localidades</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Salvador - BA
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Lauro de Freitas - BA
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Aracaju - SE
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Contato</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                (71) 3333-0000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                cae@eletricabahiana.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Elétrica Bahiana. Todos os direitos reservados.</p>
          <p className="mt-1">Programa Fidelidade CAE - Centro de Apoio ao Eletricista</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;