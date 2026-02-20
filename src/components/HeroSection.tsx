import { Gift, ThumbsUp, Award, HardHat, Medal, Zap, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  onParticipate: () => void;
  onRegulation: () => void;
}

// Componente Hexagon SVG
const HexagonOutline = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 115" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 2L95 28.5V86.5L50 113L5 86.5V28.5L50 2Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

// Elemento decorativo vermelho
const RedAccent = ({ className }: { className?: string }) => (
  <div className={`bg-gradient-to-b from-red-600 to-red-700 ${className}`} />
);

const HeroSection = ({ onParticipate, onRegulation }: HeroSectionProps) => {
  return (
    <>
      {/* Header Simplificado Exclusivo para a Página de Fidelidade */}
      <header className="nav-header text-white fixed top-0 left-0 right-0 z-50 bg-[#0A1F5C]/95 backdrop-blur-md border-b border-white/10 shadow-md">
        <div className="container max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between py-3">
            <Link to="/" className="flex items-center gap-3">
              <img src="/caelogo.png" alt="CAE Logo" className="h-8 w-auto brightness-0 invert" />
              <div className="w-px h-8 bg-white/30 mx-1" />
              <img src="/logo.png" alt="Elétrica Bahiana Logo" className="h-12 md:h-16 w-auto brightness-0 invert" />
            </Link>
            
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6 mr-4">
                <a href="#beneficios" className="text-white hover:text-blue-200 transition-colors font-medium text-sm">Benefícios</a>
                <a href="#como-funciona" className="text-white hover:text-blue-200 transition-colors font-medium text-sm">Como Funciona</a>
              </div>
              <Link 
                to="/" 
                className="text-white hover:text-blue-200 transition-colors font-medium text-sm flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Voltar ao Início</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden pt-24" style={{ background: 'linear-gradient(135deg, #0A1F5C 0%, #1E3A8A 40%, #2563EB 100%)' }}>
        
        {/* Hexagon decorations - Left side (Com pointer-events-none para não bloquear cliques) */}
        <div className="absolute left-0 top-1/4 -translate-x-1/2 opacity-30 pointer-events-none">
          <HexagonOutline className="w-40 h-46 text-white/30" />
        </div>
        <div className="absolute left-10 top-1/2 opacity-20 pointer-events-none">
          <HexagonOutline className="w-32 h-37 text-white/20" />
        </div>
        <div className="absolute left-20 bottom-1/4 opacity-25 pointer-events-none">
          <HexagonOutline className="w-24 h-28 text-white/25" />
        </div>

        {/* Hexagon decorations - Right side */}
        <div className="absolute right-0 top-20 translate-x-1/3 opacity-30 pointer-events-none">
          <HexagonOutline className="w-48 h-55 text-white/30" />
        </div>
        <div className="absolute right-20 top-10 opacity-20 pointer-events-none">
          <HexagonOutline className="w-28 h-32 text-white/20" />
        </div>

        {/* Red accent decorations */}
        <RedAccent className="absolute left-8 top-1/3 w-4 h-24 rounded-sm opacity-80 pointer-events-none" />
        <RedAccent className="absolute right-12 top-16 w-4 h-16 rounded-sm opacity-80 pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-4 pt-16 pb-0 relative z-10 h-full flex items-end">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            
            {/* Left Content - AQUI: Adicionado 'relative z-40' para forçar os botões a ficarem por cima de TUDO */}
            <div className="max-w-xl pb-20 lg:pb-32 relative z-40">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 cursor-default">
                  <Award className="w-4 h-4 text-yellow-400" /> 
                  <span className="text-white/90 font-medium text-sm">Clube de Vantagens</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-6 leading-none">
                <span className="text-white">PROGRAMA</span>
                <br />
                <span className="text-white/80">FIDELIDADE</span>
                <br />
                <span className="text-red-500">CAE</span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-md leading-relaxed cursor-default">
                Registe-se agora, acumule pontos a cada compra e treino e troque por prémios exclusivos!
              </p>
              
              <div className="flex flex-wrap gap-4 relative z-50">
                <button 
                  onClick={onParticipate} 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  Quero Participar
                </button>
                <button 
                  onClick={onRegulation} 
                  className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-bold transition-all cursor-pointer"
                >
                  Ver Regulamento
                </button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative hidden lg:flex h-full items-end justify-end pointer-events-none">
              <div className="relative z-10 flex justify-end items-end transform transition-transform hover:scale-105 duration-700">
                <img 
                  src="/img-hero.png" 
                  alt="Eletricistas CAE"
                  className="object-contain drop-shadow-2xl"
                  style={{ height: '85vh', width: 'auto', maxWidth: 'none' }} 
                />
              </div>

              {/* Feature icons at bottom - Aqui reativamos os cliques para caso queira adicionar ações neles futuramente */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3 items-end z-20 pointer-events-auto">
                <div className="w-20 h-20 bg-blue-700/30 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-blue-300/50 shadow-xl hover:bg-blue-700/40 transition-all mb-8">
                  <Gift className="w-9 h-9 text-white" strokeWidth={2} />
                </div>
                <div className="w-20 h-20 bg-blue-700/30 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-blue-300/50 shadow-xl hover:bg-blue-700/40 transition-all mb-0">
                  <ThumbsUp className="w-9 h-9 text-white" strokeWidth={2} />
                </div>
                <div className="w-20 h-20 bg-blue-700/30 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-blue-300/50 shadow-xl hover:bg-blue-700/40 transition-all mb-8">
                  <HardHat className="w-9 h-9 text-white" strokeWidth={2} />
                </div>
                <div className="w-20 h-20 bg-blue-700/30 backdrop-blur-md rounded-xl flex items-center justify-center border-2 border-blue-300/50 shadow-xl hover:bg-blue-700/40 transition-all mb-0">
                  <Medal className="w-9 h-9 text-white" strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider - Adicionado pointer-events-none para não sobrepor aos botões */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Vantagens Exclusivas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F5C] mt-2">Benefícios do Programa</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Gift, title: "Brindes Exclusivos", desc: "Ferramentas, EPIs e muito mais para o seu dia a dia" },
              { icon: Award, title: "Treinos", desc: "Capacitações gratuitas com certificado reconhecido" },
              { icon: Zap, title: "Pontos em Compras", desc: "Acumule pontos a cada compra na Elétrica Bahiana" },
              { icon: CheckCircle, title: "Descontos Especiais", desc: "Ofertas e promoções exclusivas para membros" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all group hover:-translate-y-1">
                <div className="w-14 h-14 mx-auto bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0A1F5C] transition-colors">
                  <item.icon className="w-7 h-7 text-[#0A1F5C] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Simples e Rápido</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F5C] mt-2">Como Funciona</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Registe-se", desc: "Preencha o formulário abaixo com os seus dados" },
              { step: "02", title: "Acumule Pontos", desc: "Participe em treinos, eventos e faça compras" },
              { step: "03", title: "Troque por Prémios", desc: "Escolha os seus benefícios no catálogo de recompensas" }
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className="w-20 h-20 bg-[#0A1F5C] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-blue-100">
                  <span className="text-2xl font-black text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 border-t-2 border-dashed border-slate-300" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={onParticipate} 
              className="bg-[#0A1F5C] hover:bg-[#0A1F5C]/90 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              Começar a Acumular Pontos
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;