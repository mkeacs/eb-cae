import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Lock, Mail, ArrowLeft, Shield } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de autenticação (substituir depois pela ligação à sua API/Banco de Dados)
    if (email === "admin@cae.com" && password === "admin123") {
      navigate("/admin/dashboard");
    } else {
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#0A1F5C] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-red-600 rounded-full blur-[120px] opacity-10" />

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-slate-500 hover:text-[#0A1F5C] transition-colors mb-6 text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao site
          </Link>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#0A1F5C] rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Acesso Restrito</h1>
          <p className="text-slate-500 text-sm mt-1">Painel Administrativo CAE</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200/60 backdrop-blur-sm">
          <form onSubmit={handleLogin} className="space-y-5">
            
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center font-medium border border-red-100">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">E-mail de Administrador</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0A1F5C] focus:border-[#0A1F5C] outline-none transition-all sm:text-sm"
                  placeholder="admin@cae.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Palavra-passe</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0A1F5C] focus:border-[#0A1F5C] outline-none transition-all sm:text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-[#0A1F5C] hover:bg-[#0A1F5C]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A1F5C] transition-all"
              >
                Entrar no Painel
              </button>
            </div>
          </form>
        </div>
        
        <p className="text-center mt-6 text-xs text-slate-400">
          Área exclusiva para colaboradores da Elétrica Bahiana.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;