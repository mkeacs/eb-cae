import { Zap, Gift, Award, Check } from "lucide-react";

interface HeroSectionProps {
  onParticipate: () => void;
  onRegulation: () => void;
}

const HeroSection = ({ onParticipate, onRegulation }: HeroSectionProps) => {
  return (
    <>
      {/* Header */}
      <header className="nav-header text-white">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm border-b border-white/10">
            <a href="mailto:contato@eletricabahiana.com.br" className="text-white/70 hover:text-white transition-colors">
              contato@eletricabahiana.com.br
            </a>
            <span className="text-blue-300 font-medium">Mais forte por você!</span>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <img 
                src="/logo.png" 
                alt="Elétrica Bahiana" 
                className="h-24 md:h-32 w-auto"
              />
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#beneficios" className="text-white/80 hover:text-white transition-colors font-medium">
                Benefícios
              </a>
              <a href="#como-funciona" className="text-white/80 hover:text-white transition-colors font-medium">
                Como Funciona
              </a>
              <a href="#regulamento" className="text-white/80 hover:text-white transition-colors font-medium">
                Regulamento
              </a>
              <button 
                onClick={onParticipate}
                className="bg-blue-500 hover:bg-blue-400 px-6 py-2 rounded-full font-semibold transition-all"
              >
                Cadastre-se
              </button>
            </div>

            {/* Mobile menu button */}
            <button onClick={onParticipate} className="md:hidden bg-blue-500 px-4 py-2 rounded-full text-sm font-semibold">
              Cadastrar
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: 'var(--hero-gradient)' }}>
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container max-w-6xl mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-white/90 font-medium text-sm">Centro de Apoio ao Eletricista</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-tight text-white">
              Programa
              <br />
              <span className="text-blue-400">Fidelidade</span>
              <br />
              <span className="text-yellow-400">CAE</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-xl">
              Cadastre-se agora, acumule pontos em compras e treinamentos, e troque por prêmios exclusivos!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button onClick={onParticipate} className="btn-hero">
                Quero Participar
              </button>
              <button onClick={onRegulation} className="btn-outline-hero">
                Ver Regulamento
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-white/90 text-sm font-medium">100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-white/90 text-sm font-medium">+5.000 Eletricistas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-white/90 text-sm font-medium">30 Anos de Mercado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="hidden lg:block absolute right-20 bottom-32 z-10">
          <div className="flex gap-4">
            <div className="w-24 h-24 bg-blue-800/50 backdrop-blur rounded-2xl flex items-center justify-center border border-blue-400/30">
              <Zap className="w-10 h-10 text-yellow-400" />
            </div>
            <div className="w-24 h-24 bg-blue-800/50 backdrop-blur rounded-2xl flex items-center justify-center mt-8 border border-blue-400/30">
              <Gift className="w-10 h-10 text-blue-300" />
            </div>
            <div className="w-24 h-24 bg-blue-800/50 backdrop-blur rounded-2xl flex items-center justify-center border border-blue-400/30">
              <Award className="w-10 h-10 text-blue-300" />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
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
              { icon: Check, title: "Descontos Especiais", desc: "Ofertas e promoções exclusivas para membros" }
            ].map((item, i) => (
              <div key={i} className="benefit-card group">
                <div className="icon-circle w-14 h-14 mb-5">
                  <item.icon className="w-7 h-7 text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
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
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-black text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={onParticipate} className="btn-primary text-lg px-10 py-4">
              Começar Agora
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;