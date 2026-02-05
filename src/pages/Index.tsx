import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import RegistrationForm from "@/components/RegistrationForm";
import RegulationSection from "@/components/RegulationSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Toaster } from "@/components/ui/toaster";
import { useRef } from "react";

const Index = () => {
  const registrationRef = useRef<HTMLDivElement>(null);
  const regulationRef = useRef<HTMLDivElement>(null);

  const scrollToRegistration = () => {
    registrationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRegulation = () => {
    regulationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col font-montserrat bg-gray-50">
      <Header
        onScrollToRegistration={scrollToRegistration}
        onScrollToRegulation={scrollToRegulation}
      />
      <main className="flex-grow">
        {/* Seção Principal: Hero + Formulário */}
        <section className="bg-primary pt-8 pb-16 lg:pt-16 lg:pb-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
              {/* Conteúdo do Hero (Texto + Imagem) */}
              <div className="w-full lg:w-3/5">
                <HeroSection onScrollToRegistration={scrollToRegistration} />
              </div>
              
              {/* Formulário de Cadastro em um Card */}
              <div ref={registrationRef} className="w-full lg:w-2/5 bg-white p-6 lg:p-8 rounded-2xl shadow-2xl">
                <h2 className="text-2xl font-bold text-primary text-center mb-6">Cadastre-se Agora</h2>
                <RegistrationForm onSuccess={() => {}} />
              </div>
            </div>
          </div>
        </section>

        {/* Seção do Regulamento */}
        <section ref={regulationRef} className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
             <RegulationSection />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster />
    </div>
  );
};

export default Index;