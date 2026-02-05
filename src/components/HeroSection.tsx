import { Gift, ThumbsUp, Award, HardHat , Medal, Zap, CheckCircle } from "lucide-react";

interface HeroSectionProps {
  onParticipate: () => void;
  onRegulation: () => void;
}

// Hexagon SVG Component
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

// Red decorative element
const RedAccent = ({ className }: { className?: string }) => (
  <div className={`bg-gradient-to-b from-red-600 to-red-700 ${className}`} />
);

const HeroSection = ({ onParticipate, onRegulation }: HeroSectionProps) => {
  return (
    <>
        {/* Header */}
        <header className="nav-header text-white fixed top-0 left-0 right-0 z-50">
          <div className="container max-w-7xl mx-auto px-4">
            {/* Navigation - Single row */}
            <nav className="flex items-center justify-between py-3">
              <div className="flex items-center gap-4">
                {/* Logos */}
                <div className="flex items-center gap-3">
                  {/* CAE Logo */}
                  <div className="flex items-center gap-2">
                    <img 
                      src="/caelogo.png" 
                      alt="CAE Logo" 
                      className="h-8 w-auto brightness-0 invert"
                    />
                  </div>
                  
                  {/* Divider */}
                  <div className="w-px h-8 bg-white/30 mx-1" />
                  
                    <div className="flex items-center gap-2">
                      <img 
                        src="/logo.png" 
                        alt="Elétrica Bahiana Logo" 
                        className="h-16 w-auto brightness-0 invert"
                      />
                    </div>
                </div>
              </div>
              
              {/* Navigation Menu */}
              <div className="hidden md:flex items-center gap-6">
                <a href="#beneficios" className="text-white hover:text-blue-200 transition-colors font-medium text-sm">
                  Benefícios
                </a>
                <a href="#como-funciona" className="text-white hover:text-blue-200 transition-colors font-medium text-sm">
                  Como Funciona
                </a>
                <a href="#regulamento" className="text-white hover:text-blue-200 transition-colors font-medium text-sm">
                  Regulamento
                </a>
                <button 
                  onClick={() => {
                    console.log("Botão Cadastre-se clicado!");
                    onParticipate();
                  }}
                  className="bg-red-600 hover:bg-red-500 px-6 py-2 rounded-full font-semibold transition-all text-sm border-2 border-white shadow-lg"
                >
                  Cadastre-se
                </button>
              </div>

              {/* Mobile menu button */}
              <button 
                onClick={() => {
                  console.log("Botão Mobile clicado!");
                  onParticipate();
                }} 
                className="md:hidden bg-red-600 px-4 py-1.5 rounded-full text-xs font-semibold border-2 border-white"
              >
                Cadastrar
              </button>
            </nav>
          </div>
        </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden pt-24" style={{ background: 'linear-gradient(135deg, #0A1F5C 0%, #1E3A8A 40%, #2563EB 100%)' }}>
        {/* Hexagon decorations - Left side */}
        <div className="absolute left-0 top-1/4 -translate-x-1/2 opacity-30">
          <HexagonOutline className="w-40 h-46 text-white/30" />
        </div>
        <div className="absolute left-10 top-1/2 opacity-20">
          <HexagonOutline className="w-32 h-37 text-white/20" />
        </div>
        <div className="absolute left-20 bottom-1/4 opacity-25">
          <HexagonOutline className="w-24 h-28 text-white/25" />
        </div>

        {/* Hexagon decorations - Right side */}
        <div className="absolute right-0 top-20 translate-x-1/3 opacity-30">
          <HexagonOutline className="w-48 h-55 text-white/30" />
        </div>
        <div className="absolute right-20 top-10 opacity-20">
          <HexagonOutline className="w-28 h-32 text-white/20" />
        </div>

        {/* Red accent decorations */}
        <RedAccent className="absolute left-8 top-1/3 w-4 h-24 rounded-sm opacity-80" />
        <RedAccent className="absolute right-12 top-16 w-4 h-16 rounded-sm opacity-80" />

        <div className="container max-w-7xl mx-auto px-4 pt-16 pb-0 relative z-10 h-full flex items-end">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            {/* Left Content */}
            <div className="max-w-xl pb-20 lg:pb-32">
              {/* Badge */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/90 font-medium text-sm">Centro de Apoio ao Eletricista</span>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-6 leading-none">
                <span className="text-white">PROGRAMA</span>
                <br />
                <span className="text-white/80">FIDELIDADE</span>
                <br />
                <span className="text-red-500">CAE</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-md leading-relaxed">
                Cadastre-se agora, acumule pontos a cada compra e treinamento e troque por prêmios exclusivos!
              </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => {
                      console.log("Botão Participar clicado!");
                      onParticipate();
                    }} 
                    className="btn-hero relative z-50"
                    style={{ pointerEvents: 'auto' }}
                  >
                    Quero Participar
                  </button>
                  <button 
                    onClick={() => {
                      console.log("Botão Regulamento clicado!");
                      onRegulation();
                    }} 
                    className="btn-outline-hero relative z-50"
                    style={{ pointerEvents: 'auto' }}
                  >
                    Ver Regulamento
                  </button>
                </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative hidden lg:flex h-full items-end justify-end">
              <div className="relative z-10 flex justify-end items-end transform transition-transform hover:scale-105 duration-700">
                <img 
                  src="/img-hero.png" 
                  alt="Eletricistas CAE"
                  className="object-contain drop-shadow-2xl"
                  style={{ 
                    height: '85vh',
                    width: 'auto',
                    maxWidth: 'none'
                  }} 
                />
              </div>

                {/* Feature icons at bottom - Centralized below image */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3 items-end z-20">
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

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-subtitle">Vantagens Exclusivas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Benefícios do Programa</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Gift, title: "Brindes Exclusivos", desc: "Ferramentas, EPIs e muito mais para o seu dia a dia" },
              { icon: Award, title: "Treinamentos", desc: "Capacitações gratuitas com certificado reconhecido" },
              { icon: Zap, title: "Pontos em Compras", desc: "Acumule pontos a cada compra na Elétrica Bahiana" },
              { icon: CheckCircle, title: "Descontos Especiais", desc: "Ofertas e promoções exclusivas para membros" }
            ].map((item, i) => (
              <div key={i} className="benefit-card group">
                <div className="icon-circle w-14 h-14 mx-auto mb-5">
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
            <span className="section-subtitle">Simples e Rápido</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Como Funciona</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Cadastre-se", desc: "Preencha o formulário com seus dados pessoais e profissionais" },
              { step: "02", title: "Acumule Pontos", desc: "Participe de treinamentos, eventos e faça compras" },
              { step: "03", title: "Troque por Prêmios", desc: "Escolha seus benefícios no catálogo de recompensas" }
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className="w-20 h-20 bg-[#0A1F5C] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-blue-200">
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
              onClick={() => {
                console.log("Botão Começar Agora clicado!");
                onParticipate();
              }} 
              className="btn-primary text-lg px-10 py-4"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;