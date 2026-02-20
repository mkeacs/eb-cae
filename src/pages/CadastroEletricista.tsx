import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HardHat, Wrench, ShieldCheck, ArrowLeft, Send } from "lucide-react";
import Footer from "@/components/Footer";
import { toast } from "sonner"; // Assumindo que usa o sonner para notificações

const CadastroEletricista = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio para a API
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Cadastro profissional realizado com sucesso!");
      navigate("/"); // Redireciona para a home após sucesso
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* HEADER SIMPLIFICADO PARA FOCO NO CADASTRO */}
      <header className="bg-[#0A1F5C] text-white py-4 shadow-md sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/caelogo.png" alt="CAE Logo" className="h-8 w-auto brightness-0 invert" />
          </Link>
          <Link to="/" className="text-sm font-medium text-blue-200 hover:text-white flex items-center gap-2 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Início
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12 relative overflow-hidden">
        {/* Elemento de fundo decorativo */}
        <div className="absolute top-0 left-0 w-full h-64 bg-[#0A1F5C] rounded-b-[3rem] z-0" />

        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10 text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <HardHat className="w-8 h-8 text-yellow-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase mb-3 drop-shadow-md">
              Cadastro de <span className="text-red-500">Profissional</span>
            </h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              Faça parte da nossa rede de especialistas. Aumente a sua credibilidade e conecte-se com as melhores oportunidades do mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Coluna de Benefícios */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
                <div className="bg-blue-50 p-3 rounded-xl text-[#0A1F5C] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Certificação CAE</h3>
                  <p className="text-sm text-slate-600">Seja reconhecido como um profissional qualificado no mercado.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
                <div className="bg-red-50 p-3 rounded-xl text-red-600 shrink-0">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Cursos Gratuitos</h3>
                  <p className="text-sm text-slate-600">Acesso a workshops e treinamentos com grandes marcas.</p>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Dados Pessoais */}
                <div>
                  <h2 className="text-lg font-bold text-[#0A1F5C] border-b border-slate-100 pb-2 mb-4">Dados Pessoais</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo *</label>
                      <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0A1F5C] outline-none" placeholder="Digite o seu nome completo" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">E-mail *</label>
                      <input type="email" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0A1F5C] outline-none" placeholder="seu@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Telefone / WhatsApp *</label>
                      <input type="tel" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0A1F5C] outline-none" placeholder="(00) 00000-0000" />
                    </div>
                  </div>
                </div>

                {/* Dados Profissionais */}
                <div>
                  <h2 className="text-lg font-bold text-[#0A1F5C] border-b border-slate-100 pb-2 mb-4">Perfil Profissional</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Área de Atuação Principal *</label>
                      <select required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0A1F5C] outline-none bg-white">
                        <option value="">Selecione uma opção</option>
                        <option value="residencial">Instalação Residencial</option>
                        <option value="predial">Instalação Predial</option>
                        <option value="industrial">Manutenção Industrial</option>
                        <option value="energia_solar">Energia Solar / Fotovoltaica</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Tempo de Experiência *</label>
                      <select required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0A1F5C] outline-none bg-white">
                        <option value="">Selecione...</option>
                        <option value="iniciante">Menos de 1 ano</option>
                        <option value="junior">1 a 3 anos</option>
                        <option value="pleno">3 a 5 anos</option>
                        <option value="senior">Mais de 5 anos</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#0A1F5C] hover:bg-[#0A1F5C]/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-70"
                  >
                    {isSubmitting ? "A processar..." : "Concluir Cadastro"}
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-4">
                    Ao clicar em concluir, concorda com os nossos Termos de Uso e Política de Privacidade.
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CadastroEletricista;