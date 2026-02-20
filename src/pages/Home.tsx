import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { ArrowRight, Wrench, ShieldCheck, Award } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* HEADER */}
      <header className="nav-header text-white fixed top-0 left-0 right-0 z-50 bg-[#0A1F5C]/90 backdrop-blur-md border-b border-white/10">
        <div className="container max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between py-3">
            <Link to="/" className="flex items-center gap-3">
              <img src="/caelogo.png" alt="CAE Logo" className="h-8 w-auto brightness-0 invert" />
              <div className="w-px h-8 bg-white/30 mx-1" />
              <img src="/logo.png" alt="Elétrica Bahiana Logo" className="h-12 md:h-16 w-auto brightness-0 invert" />
            </Link>
            
            {/* Menu de Navegação Rápida */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link to="/quem-somos" className="hover:text-blue-200 transition-colors">Quem Somos</Link>
              <Link to="/informativo" className="hover:text-blue-200 transition-colors">Informativo</Link>
              <Link to="/contato" className="hover:text-blue-200 transition-colors">Contato</Link>
            </div>

            {/* BOTÃO DO HEADER - Atualizado para Fidelidade */}
            <Link 
              to="/cadastro/fidelidade" 
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Programa de Fidelidade <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO SECTION DA HOME */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#0A1F5C] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img-hero.png" alt="Eletricista Trabalhando" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F5C] via-[#0A1F5C]/90 to-transparent" />
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 text-white drop-shadow-lg leading-tight">
              Centro de Apoio ao <span className="text-red-500">Eletricista</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              Valorizando o profissional através de qualificação, parcerias e um clube de vantagens exclusivo. Faça parte da rede da Elétrica Bahiana!
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              
              {/* BOTÃO DA HERO SECTION - Atualizado para Eletricista */}
              <Link 
                to="/cadastro/profissional" 
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Quero me Cadastrar
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link 
                to="/quem-somos" 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
          <div className="hidden md:block flex-1">
            <img src="/mascote.png" alt="Mascote CAE" className="max-w-md ml-auto drop-shadow-2xl animate-pulse-slow" />
          </div>
        </div>

        {/* Onda Divisória */}
        <div className="absolute bottom-0 left-0 right-0 z-30 translate-y-[1px]">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* SEÇÃO DE DESTAQUES */}
      <section className="py-20 bg-slate-50 relative z-40">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A1F5C] uppercase mb-4">Por que fazer parte do CAE?</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-blue-50 text-[#0A1F5C] rounded-2xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Qualificação</h3>
              <p className="text-slate-600">Acesso a treinamentos e atualizações constantes sobre as novidades do setor elétrico.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Clube de Pontos</h3>
              <p className="text-slate-600">Suas compras valem pontos que podem ser trocados por prêmios e ferramentas.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Parcerias Fortes</h3>
              <p className="text-slate-600">Apoio direto das maiores marcas do mercado para garantir a qualidade do seu trabalho.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;