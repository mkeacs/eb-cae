import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Mail, Phone, MessageCircle, Send, MapPin } from "lucide-react";

const RedAccent = ({ className }: { className?: string }) => (
  <div className={`bg-gradient-to-b from-red-600 to-red-700 ${className}`} />
);

const Contato = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* HEADER - Mesmo padrão da QuemSomos */}
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

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-[#0A1F5C] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/bannercae.png" alt="Fundo Contato" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F5C] via-[#0A1F5C]/90 to-[#0A1F5C]/50" />
        </div>
        <RedAccent className="absolute left-8 top-1/4 w-4 h-16 rounded-sm opacity-80 z-0" />
        
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4 text-white drop-shadow-lg">
            Fale <span className="text-red-500">Conosco</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            A Elétrica Bahiana é mais forte por você! Entre em contato conosco para tirar dúvidas, fazer parcerias ou saber mais sobre o CAE.
          </p>
        </div>

        {/* Onda Divisória */}
        <div className="absolute bottom-0 left-0 right-0 z-30 translate-y-[1px]">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL (Formulário e Contatos) */}
      <section className="flex-1 py-16 bg-slate-50 relative z-40">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Informações de Contato */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#0A1F5C] mb-6 border-b border-slate-200 pb-4">Nossos Canais</h3>
              
              <a href="mailto:contato@eletricabahiana.com.br" className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-blue-50 text-[#0A1F5C] rounded-full flex items-center justify-center group-hover:bg-[#0A1F5C] group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">E-mail</p>
                  <p className="text-slate-900 font-semibold">contato@centrodeapoioaoeletricista.com.br</p>
                </div>
              </a>

              <a href="tel:557134963111" className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-blue-50 text-[#0A1F5C] rounded-full flex items-center justify-center group-hover:bg-[#0A1F5C] group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Telefone</p>
                  <p className="text-slate-900 font-semibold">(71) 3496-3111</p>
                </div>
              </a>

              <a href="https://api.whatsapp.com/send?phone=5571996530262" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">WhatsApp</p>
                  <p className="text-slate-900 font-semibold">(71) 99653-0262</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Endereços</p>
                  <p className="text-slate-900 font-medium text-sm mt-1">Rua Barão de Cotegipe, 269 A – Calçada – Salvador – BA</p>
                  <p className="text-slate-900 font-medium text-sm mt-1">Rua Dr. Barreto, 688 – Lauro de Freitas – BA</p>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-[#0A1F5C] mb-6">Envie uma Mensagem</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nome *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0A1F5C] focus:border-[#0A1F5C] outline-none transition-all" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Telefone *</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0A1F5C] focus:border-[#0A1F5C] outline-none transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0A1F5C] focus:border-[#0A1F5C] outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">E-mail *</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0A1F5C] focus:border-[#0A1F5C] outline-none transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem *</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0A1F5C] focus:border-[#0A1F5C] outline-none transition-all resize-none" required></textarea>
                </div>
                <button type="submit" className="w-full bg-[#0A1F5C] hover:bg-[#0A1F5C]/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  Enviar Mensagem
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;