import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas Públicas (Vitrine)
import Home from "./pages/Home"; 
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import Informativo from "./pages/Informativo";

// Páginas de Cadastro
import Index from "./pages/Index"; // O seu formulário atual (agora exclusivo para Fidelidade)
import CadastroEletricista from "./pages/CadastroEletricista"; // Nova página de cadastro profissional

// Área Administrativa
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

// Erro 404
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Rotas Principais do Site */}
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} /> 
          <Route path="/contato" element={<Contato />} />
          <Route path="/informativo" element={<Informativo />} />
          
          {/* Rotas de Cadastro Separadas */}
          <Route path="/cadastro/fidelidade" element={<Index />} />
          <Route path="/cadastro/profissional" element={<CadastroEletricista />} />
          
          {/* Rotas do Painel de Administração */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Rota para páginas não encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;