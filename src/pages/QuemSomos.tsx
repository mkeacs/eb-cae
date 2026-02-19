import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Target, Rocket, HeartHandshake, HardHat } from "lucide-react";

const RedAccent = ({ className }: { className?: string }) => (
  <div className={`bg-gradient-to-b from-red-600 to-red-700 ${className}`} />
);

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="nav-header text-white fixed top-0 left-0 right-0 z-50 bg-[#0A1F5C]/90 backdrop-blur-md border-b border-white/10">
        <div className="container max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between py-3">
            <Link to="/" className="flex items-center gap-3">
              <img src="/caelogo.png" alt="CAE Logo" className="h-8 w-auto brightness-0 invert" />
              <div className="w-px h-8 bg-white/30 mx-1" />
              <img src="/logo.png" alt="Elétrica Bahiana Logo" className="h-12 md:h-16 w-auto brightness-0 invert" />
            </Link>
            
            <Link 
              to="/" 
              className="text-white hover:text-blue-200 transition-colors font-medium text-sm flex items-center gap-2"
            >
              ← Voltar ao Início
            </Link>
          </nav>
        </div>
      </header>
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden pt-24 bg-[#0A1F5C]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/bannercae.png"
            alt="Fundo Quem Somos" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F5C] via-[#0A1F5C]/80 to-transparent mix-blend-multiply" />
        </div>
        <RedAccent className="absolute left-8 top-1/3 w-4 h-24 rounded-sm opacity-80 z-0" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10 h-full flex items-end">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full h-full pb-16 lg:pb-0">
            <div className="max-w-2xl pt-10 pb-10 lg:pb-24">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-sm">
                  <HardHat className="w-4 h-4 text-yellow-400" /> 
                  <span className="text-white font-semibold tracking-wide text-xs uppercase">Nossa História</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6 leading-tight text-white drop-shadow-lg">
                Quem <span className="text-red-500">Somos</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-50 leading-relaxed font-medium drop-shadow-md">
                Criado em 15/03/2019 o Centro de Apoio ao Eletricista chegou na Elétrica Bahiana com o intuito de trazer o melhor atendimento, serviço e capacitação para todos os eletricistas cadastrados oferecendo os melhores produtos e preços de mercado.
              </p>
            </div>
            <div className="relative hidden lg:flex h-full items-end justify-end">
              <div className="relative z-10 flex justify-end items-end transform transition-transform hover:scale-105 duration-700">
                <img 
                  src="/mascote.png"
                  alt="Mascote Eletricista CAE"
                  className="object-contain drop-shadow-2xl"
                  style={{ 
                    maxHeight: '60vh',
                    width: 'auto',
                    maxWidth: 'none',
                    marginBottom: '-5px'
                  }} 
                />
              </div>
            </div>

          </div>
        </div>

        {/* Onda Divisória (igual da página inicial) */}
        <div className="absolute bottom-0 left-0 right-0 z-30 translate-y-[1px]">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* SEÇÃO MISSÃO, VISÃO E VALORES */}
      <section className="flex-1 py-16 md:py-24 bg-slate-50 relative z-40">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 text-center relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#0A1F5C] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-4 border-blue-50 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Nossa Visão</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Nós visamos nos tornar até 2023 referência de suporte e atendimento aos eletricistas da Bahia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 text-center relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#0A1F5C] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-4 border-blue-50 group-hover:scale-110 transition-transform">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Nossa Missão</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Nossa missão é alavancar a qualidade dos serviços prestados e a vida dos eletricistas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 text-center relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#0A1F5C] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-4 border-blue-50 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Nossos Valores</h3>
              <ul className="text-slate-600 text-base leading-relaxed space-y-3 text-left">
                <li><strong className="text-slate-900 font-bold">Acolhimento:</strong> receber e priorizar os eletricistas.</li>
                <li><strong className="text-slate-900 font-bold">Tangibilidade:</strong> oferecer benefícios reais.</li>
                <li><strong className="text-slate-900 font-bold">Conexão:</strong> conectar o eletricista com a sociedade.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;