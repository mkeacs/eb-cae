import { useState } from "react";
import { FileText, CheckCircle, Search, LogOut } from "lucide-react";

// Mock de dados para visualização
const MOCK_SUBMISSIONS = [
  { id: 1, nome: "João Silva", email: "joao@email.com", nfeUrl: "#", data: "20/02/2026", status: "pendente" },
  { id: 2, nome: "Carlos Souza", email: "carlos@email.com", nfeUrl: "#", data: "19/02/2026", status: "pendente" },
];

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState(MOCK_SUBMISSIONS);

  const handleAprovarPontos = (id: number, pontos: number) => {
    // Aqui entrará a chamada para sua API salvar no banco
    console.log(`Aprovando ${pontos} pontos para a submissão ${id}`);
    setSubmissions(submissions.filter(sub => sub.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Simples */}
      <aside className="w-64 bg-[#0A1F5C] text-white hidden md:flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold uppercase">Admin CAE</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button className="w-full text-left px-4 py-3 bg-white/10 rounded-lg flex items-center gap-3">
            <FileText className="w-5 h-5" /> Validação de NF-e
          </button>
        </nav>
        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" /> Sair
          </button>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Validação de Notas Fiscais</h1>
            <p className="text-slate-500">Atribua pontos aos eletricistas baseando-se nas compras.</p>
          </div>
        </header>

        {/* Tabela de NF-es Pendentes */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
            <h3 className="font-semibold text-slate-700">Envios Pendentes</h3>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar usuário..." 
                className="pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0A1F5C] outline-none"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
                  <th className="p-4 font-medium">Usuário</th>
                  <th className="p-4 font-medium">Data do Envio</th>
                  <th className="p-4 font-medium">Documento (NF-e)</th>
                  <th className="p-4 font-medium">Atribuir Pontos</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub) => (
                  <tr key={sub.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">
                      <p className="font-semibold text-slate-800">{sub.nome}</p>
                      <p className="text-sm text-slate-500">{sub.email}</p>
                    </td>
                    <td className="p-4 text-slate-600">{sub.data}</td>
                    <td className="p-4">
                      <a href={sub.nfeUrl} target="_blank" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                        <FileText className="w-4 h-4" /> Ver NF-e
                      </a>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <input 
                          type="number" 
                          placeholder="Qtd pontos" 
                          className="w-24 px-3 py-2 border border-slate-300 rounded-lg text-sm outline-none focus:border-[#0A1F5C]"
                          id={`pontos-${sub.id}`}
                        />
                        <button 
                          onClick={() => {
                            const input = document.getElementById(`pontos-${sub.id}`) as HTMLInputElement;
                            handleAprovarPontos(sub.id, Number(input.value));
                          }}
                          className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors"
                          title="Aprovar Pontos"
                        >
                          <CheckCircle className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {submissions.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-500">
                      Nenhuma nota fiscal pendente de avaliação.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;